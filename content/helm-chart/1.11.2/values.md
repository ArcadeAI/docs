Every configurable value, grouped. Defaults are in
`values.yaml`.

### Image pulls

| Key                             | Required?              | What it changes                                                                                                                                                                                                              |
| ------------------------------- | ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dockerRegistry.enabled`        | No                     | Creates the image-pull Secret.                                                                                                                                                                                               |
| `dockerRegistry.existingSecret` | No                     | Name of a pre-existing `kubernetes.io/dockerconfigjson` Secret in the release namespace. When set, the chart skips generating a Secret and references this one. `username`, `token`, `server`, and `secretName` are ignored. |
| `dockerRegistry.server`         | No                     | Docker registry hostname (default Docker Hub). Ignored when `existingSecret` is set.                                                                                                                                         |
| `dockerRegistry.username`       | If no `existingSecret` | Registry username. Ignored when `existingSecret` is set.                                                                                                                                                                     |
| `dockerRegistry.token`          | If no `existingSecret` | Registry token (Docker Hub OAuth Access Token). Ignored when `existingSecret` is set.                                                                                                                                        |
| `dockerRegistry.secretName`     | No                     | Name of the chart-generated image-pull Secret. Ignored when `existingSecret` is set.                                                                                                                                         |

To reuse a pre-provisioned image-pull Secret instead of passing credentials
inline:

```yaml
dockerRegistry:
  existingSecret: my-dockerhub-pull-secret # must already exist, type: kubernetes.io/dockerconfigjson
```

### Support images

Init containers pull two support images. Override the `repository` to mirror
them off Docker Hub for private-registry or air-gapped installs — this is the
only way to keep the migration/seed/reconcile Helm hooks off Docker Hub, since
Helm doesn't run post-renderers over hook manifests. Defaults pull from Docker
Hub.

| Key                                | Required? | What it changes                                                                                 |
| ---------------------------------- | --------- | ----------------------------------------------------------------------------------------------- |
| `supportImages.busybox.repository` | No        | Image for the `generate-env-file` init container. Default `busybox`.                            |
| `supportImages.busybox.tag`        | No        | Tag for the busybox image. Default `1.36`.                                                      |
| `supportImages.busybox.pullPolicy` | No        | Pull policy for the busybox image. Default `IfNotPresent`.                                      |
| `supportImages.curl.repository`    | No        | Image for the `wait-for-workers` init container (a real curl image). Default `curlimages/curl`. |
| `supportImages.curl.tag`           | No        | Tag for the curl image. Default `8.5.0`.                                                        |
| `supportImages.curl.pullPolicy`    | No        | Pull policy for the curl image. Default `IfNotPresent`.                                         |

### Networking

| Key                     | Required? | What it changes                                                                                                                                                  |
| ----------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `global.bindAddress`    | No        | Address every pod's HTTP server binds to. Default `0.0.0.0` (IPv4). Set to `::` for IPv6 or dual-stack.                                                          |
| `global.ipFamilyPolicy` | No        | Sets `spec.ipFamilyPolicy` on every Arcade Service. `SingleStack` / `PreferDualStack` / `RequireDualStack`. Unset → cluster default (usually IPv4 single-stack). |
| `global.ipFamilies`     | No        | Sets `spec.ipFamilies` on every Arcade Service, e.g. `[IPv4, IPv6]`. Order picks the primary ClusterIP. Unset → cluster default.                                 |

`bindAddress` controls what the pod listens on; `ipFamilyPolicy` /
`ipFamilies` control which ClusterIP families the Service exposes. For IPv6
traffic to reach the pods you typically need both — `bindAddress: '::'`
plus a dual-stack policy:

```yaml
global:
  bindAddress: "::"
  ipFamilyPolicy: PreferDualStack
  ipFamilies: [IPv4, IPv6]
```

On Linux, `::` accepts IPv4 via IPv4-mapped IPv6. The
`opentelemetry-collector` subchart isn't templated by the parent chart —
override its receiver/exporter endpoints to `[::]:port` directly if you
need IPv6 there.

### Networking and security

| Key                                | Required? | What it changes                                                                                                                                                                                                                                                                                  |
| ---------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `podSecurityContext.enabled`       | No        | Apply `podSecurityContext.*` (minus `enabled`) as the pod `securityContext` on every workload and Job. Enable to satisfy Pod Security Standards "restricted".                                                                                                                                    |
| `containerSecurityContext.enabled` | No        | Apply `containerSecurityContext.*` on every app and init container; dashboard nginx gains writable `emptyDir` mounts so it tolerates `readOnlyRootFilesystem`.                                                                                                                                   |
| `networkPolicy.enabled`            | No        | Render a default-deny plus allow-ingress/allow-egress `NetworkPolicy` for Arcade pods. `egressCIDRs`, `ingressNamespaceLabels`, `ingressPodLabels` widen the allows.                                                                                                                             |
| `ssrfAllowlist`                    | No        | Destinations a user-created worker / MCP server may sit on despite the engine's private-IP block. Entries are `scheme://host[:port]`, `'*.domain'`, a CIDR/IP, or `'*'`. Empty (default) keeps the block.                                                                                        |
| `pluginSsrfAllowlist`              | No        | Same entry shapes, for plugin webhook hook URLs — which also must be `https` unless listed. **Defaults to `['*']`, i.e. the gate is off**, so an upgrade doesn't stop existing hooks on internal or plaintext addresses. Narrow it to your real hook destinations, or `[]` if none are internal. |

### Availability

| Key                | Required? | What it changes                                                                                             |
| ------------------ | --------- | ----------------------------------------------------------------------------------------------------------- |
| `pdb.enabled`      | No        | Render a `PodDisruptionBudget` for each long-running Deployment.                                            |
| `pdb.minAvailable` | No        | `minAvailable` applied to every PDB the chart renders. Integer or percentage string (`'25%'`). Default `1`. |

### Jobs

| Key                          | Required? | What it changes                                                                                                             |
| ---------------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------- |
| `jobs.activeDeadlineSeconds` | No        | Override `activeDeadlineSeconds` on the migration/seed/reconcile Jobs. `0` keeps each Job's built-in default (300s / 600s). |

### Public catalog

`GET /v1/public/tool_catalog` and `GET /v1/public/tools` serve the deployment's
default catalog with **no credential and no tenant**. They are **off by default**
and only served when you turn them on:

```yaml
engine:
  publicCatalog:
    enabled: true
```

**Understand what this publishes before enabling it.** On Arcade's hosted
platform the "default catalog" is Arcade's own shipped toolkits. In a self-hosted
install it is _whatever workers you configured_, so turning this on publishes
their tool names, descriptions, and input/output schemas to anyone who can reach
the engine. It never exposes tenant-scoped toolkits, secret values, OAuth tokens,
or per-user readiness — but the operator's own static workers are fair game. That
is why the default is off and why enabling it is a deliberate act.

Once enabled:

- Responses are shared-cacheable for one hour (`Cache-Control: public,
max-age=3600, must-revalidate`) and carry an `ETag`, so a CDN in front of the
  engine absorbs the traffic. Nothing in the engine rate-limits these routes;
  if you expose them to the open internet, put a rate limit at your edge.
- The catalog is built once and reused for `engine.publicCatalog.cacheTtl`
  (default `30s`), so cost does not scale with request volume. A change to the
  default catalog becomes visible within that window without any manual step.
- The catalog is populated by `arcade reconcile`, which the chart runs on
  install/upgrade (`engine.reconcile.enabled`). If reconcile has never run the
  endpoints answer with an empty catalog rather than an error.

To turn it off again, set `enabled: false`. The endpoints then respond as if they
do not exist, and that response is non-cacheable, so caches converge to the off
state on their next revalidation rather than serving a prior copy.

#### Branded catalog through the experience-api

The engine's two routes carry operational data only — name, description,
version, `tool_count`, and requirements. Icons, labels, categories, and
pro/BYOC classifications belong to the design-system catalog. The
experience-api serves `GET /api/public/tool_catalog` and `GET /api/public/tools`,
which merge the two so a docs or marketing page gets one branded read instead of
stitching them client-side.

This half is off by default too, and needs **both** flags on:

```yaml
engine:
  publicCatalog:
    enabled: true
experienceApi:
  publicCatalog:
    enabled: true
```

Turning on only one side is a misconfiguration: with just the experience-api
flag, the engine refuses the upstream read and the BFF answers `503`; with just
the engine flag, the engine's own two routes work and the BFF's answer `404`.

Once both are on:

- Both sources are cached in-process, so a request costs no upstream work during
  the freshness window. One snapshot feeds both routes, so a toolkit's
  `tool_count` never disagrees with the tools listed for it. `limit` / `offset`
  (both routes) and `toolkit` (`/tools` only) match the engine's public catalog:
  default `limit=100`, max `1000`.
  Responses are shared-cacheable
  (`max-age=60, s-maxage=300, stale-while-revalidate=600`) and carry an `ETag`.
  Like the engine's routes, nothing here rate-limits anonymous traffic — put a
  rate limit at your edge.
- A branding-source outage degrades to `metadata: null` rather than failing the
  read, so the catalog stays available when the design-system CDN is not.
- Cross-origin reads are allowed from `arcade.dev` and `bosslevel.dev` (and
  their subdomains) without credentials, in addition to whatever
  `CORS_ORIGIN` already trusts.
- `experienceApi.publicCatalog.metadataUrl` and `.engineUrl` point the two
  sources at hosts you control. A private deployment that opts in should set
  `metadataUrl`, since the default is an Arcade-hosted CDN.
- Each replica holds the whole catalog in memory, and a refresh briefly holds
  the outgoing snapshot alongside the incoming one. On a large catalog that is
  tens of megabytes per replica, so check
  `experienceApi.resources.limits.memory` (default `512Mi`) before enabling.

### Gateway API

The chart emits one `HTTPRoute` per service, attached to a Gateway you
manage outside the chart. TLS terminates at the Gateway listener — no TLS
config lives on the routes. Controller-agnostic: works with AWS Gateway
API Controller, Traefik, Envoy Gateway, and others.

When `gateway.parentRefs` is empty, no HTTPRoutes render — this is the
chart's out-of-the-box state.

| Key                                | Required?                       | What it changes                                                                       |
| ---------------------------------- | ------------------------------- | ------------------------------------------------------------------------------------- |
| `gateway.enabled`                  | No                              | Render HTTPRoutes. Default `true`.                                                    |
| `gateway.parentRefs`               | **Yes** when `gateway.enabled`  | Shared `parentRefs` for every HTTPRoute. Empty means no routes render.                |
| `gateway.apiVersion`               | No                              | HTTPRoute apiVersion. Override for controllers pinned to `v1beta1`.                   |
| `gateway.hostname`                 | **Yes** (or `ingress.hostname`) | Base hostname; every service URL derives from this. Falls back to `ingress.hostname`. |
| `gateway.protocol`                 | No                              | `https` or `http` for generated service URLs. Falls back to `ingress.protocol`.       |
| `gateway.subdomains.api`           | No                              | Subdomain label for the engine. Default `api`.                                        |
| `gateway.subdomains.coordinator`   | No                              | Subdomain label for the coordinator. Default `coordinator`.                           |
| `gateway.subdomains.dashboard`     | No                              | Subdomain label for the dashboard. Default `dashboard`.                               |
| `gateway.subdomains.experienceApi` | No                              | Subdomain label for the experience API. Default `experience`.                         |
| `gateway.engine.parentRefs`        | No                              | Per-service override for the engine route.                                            |
| `gateway.coordinator.parentRefs`   | No                              | Per-service override for the coordinator routes.                                      |
| `gateway.dashboard.parentRefs`     | No                              | Per-service override for the dashboard route.                                         |
| `gateway.experienceApi.parentRefs` | No                              | Per-service override for the experience-api route.                                    |

### Ingress and TLS (deprecated)

The legacy Ingress path is kept as a fallback during migration. Prefer
`gateway.*` above. `ingress.enabled` defaults to `false`; the
hostname/subdomain/URL settings remain in use by both paths.

| Key                                    | Required?                | What it changes                                                             |
| -------------------------------------- | ------------------------ | --------------------------------------------------------------------------- |
| `ingress.enabled`                      | No                       | Creates Ingress resources. Default `false`.                                 |
| `ingress.hostname`                     | **Yes**                  | Base hostname; every service URL derives from this.                         |
| `ingress.protocol`                     | No                       | `https` or `http` for generated service URLs.                               |
| `ingress.subdomains.api`               | No                       | Subdomain label for the engine. Default `api`.                              |
| `ingress.subdomains.coordinator`       | No                       | Subdomain label for the coordinator. Default `coordinator`.                 |
| `ingress.subdomains.dashboard`         | No                       | Subdomain label for the dashboard. Default `dashboard`.                     |
| `ingress.subdomains.experienceApi`     | No                       | Subdomain label for the experience API. Default `experience`.               |
| `ingress.type`                         | No                       | `private` (self-signed TLS) or `public` (Let's Encrypt). Default `private`. |
| `ingress.publicIngressClass`           | No                       | IngressClass when `type: public`.                                           |
| `ingress.privateIngressClass`          | No                       | IngressClass when `type: private`.                                          |
| `ingress.publicAnnotations`            | No                       | Annotations applied to every public Ingress.                                |
| `ingress.privateAnnotations`           | No                       | Annotations applied to every private Ingress.                               |
| `ingress.letsEncrypt.enabled`          | No                       | Requests Let's Encrypt certs via cert-manager.                              |
| `ingress.letsEncrypt.clusterIssuer`    | If `letsEncrypt.enabled` | Name of the ClusterIssuer.                                                  |
| `ingress.letsEncrypt.secretName`       | No                       | Name of the generated TLS Secret.                                           |
| `ingress.letsEncrypt.annotations`      | No                       | Additional annotations for the Let's Encrypt flow.                          |
| `ingress.selfSignedIssuer.enabled`     | No                       | Creates a self-signed ClusterIssuer for private TLS. Default `true`.        |
| `ingress.selfSignedIssuer.name`        | No                       | Name of the generated ClusterIssuer.                                        |
| `ingress.selfSignedIssuer.caNamespace` | No                       | Namespace the self-signed CA Certificate lives in.                          |

### Authentication

Both signing secrets are auto-generated on first install and persisted
across upgrades. Point the `ExistingSecret` fields at a pre-created
Secret in the release namespace to source them from an external vault
instead.

| Key                                             | Required? | What it changes                                                                               |
| ----------------------------------------------- | --------- | --------------------------------------------------------------------------------------------- |
| `auth.gatewayStateSigningKeyExistingSecret`     | No        | Name of a Secret to read the MCP gateway OAuth state HMAC key from.                           |
| `auth.gatewayStateSigningKeyExistingSecretKey`  | No        | Key within that Secret. Default `INTERMEDIATE_AS_STATE_SIGNING_KEY`.                          |
| `auth.dashboardSessionSecretsExistingSecret`    | No        | Name of a Secret to read the Better Auth dashboard session cookie signing key from.           |
| `auth.dashboardSessionSecretsExistingSecretKey` | No        | Key within that Secret. Default `BETTER_AUTH_SECRETS`. Format `<version>:<value>`, 32+ chars. |

#### Upstream IdP (post-install seeding)

A post-install/post-upgrade Job registers the upstream OIDC provider for
the user's organization. On a fresh install (no orgs yet) it bootstraps
an organization + project; on subsequent runs it attaches the IdP to the
first existing organization.

The Job reads credentials from a Kubernetes Secret named in
`auth.upstreamIdp.secretName` (default `upstream-idp-creds`). **Create it
before `helm install`:**

```sh
kubectl create secret generic upstream-idp-creds \
  --namespace arcade \
  --from-literal=UPSTREAM_NAME='Acme Okta' \
  --from-literal=UPSTREAM_ISSUER='https://acme.okta.com' \
  --from-literal=UPSTREAM_CLIENT_ID='0oa...' \
  --from-literal=UPSTREAM_CLIENT_SECRET='...'
```

| Key                                     | Required? | What it changes                                             |
| --------------------------------------- | --------- | ----------------------------------------------------------- |
| `auth.upstreamIdp.secretName`           | No        | Name of the Secret holding upstream OIDC credentials.       |
| `auth.upstreamIdp.bootstrapOrgName`     | No        | Org name created on fresh install. Ignored on upgrades.     |
| `auth.upstreamIdp.bootstrapProjectName` | No        | Project name created on fresh install. Ignored on upgrades. |

#### Gateway login

The Gateway "Arcade Auth" flow (MCP clients with `auth_type: arcade_oauth`)
authenticates via a single platform-wide "static" User Source. By default
that row points at the coordinator-hosted Arcade Identity service at
`{coordinatorBase}/signin/oidc`, which federates to the customer's
upstream IdP via the `auth.upstreamIdp` config above.

Set `auth.gatewayLogin.issuer` to point the Gateway login flow at an
external IdP directly, skipping Arcade Identity. The same Okta (or Auth0,
etc.) app used for dashboard SSO can serve both flows — just register
**both** redirect URIs on it:

- `{coordinatorBase}/signin/oidc/callback` — dashboard SSO
- `{coordinatorBase}/oauth2/intermediate_callback` — Gateway login

When `auth.gatewayLogin.existingSecret` is unset (the default), the
chart reuses `auth.upstreamIdp.secretName` and reads the existing
`UPSTREAM_CLIENT_ID` / `UPSTREAM_CLIENT_SECRET` keys — no extra Secret
needed.

| Key                                 | Required?     | What it changes                                                                                                                                                         |
| ----------------------------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auth.gatewayLogin.issuer`          | No            | OIDC issuer URL of the external IdP. Empty (default) = use coordinator-hosted Arcade Identity.                                                                          |
| `auth.gatewayLogin.existingSecret`  | If issuer set | Secret with the OIDC client credentials. Default reuses `auth.upstreamIdp.secretName`.                                                                                  |
| `auth.gatewayLogin.clientIdKey`     | No            | Key within the Secret for the client_id. Default `UPSTREAM_CLIENT_ID`.                                                                                                  |
| `auth.gatewayLogin.clientSecretKey` | No            | Key within the Secret for the client_secret. Default `UPSTREAM_CLIENT_SECRET`.                                                                                          |
| `auth.cliRedirectUris`              | No            | Loopback callback URIs accepted for `arcade login`. Defaults match arcade-cli's hardcoded `127.0.0.1:9905`; override only if you ship a CLI build that binds elsewhere. |

**When to set a distinct `existingSecret`:** leaving it empty silently
reuses `auth.upstreamIdp.secretName`. That's the right default when one
IdP app serves both flows, but it means **rotating `auth.upstreamIdp`'s
Secret will affect Gateway login in lockstep**. Set
`auth.gatewayLogin.existingSecret` to a separate Secret when you need
independent rotation, distinct IdP apps for SSO vs. Gateway login, a
phased IdP migration, or different sub-claim mappings.

### URL overrides

Every URL under `arcade.*` auto-derives from `ingress.hostname` and
`ingress.subdomains.*`. Override these only for split-horizon DNS or
external proxy routing.

| Key                                 | Required? | What it changes                                                                                                                                     |
| ----------------------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `arcade.engineUrl`                  | No        | Public engine URL.                                                                                                                                  |
| `arcade.coordinatorUrl`             | No        | Public coordinator URL (with `/api/v1`).                                                                                                            |
| `arcade.coordinatorBaseUrl`         | No        | Public coordinator base URL (no `/api/v1`).                                                                                                         |
| `arcade.dashboardUrl`               | No        | Public dashboard URL.                                                                                                                               |
| `arcade.experienceApiUrl`           | No        | Public experience API URL.                                                                                                                          |
| `arcade.identityIssuerUrl`          | No        | Issuer URL for Arcade Identity. Defaults to `<coordinatorBaseUrl>/signin/oidc`.                                                                     |
| `arcade.identityRedirectUri`        | No        | Override the OIDC redirect URI for dashboard login (experience-api OAuth callback). Defaults to `<experienceApiUrl>/api/auth/oauth2/callback/oidc`. |
| `arcade.identityFederationClientId` | No        | Federation client ID for multi-instance deployments.                                                                                                |
| `arcade.engineId`                   | No        | Engine UUID. Auto-generated on first install if empty.                                                                                              |
| `arcade.engineSlug`                 | No        | Engine slug. Derived from `engineId` if empty.                                                                                                      |

### Features

| Key                                         | Required? | What it changes                                                                                                                                                                                                                                                                          |
| ------------------------------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `features.chatEnabled`                      | No        | Enables the Chat feature in the dashboard. Requires a provider key for at least one model in `playground.models` (e.g. `playground.apiKey` or `playground.openaiApiKey`). Default `true`.                                                                                                |
| `features.deniedPassthroughHeaders`         | No        | Header names a gateway may not declare in `allowed_passthrough_headers`, matched case-insensitively when a gateway is created, updated, or patched. Gateways that already persisted a listed header keep passing it through. Set to `[]` to allow any header. Default `[Authorization]`. |
| `features.auditLog.enabled`                 | No        | Enables audit logging. Default `true`.                                                                                                                                                                                                                                                   |
| `features.auditLog.publishMethod`           | No        | How the engine publishes audit events: `http` (signed coordinator endpoint, default) or `redis` (write the audit stream directly). Default `http`.                                                                                                                                       |
| `features.auditLog.retentionDays`           | No        | Days to retain persisted audit events before cleanup (1–3650). Default `30`.                                                                                                                                                                                                             |
| `features.auditLog.streamMaxLen`            | No        | Max entries buffered in the Redis audit stream. Applied by both the coordinator and the engine Redis publisher. Default `100000`.                                                                                                                                                        |
| `features.auditLog.cleanupWindow.startHour` | No        | Off-peak UTC hour the expired-event purge starts (0–23). Must differ from `endHour`. Default `2`.                                                                                                                                                                                        |
| `features.auditLog.cleanupWindow.endHour`   | No        | Off-peak UTC hour the expired-event purge ends (0–23). Must differ from `startHour`. Default `4`.                                                                                                                                                                                        |

### Operator RBAC (OpenFGA)

Fine-grained, per-organization authorization. Always deployed and always
enforced: the coordinator decides every organization- and project-scoped admin
route against this policy decision point, and fails closed — HTTP 503 — when it
cannot reach one. There is no configuration in which the platform runs without
it, and no legacy membership-check fallback.

> [!IMPORTANT]
> Upgrading a deployment that already has organizations requires a one-time step
> on chart 1.9.8 **before** you upgrade to this release. See
> [Upgrading from 1.9.x](#upgrading-from-19x-operator-rbac-prerequisite).

| Key                                   | Required? | What it changes                                                                                                                                                                                     |
| ------------------------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `rbac.openfga.image.repository`       | No        | OpenFGA image repository. Default `arcadedev/openfga`.                                                                                                                                              |
| `rbac.openfga.image.tag`              | No        | OpenFGA image tag. Defaults to the chart's appVersion. The authorization model ships inside this image — keep it in step with `coordinator.image.tag`, and at or above the chart default.           |
| `rbac.openfga.image.pullPolicy`       | No        | Image pull policy.                                                                                                                                                                                  |
| `rbac.openfga.apiUrl`                 | No        | In-cluster PDP URL for the coordinator and bootstrap job. Defaults to `http://<release>-openfga:8080`.                                                                                              |
| `rbac.openfga.storeName`              | No        | Name of the OpenFGA store the bootstrap job provisions and the coordinator resolves by. Default `arcade-operator-rbac`.                                                                             |
| `rbac.openfga.storeId`                | No        | Server-minted store id. Normally leave empty — the coordinator resolves it by name at startup. Set only to use a pre-existing store id.                                                             |
| `rbac.openfga.modelId`                | No        | Server-minted model id. Normally leave empty — the coordinator waits for the model shipped in the OpenFGA image and pins that id at pod start. Set only to pin a specific model and skip that wait. |
| `rbac.openfga.tokenExistingSecret`    | No        | Secret holding the preshared API token shared by the PDP and coordinator. When empty the chart generates and persists one.                                                                          |
| `rbac.openfga.tokenExistingSecretKey` | No        | Key within `tokenExistingSecret` that holds the token. Default `openfga-api-token`.                                                                                                                 |
| `rbac.openfga.allowUnauthenticated`   | No        | **Insecure** — runs the PDP with authentication disabled. Local/eval only. Default `false`.                                                                                                         |
| `rbac.openfga.replicaCount`           | No        | Number of OpenFGA pods. Default `2`.                                                                                                                                                                |
| `rbac.openfga.database.name`          | No        | OpenFGA's logical database on the shared Postgres. Default `openfga`.                                                                                                                               |
| `rbac.openfga.database.create`        | No        | Run `CREATE DATABASE` for the openfga database if absent. Default `true`.                                                                                                                           |
| `rbac.openfga.database.migrations`    | No        | Run the OpenFGA schema migration on install/upgrade. **On by default** — the PDP serves nothing until its schema exists. Set false only to migrate out-of-band.                                     |
| `rbac.openfga.resources.requests`     | No        | CPU/memory requests.                                                                                                                                                                                |
| `rbac.openfga.resources.limits`       | No        | CPU/memory limits.                                                                                                                                                                                  |

The bootstrap job creates the store and writes the authorization model; the
coordinator blocks startup until the store exists **and** its latest model is the
one shipped in the OpenFGA image, then pins that model id for the pod's lifetime —
no manual step, no restart.

Waiting for the model, not just the store, is what keeps an upgrade that adds new
relations from crash-looping the coordinator: without it a rolling pod can resolve
the store instantly, read the still-current pre-upgrade model, and fail its startup
consistency check while the bootstrap job is mid-write. Pinning the id also stops a
later write from swapping the model out from under a pod that already booted.

The bootstrap job is a plain Job, not a hook, so it and the coordinator are applied
together and converge; `helm --wait` is safe. Making it a hook would deadlock —
hooks are deferred until Deployments are Ready, and the coordinator is not Ready
until the job it is waiting on has run.

#### Upgrading from 1.9.x (operator-RBAC prerequisite)

**A fresh install needs nothing here.** Organizations created on this release get
their authorization grants written as they are created.

**An existing deployment does.** Organizations created before RBAC became
mandatory have no grants, and nothing in this release creates them: the bootstrap
job provisions the store and writes the authorization model, not grants. The
role-management API cannot bootstrap the first one either, because calling it
already requires a grant. Upgrading straight to this release leaves every
organization- and project-scoped admin route returning 403/404 to everyone —
projects, members, invitations, API keys, user sources, audit logs, billing.

The commands that write those grants **do not exist in this release's coordinator
image**. They ship in 1.9.8. So the upgrade runs in four steps, in this order:

1. **On chart 1.9.8, set `rbac.enabled: true`** and upgrade. 1.9.8 ships it
   `false`, so a stock install has no policy decision point at all — no OpenFGA
   Deployment, no `OPENFGA_API_URL` — and the backfill below has nothing to write
   grants into. Wait for the bootstrap Job to provision the store and write the
   authorization model before continuing.

2. **Backfill grants**, once per organization. Both commands are dry-run until
   `--commit` — run each without it first and read the plan:

   ```sh
   kubectl exec -n <namespace> deploy/<release>-coordinator -c coordinator -- \
     python -m arcade.cli enable-operator-authz --org-id <org-id> --commit

   kubectl exec -n <namespace> deploy/<release>-coordinator -c coordinator -- \
     python -m arcade.cli repair-operator-authz --org-id <org-id> --commit
   ```

   `enable-operator-authz --all` covers every organization at once, but refuses
   unless the `operator-authz-new-orgs` system flag is already on — set it with
   `python -m arcade.cli set-system-flag` first, or enrol one `--org-id` at a
   time. `repair-operator-authz` takes a repeatable `--account <uuid>` to
   restrict the grant set; use it when the dry-run plan lists accounts whose
   access was deliberately revoked.

3. **Verify** administration works for a non-owner member on 1.9.8.

4. **Remove `rbac.enabled` from your values** and upgrade to this release. The
   chart refuses to render while the key is present, because it is silently
   ignored otherwise.

If you have already upgraded and are locked out, roll back to 1.9.8, set
`rbac.enabled: true` there, run the backfill, and upgrade again. Writing tuples directly against OpenFGA is
break-glass only — see the `openfga-tuples` runbook.

### Raise `helm --timeout` past the hook waits

Helm's default `--timeout` is 5m, but this release's hooks can legitimately wait
longer: the seed-idp hook budgets ~19m for the policy decision point to come up,
and a concurrent index build on a large `tool_execution` can outlast 5m too.
Helm kills the release at its own timeout regardless of a Job's
`activeDeadlineSeconds`, so the release fails while the work is still healthy.
Pass `--timeout 30m` on the upgrade. Raising `jobs.activeDeadlineSeconds`
without raising `--timeout` widens the gap rather than closing it.

> [!WARNING]
> If you pin `rbac.openfga.modelId`, clear it before this upgrade. This release
> adds relations to the authorization model, and a pinned id skips the resolver
> that waits for the new model — leaving the coordinator asking for relations the
> pinned model does not define. Leave it empty and the coordinator pins the right
> id itself.

### Dashboard

| Key                                    | Required? | What it changes                                                                                 |
| -------------------------------------- | --------- | ----------------------------------------------------------------------------------------------- |
| `dashboard.enabled`                    | No        | Deploys the dashboard.                                                                          |
| `dashboard.replicaCount`               | No        | Number of dashboard pods.                                                                       |
| `dashboard.image.repository`           | No        | Dashboard image repository.                                                                     |
| `dashboard.image.tag`                  | No        | Dashboard image tag. Defaults to the chart's appVersion.                                        |
| `dashboard.image.pullPolicy`           | No        | Image pull policy.                                                                              |
| `dashboard.service.type`               | No        | Service type.                                                                                   |
| `dashboard.service.port`               | No        | Service port.                                                                                   |
| `dashboard.service.healthCheckPath`    | No        | ALB target-group health-check path (Gateway API `TargetGroupConfiguration`). Default `/health`. |
| `dashboard.resources.requests`         | No        | CPU/memory requests.                                                                            |
| `dashboard.resources.limits`           | No        | CPU/memory limits.                                                                              |
| `dashboard.experienceApiUrl`           | No        | Override for the experience API URL exposed to the browser.                                     |
| `dashboard.accountUiUrl`               | No        | URL users are redirected to for account registration.                                           |
| `dashboard.csp.includeIngressHostname` | No        | Adds `ingress.hostname` to the dashboard's CSP origins.                                         |
| `dashboard.csp.additionalOrigins`      | No        | Extra origins for `script-src`, `connect-src`, `frame-src`, etc.                                |

### Engine

| Key                                         | Required?        | What it changes                                                                                                                                                                                                                                                                         |
| ------------------------------------------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `engine.replicaCount`                       | No               | Number of engine pods.                                                                                                                                                                                                                                                                  |
| `engine.database.name`                      | No               | Engine database name. Default `arcade_engine`. The scalar form `engine.database: <name>` is still accepted as a fallback.                                                                                                                                                               |
| `engine.database.create`                    | No               | Run `CREATE DATABASE` on startup. Set to `false` when the database is provisioned out-of-band (e.g., managed Postgres). Default `true`.                                                                                                                                                 |
| `engine.database.migrations`                | No               | Run engine DB migrations on install/upgrade. Defaults to `true` when unset.                                                                                                                                                                                                             |
| `engine.image.repository`                   | No               | Engine image repository.                                                                                                                                                                                                                                                                |
| `engine.image.tag`                          | No               | Engine image tag. Defaults to the chart's appVersion.                                                                                                                                                                                                                                   |
| `engine.image.pullPolicy`                   | No               | Image pull policy.                                                                                                                                                                                                                                                                      |
| `engine.service.type`                       | No               | Service type.                                                                                                                                                                                                                                                                           |
| `engine.service.port`                       | No               | Service port.                                                                                                                                                                                                                                                                           |
| `engine.service.healthCheckPath`            | No               | ALB target-group health-check path (Gateway API `TargetGroupConfiguration`). Default `/v1/health`.                                                                                                                                                                                      |
| `engine.resources.requests`                 | No               | CPU/memory requests.                                                                                                                                                                                                                                                                    |
| `engine.resources.limits`                   | No               | CPU/memory limits.                                                                                                                                                                                                                                                                      |
| `engine.cache.apiKeyTTL`                    | No               | API-key cache TTL.                                                                                                                                                                                                                                                                      |
| `engine.cache.workerTTL`                    | No               | Worker registry cache TTL.                                                                                                                                                                                                                                                              |
| `engine.cache.toolRegistryTTL`              | No               | Tool registry cache TTL.                                                                                                                                                                                                                                                                |
| `engine.hpa.enabled`                        | No               | Creates a HorizontalPodAutoscaler.                                                                                                                                                                                                                                                      |
| `engine.hpa.minReplicas`                    | If `hpa.enabled` | HPA minimum replicas.                                                                                                                                                                                                                                                                   |
| `engine.hpa.maxReplicas`                    | If `hpa.enabled` | HPA maximum replicas.                                                                                                                                                                                                                                                                   |
| `engine.hpa.targetCPUUtilizationPercentage` | If `hpa.enabled` | HPA CPU target.                                                                                                                                                                                                                                                                         |
| `engine.migration.enabled`                  | No               | **Deprecated** — use `engine.database.migrations`. Only honored when `engine.database.migrations` is unset.                                                                                                                                                                             |
| `engine.reconcile.enabled`                  | No               | Runs `arcade reconcile` post-install/upgrade to fetch each worker's tool catalog into the engine DB. Disable only if you trigger reconcile out-of-band.                                                                                                                                 |
| `engine.gatewayBootstrap.enabled`           | No               | Runs `arcade bootstrap-gateways` in a `<release>-engine-gateway-bootstrap` Job after the release is applied, reconciling the static gateway configuration ahead of engine seeding, identity seeding and worker reconcile. Independent of `engine.database.migrations`. Default `false`. |
| `engine.internalCoordinatorUrl`             | No               | Override for service-to-service calls. Defaults to in-cluster service DNS.                                                                                                                                                                                                              |
| `engine.publicCatalog.enabled`              | No               | Serve the credential-free public catalog endpoints. **Default `false`.** See [Public catalog](#public-catalog) before turning it on.                                                                                                                                                    |
| `engine.publicCatalog.cacheTtl`             | No               | How long a built public catalog is reused before the next read rebuilds it. Default `30s`.                                                                                                                                                                                              |
| `engine.toolsListPageSize`                  | No               | Tools returned per MCP `tools/list` page. `0` (default) keeps the engine's own default of 100. Raise it so clients make fewer round trips over a large catalog. Needs a chart value because it sits under a config block `engine.extraConfig` cannot reach.                             |
| `engine.manageAuthorization.enabled`        | No               | List the `System_ManageAuthorization` built-in on every gateway that can reach a tool needing end-user authorization, with guidance ahead of the gateway's MCP instructions. **Default `true`.**                                                                                        |
| `engine.manageAuthorization.instruction`    | No               | Replaces that guidance. Unset keeps the engine's built-in text; `''` adds none.                                                                                                                                                                                                         |
| `engine.extraConfig`                        | No               | YAML appended verbatim to `engine.yaml`. `${env:VAR}` evaluated at runtime.                                                                                                                                                                                                             |
| `engine.extraEnvFrom`                       | No               | Extra envFrom sources, appended after chart-managed entries.                                                                                                                                                                                                                            |
| `engine.extraEnv`                           | No               | Extra env entries (raw `EnvVar`), appended last.                                                                                                                                                                                                                                        |

### OAuth providers

Top-level `oauthProviders` block. Each entry renders an `auth.providers`
row in the engine config with `id: arcade-<id>`, `provider_id: <id>`, and
env-var refs `<ID>_CLIENT_ID` / `<ID>_CLIENT_SECRET` resolved from the
Secret named in `oauthProviders.existingSecret`. Defaults to empty —
operators add only the providers they want to enable.

| Key                             | Required? | What it changes                                                                                                |
| ------------------------------- | --------- | -------------------------------------------------------------------------------------------------------------- |
| `oauthProviders.existingSecret` | No        | Name of a Secret holding `<PROVIDER>_CLIENT_ID` / `<PROVIDER>_CLIENT_SECRET` keys. The engine pod envFroms it. |
| `oauthProviders.providers[]`    | No        | List of providers to render. Defaults to `[]` — nothing rendered, no upstream OAuth flows possible.            |

Per-entry shape:

| Field         | Default                             | What it changes                                                                                                                                                                                                           |
| ------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`          | _required_                          | Provider id (e.g. `airtable`, `github`).                                                                                                                                                                                  |
| `enabled`     | `true`                              | When `false`, row stays in config but the engine won't initiate OAuth flows.                                                                                                                                              |
| `description` | `Arcade's default <Title> provider` | Display name. Set explicitly for non-titlecase names (`GitHub`, `ClickUp`) or product renames (Square←squareup).                                                                                                          |
| `oauth2`      | _unset_                             | Overrides layered over the bundled configuration for this `provider_id` — `scope_delimiter`, `pkce`, and the `authorize_request` / `token_request` / `refresh_request` blocks. Fields left out keep their bundled values. |

Create the credentials Secret yourself — the chart doesn't generate it.
Each enabled provider needs two keys: `<PROVIDER_ID_UPPERCASE>_CLIENT_ID`
and `<PROVIDER_ID_UPPERCASE>_CLIENT_SECRET`.

```sh
kubectl create secret generic arcade-engine-oauth-providers -n arcade \
  --from-literal=GOOGLE_CLIENT_ID=<...> \
  --from-literal=GOOGLE_CLIENT_SECRET=<...> \
  --from-literal=GITHUB_CLIENT_ID=<...> \
  --from-literal=GITHUB_CLIENT_SECRET=<...>
```

Then list the providers in values.yaml (four per-entry shapes shown):

```yaml
oauthProviders:
  existingSecret: arcade-engine-oauth-providers
  providers:
    - id: google
    - id: github
      description: "Arcade's default GitHub provider" # override titlecase
    - id: dropbox
      enabled: false # row rendered but engine won't initiate flows
    - id: microsoft
      oauth2: # authorize against one Entra tenant instead of /common
        authorize_request:
          endpoint: https://login.microsoftonline.com/<tenant>/oauth2/v2.0/authorize
        token_request:
          endpoint: https://login.microsoftonline.com/<tenant>/oauth2/v2.0/token
        refresh_request:
          endpoint: https://login.microsoftonline.com/<tenant>/oauth2/v2.0/token
```

### Dashboard playground

| Key                                           | Required?                 | What it changes                                                                                                                                                                 |
| --------------------------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `playground.apiKey`                           | If `features.chatEnabled` | Anthropic API key for the dashboard playground. Enables `anthropic/*` models.                                                                                                   |
| `playground.existingAnthropicApiKeySecret`    | No                        | Name of a Secret to read the Anthropic key from instead of the inline value.                                                                                                    |
| `playground.existingAnthropicApiKeySecretKey` | No                        | Key within that Secret. Default `ANTHROPIC_API_KEY`.                                                                                                                            |
| `playground.openaiApiKey`                     | No                        | OpenAI API key. Enables `openai/*` models in the chat model selector.                                                                                                           |
| `playground.existingOpenaiApiKeySecret`       | No                        | Name of a Secret to read the OpenAI key from instead of the inline value.                                                                                                       |
| `playground.existingOpenaiApiKeySecretKey`    | No                        | Key within that Secret. Default `OPENAI_API_KEY`.                                                                                                                               |
| `playground.models`                           | No                        | Comma-separated models in the chat selector (`<provider>/<model>`); first is the default. A model shows only if its provider key is set. Default `anthropic/claude-sonnet-4-6`. |
| `playground.titleModel`                       | No                        | Model for chat-title generation. Empty uses a cheap default (`anthropic/claude-haiku-4-5`), falling back to the default chat model if that provider's key isn't set.            |
| `playground.providerBaseUrls`                 | No                        | Map of `<PROVIDER>_BASE_URL` env-var name to base URL for custom provider endpoints (proxy / self-hosted / OpenAI-compatible). Keys must end in `_BASE_URL`. Default `{}`.      |

### Workers

`workers` is a list. Each entry creates its own Deployment, Service,
Secret, and HPA. At least one entry must be enabled.

`arcadedev/worker` runs a supervisor: one isolated runtime per offered toolkit
version, so one worker can serve several versions of a toolkit. The
`supervisor.*` keys configure it.

#### Upgrading from an eager worker

Charts up to 1.11.0 ship `arcadedev/worker` as the eager image: every toolkit
imported into one process. From this release it is the supervisor, so an
upgrade changes how each worker pod runs, with no values change needed:

- Tools are served by one child runtime per toolkit version, started on first
  call or at boot for `supervisor.prewarmToolkits`. The first call to a cold
  toolkit waits for its runtime to start.
- The image also carries the pinned older toolkit versions, so one worker serves
  every version it offers.
- `toolPackages` (or `ARCADE_MCP_TOOL_PACKAGE` in `extraEnv`) still scopes a
  worker to those toolkits; `supervisor.serveToolkits` is the supervisor's own
  setting.
- `WORKERS` has no effect and is logged as such; concurrency comes from
  `supervisor.maxChildren`.

The eager image last shipped with chart 1.11.0; to keep a worker on it, stay on
that chart.

| Key                                                                                           | Required? | What it changes                                                                                                                                                                                                                              |
| --------------------------------------------------------------------------------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `workers[].id`                                                                                | **Yes**   | Worker identifier.                                                                                                                                                                                                                           |
| `workers[].enabled`                                                                           | No        | Deploys this worker.                                                                                                                                                                                                                         |
| `workers[].replicaCount`                                                                      | No        | Number of pods for this worker.                                                                                                                                                                                                              |
| `workers[].image.repository` / `.tag` / `.pullPolicy`                                         | No        | Image for this worker. The tag defaults to the chart's appVersion.                                                                                                                                                                           |
| `workers[].service.type` / `.port`                                                            | No        | Service for this worker.                                                                                                                                                                                                                     |
| `workers[].resources.requests` / `.limits`                                                    | No        | CPU/memory for this worker.                                                                                                                                                                                                                  |
| `workers[].secret`                                                                            | No        | Shared auth secret the engine uses to call this worker. Auto-generated and preserved across upgrades if empty.                                                                                                                               |
| `workers[].existingSecret`                                                                    | No        | Name of a Secret to read the worker auth secret from instead of `workers[].secret`.                                                                                                                                                          |
| `workers[].existingSecretKey`                                                                 | No        | Key within that Secret. Default `ARCADE_WORKER_SECRET`.                                                                                                                                                                                      |
| `workers[].timeout`                                                                           | No        | Request timeout in seconds.                                                                                                                                                                                                                  |
| `workers[].retry`                                                                             | No        | Retry count.                                                                                                                                                                                                                                 |
| `workers[].hpa.enabled` / `.minReplicas` / `.maxReplicas` / `.targetCPUUtilizationPercentage` | No        | Autoscaling for this worker.                                                                                                                                                                                                                 |
| `workers[].toolPackages`                                                                      | No        | Toolkit packages this worker loads, e.g. `[arcade_math]`, rendered as `ARCADE_MCP_TOOL_PACKAGE`. Empty loads every toolkit installed in the image. On the supervisor image it narrows what is served when `supervisor.serveToolkits` is `*`. |
| `workers[].probes.startup` / `.liveness` / `.readiness`                                       | No        | Probe settings (`periodSeconds`, `timeoutSeconds`, `failureThreshold`, ...) merged over the defaults. The startup probe gates the other two and gives the worker 300s to come up by default.                                                 |
| `workers[].extraEnv`                                                                          | No        | Extra env (raw `EnvVar` list) appended last to the worker container. Defaults from `workerDefaults.extraEnv`.                                                                                                                                |
| `workers[].supervisor.prewarmToolkits`                                                        | No        | Comma-separated toolkits started at boot and kept warm (the highest offered version of each). The worker reports ready only once they are running.                                                                                           |
| `workers[].supervisor.serveToolkits`                                                          | No        | Comma-separated toolkits this worker serves. Default `*` (all). A toolkit left off is refused and left out of the tools the worker publishes.                                                                                                |
| `workers[].supervisor.idleTtlSeconds`                                                         | No        | Stop a runtime idle this many seconds. Default `600`; `0` never stops one. Pre-warmed runtimes are exempt.                                                                                                                                   |
| `workers[].supervisor.maxChildren`                                                            | No        | Most runtimes running at once. Default `15`; `0` is unbounded. Each running runtime costs about 100 MB.                                                                                                                                      |
| `workers[].supervisor.capacityWaitSeconds`                                                    | No        | How long a call waits for a free runtime slot at `maxChildren` before failing with a retryable error. Default `30`.                                                                                                                          |
| `workers[].supervisor.venvsSizeLimit`                                                         | No        | Size limit of the scratch volume for runtimes installed at runtime. Default `2Gi`.                                                                                                                                                           |
| `workers[].supervisor.peerRouting.enabled`                                                    | No        | Replicas agree on which one starts each toolkit version and hand cold calls to it, through a headless peers Service. Default `false`.                                                                                                        |
| `workers[].supervisor.peerRouting.promoteAfterForwards`                                       | No        | Hand-offs of one version from a replica before it starts its own runtime for it. Default `10`.                                                                                                                                               |

### Experience API

| Key                                                                                      | Required? | What it changes                                                                                                                              |
| ---------------------------------------------------------------------------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `experienceApi.replicaCount`                                                             | No        | Number of pods.                                                                                                                              |
| `experienceApi.database.name`                                                            | No        | Experience API database name. Default `arcade_experience`. The scalar form `experienceApi.database: <name>` is still accepted as a fallback. |
| `experienceApi.database.create`                                                          | No        | Run `CREATE DATABASE` on startup. Set to `false` when the database is provisioned out-of-band. Default `true`.                               |
| `experienceApi.database.migrations`                                                      | No        | Run experience-api DB migrations on install/upgrade. Defaults to `true` when unset.                                                          |
| `experienceApi.image.repository` / `.tag` / `.pullPolicy`                                | No        | Image. The tag defaults to the chart's appVersion.                                                                                           |
| `experienceApi.service.type` / `.port`                                                   | No        | Service.                                                                                                                                     |
| `experienceApi.service.healthCheckPath`                                                  | No        | ALB target-group health-check path (Gateway API `TargetGroupConfiguration`). Default `/`.                                                    |
| `experienceApi.resources.requests` / `.limits`                                           | No        | CPU/memory.                                                                                                                                  |
| `experienceApi.hpa.enabled` / `.minReplicas` / `.maxReplicas` / `.targets` / `.behavior` | No        | Autoscaling.                                                                                                                                 |
| `experienceApi.migration.enabled`                                                        | No        | **Deprecated** — use `experienceApi.database.migrations`. Only honored when `experienceApi.database.migrations` is unset.                    |
| `experienceApi.coordinatorUrl`                                                           | No        | Override the in-cluster coordinator URL.                                                                                                     |
| `experienceApi.engineUrl`                                                                | No        | Override the in-cluster engine URL.                                                                                                          |
| `experienceApi.crossSiteCookies`                                                         | No        | Sets `SameSite=None` on session cookies (staging/preview only).                                                                              |
| `experienceApi.oidcDiscoveryUrl`                                                         | No        | Override the URL where the experience-api fetches the OIDC discovery doc (see below).                                                        |
| `experienceApi.publicCatalog.enabled`                                                    | No        | Serve the branded public catalog endpoints. **Default `false`.** See [Public catalog](#public-catalog).                                      |
| `experienceApi.publicCatalog.metadataUrl`                                                | No        | Where toolkit branding metadata JSON is fetched. Defaults to the Arcade design-system CDN.                                                   |
| `experienceApi.publicCatalog.engineUrl`                                                  | No        | Override the engine base URL used for the public catalog fetch. Empty reuses the engine URL the BFF already talks to.                        |

#### `experienceApi.oidcDiscoveryUrl`

Use when the public issuer hostname isn't reachable from inside pods
(split-horizon DNS). Only the fetch path is rewritten — published URLs
in the discovery doc keep using the public hostname. Full URL, ends in
`/.well-known/openid-configuration`. In-cluster example:
`http://arcade-coordinator:8001/signin/oidc/.well-known/openid-configuration`.

### Coordinator

| Key                                                                                             | Required? | What it changes                                                                                                              |
| ----------------------------------------------------------------------------------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `coordinator.replicaCount`                                                                      | No        | Number of pods.                                                                                                              |
| `coordinator.database.name`                                                                     | No        | Coordinator database name. Default `arcade`. The scalar form `coordinator.database: <name>` is still accepted as a fallback. |
| `coordinator.database.create`                                                                   | No        | Run `CREATE DATABASE` on startup. Set to `false` when the database is provisioned out-of-band. Default `true`.               |
| `coordinator.database.migrations`                                                               | No        | Run coordinator DB migrations on install/upgrade. Defaults to `true` when unset.                                             |
| `coordinator.image.repository` / `.tag` / `.pullPolicy`                                         | No        | Image. The tag defaults to the chart's appVersion.                                                                           |
| `coordinator.service.type` / `.port`                                                            | No        | Service.                                                                                                                     |
| `coordinator.service.healthCheckPath`                                                           | No        | ALB target-group health-check path (Ingress annotation + Gateway API `TargetGroupConfiguration`). Default `/api/v1/health`.  |
| `coordinator.resources.requests` / `.limits`                                                    | No        | CPU/memory.                                                                                                                  |
| `coordinator.hpa.enabled` / `.minReplicas` / `.maxReplicas` / `.targetCPUUtilizationPercentage` | No        | Autoscaling.                                                                                                                 |
| `coordinator.migration.enabled`                                                                 | No        | **Deprecated** — use `coordinator.database.migrations`. Only honored when `coordinator.database.migrations` is unset.        |
| `coordinator.redisMaxConnections`                                                               | No        | Max Redis connections from the coordinator pool.                                                                             |
| `coordinator.webhookApiKeys`                                                                    | No        | API keys accepted on webhook endpoints.                                                                                      |
| `coordinator.enableVerifierConfirmUserEndpoint`                                                 | No        | Expose the engine-identity `confirm_user` endpoint for a custom session verifier. Default `false`.                           |
| `coordinator.cspEnforce`                                                                        | No        | Enforce `Content-Security-Policy` instead of Report-Only. Default `false`; set true after a quiet window.                    |

### Encryption keys

Every encryption key is auto-generated on first install and persisted
with `helm.sh/resource-policy=keep` so it survives an uninstall. Changing
a key in place destroys any data it encrypts — only override if you're
sourcing keys from an external vault (cross-cluster / multi-region).

Each field below accepts a pre-existing Kubernetes Secret via its paired
`*ExistingSecret` / `*ExistingSecretKey` keys. Defaults for the key names
are listed; the secret name is empty (and therefore the chart
auto-generates the value) unless you set it.

| Key                                              | Required? | What it changes                                                                                      |
| ------------------------------------------------ | --------- | ---------------------------------------------------------------------------------------------------- |
| `encryption.databasePrivateKeyExistingSecret`    | No        | Secret name holding the RSA key (PEM) that wraps column-encrypted coordinator fields.                |
| `encryption.databasePrivateKeyExistingSecretKey` | No        | Key within that Secret. Default `CURRENT_PRIVATE`.                                                   |
| `encryption.databaseRootKeyExistingSecret`       | No        | Secret name holding the 32-char symmetric key that encrypts OAuth tokens at rest.                    |
| `encryption.databaseRootKeyExistingSecretKey`    | No        | Key within that Secret. Default `CURRENT_ROOT_KEY`.                                                  |
| `encryption.symmetricKeysExistingSecret`         | No        | Secret name holding the API-key signing `KEY_CONFIGS` JSON (supports rotation).                      |
| `encryption.symmetricKeysExistingSecretKey`      | No        | Key within that Secret. Default `key-config`.                                                        |
| `encryption.asymmetricKeysExistingSecret`        | No        | Secret name holding the Ed25519 `ASYMMETRIC_KEY_CONFIGS` JSON for Arcade Identity / Intermediate AS. |
| `encryption.asymmetricKeysExistingSecretKey`     | No        | Key within that Secret. Default `asymmetric-key-config`.                                             |
| `engineJwsSigningKey.existingSecret`             | No        | Secret name holding the P-256 engine→coordinator JWT signing key.                                    |
| `engineJwsSigningKey.existingSecretKey`          | No        | Key within that Secret. Default `private-key-pem`.                                                   |

### Postgres

| Key                                       | Required?           | What it changes                                                                                            |
| ----------------------------------------- | ------------------- | ---------------------------------------------------------------------------------------------------------- |
| `postgres.enabled`                        | No                  | Deploys the bundled Postgres StatefulSet. Set `false` for external.                                        |
| `postgres.host`                           | If `enabled: false` | Postgres hostname.                                                                                         |
| `postgres.port`                           | No                  | Postgres port.                                                                                             |
| `postgres.directHost`                     | No                  | Host reaching Postgres directly, bypassing a pooler on `host`. This server only. Defaults to `host`.       |
| `postgres.directPort`                     | No                  | Port for `directHost`. Defaults to `port`.                                                                 |
| `postgres.targetSessionAttrs`             | No                  | libpq `target_session_attrs`. Defaults to `read-write`.                                                    |
| `postgres.waitForDb.enabled`              | No                  | Run the `wait-for-db` init container, which waits for the writer and creates missing databases.            |
| `postgres.image`                          | No                  | Image for the bundled Postgres.                                                                            |
| `postgres.sslmode`                        | No                  | Postgres `sslmode` (`disable`, `require`, `verify-ca`, `verify-full`).                                     |
| `postgres.sslRootCert`                    | No                  | CA path appended to `DATABASE_URL` as `sslrootcert`. Required for `verify-ca`/`verify-full`.               |
| `postgres.caBundle.enabled`               | No                  | Mount a trusted CA bundle and set `PGSSLROOTCERT` / `NODE_EXTRA_CA_CERTS`.                                 |
| `postgres.caBundle.secretName`            | One of two          | Secret holding the PEM bundle. Takes precedence over `configMapName`.                                      |
| `postgres.caBundle.configMapName`         | One of two          | ConfigMap holding the PEM bundle. Used when `secretName` is empty; templating fails if neither is set.     |
| `postgres.caBundle.key`                   | No                  | Key within the Secret/ConfigMap holding the PEM bundle.                                                    |
| `postgres.caBundle.mountPath`             | No                  | Mount path inside containers. Should match `sslRootCert`.                                                  |
| `postgres.auth.username`                  | No                  | Postgres username.                                                                                         |
| `postgres.auth.password`                  | No                  | Postgres password (bundled Postgres). Has a default; override for any non-evaluation install.              |
| `postgres.auth.existingSecret`            | No                  | Name of a Secret to read the password from instead of `postgres.auth.password`.                            |
| `postgres.auth.existingSecretKey`         | No                  | Key within that Secret. Default `DB_PASSWORD`.                                                             |
| `postgres.auth.existingSecretURLEncKey`   | No                  | Key holding the URL-encoded password, needed by the DSN-assembling services. Default `DB_PASSWORD_URLENC`. |
| `postgres.auth.database`                  | No                  | Default database name.                                                                                     |
| `postgres.persistence.size`               | No                  | PVC size for the bundled Postgres.                                                                         |
| `postgres.persistence.storageClass`       | No                  | StorageClass for the PVC.                                                                                  |
| `postgres.persistence.existingClaim`      | No                  | Use a pre-existing PVC.                                                                                    |
| `postgres.resources.requests` / `.limits` | No                  | CPU/memory for the bundled Postgres.                                                                       |

`directPort` takes precedence over any port embedded in `host` (`host:port`
or a comma-separated list), so a pooled entry's port never carries into the
direct endpoint; leaving both `directHost` and `directPort` unset changes
nothing.

A `directHost` set without a `directPort` inherits `port`, which is correct
when the direct server and the pooler listen on the same port and wrong when
they do not. The `wait-for-db` init container logs the endpoint it is waiting
on and where that port came from — `Waiting for the PostgreSQL writer at
pg-primary.internal:6432/postgres to be ready (from directHost with port 6432
inherited from the pooled endpoint …)` — so a wait that never finishes names
its own cause. Give `directHost` its own `directPort` (or write it as
`directHost: pg-primary.internal:5432`) when the servers differ.

#### Per-service Postgres endpoints

By default all four Postgres consumers — engine, coordinator, experience-api and
openfga — share the endpoint above, each with its own logical database. Any of
them can instead point at its own server, with its own credentials:

```yaml
postgres:
  enabled: false
  host: shared-db.internal # inherited by anything not overridden below
  auth:
    username: arcade
    existingSecret: shared-db-creds

engine:
  database:
    name: arcade_engine
    host: engine-db.internal
    port: 6432
    sslmode: verify-full
    auth:
      username: arcade_engine
      existingSecret: engine-db-creds

coordinator:
  database:
    host: coordinator-db.internal
    auth:
      username: arcade_coordinator
      existingSecret: coordinator-db-creds
      # experience-api and the coordinator assemble a DSN, so their Secret needs
      # the password URL-encoded as well as raw.
      existingSecretURLEncKey: DB_PASSWORD_URLENC
```

The same keys are available under `engine.database`, `coordinator.database`,
`experienceApi.database` and `rbac.openfga.database`.

| Key                                               | Required? | What it changes                                                                                  |
| ------------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------ |
| `<service>.database.host`                         | No        | Hostname, `host:port`, or a comma-separated list. Inherits `postgres.host`.                      |
| `<service>.database.port`                         | No        | Port for bare host entries. Inherits `postgres.port`.                                            |
| `<service>.database.directHost`                   | No        | Inherits `postgres.directHost` unless `host`/`port` relocate the service; `''` clears it.        |
| `<service>.database.directPort`                   | No        | Inherits `postgres.directPort` unless `host`/`port` relocate the service; `''` clears it.        |
| `<service>.database.sslmode`                      | No        | Inherits `postgres.sslmode`.                                                                     |
| `<service>.database.sslRootCert`                  | No        | Inherits `postgres.sslRootCert`. Only experience-api reads it.                                   |
| `<service>.database.targetSessionAttrs`           | No        | Inherits `postgres.targetSessionAttrs`.                                                          |
| `<service>.database.auth.username`                | No        | Inherits `postgres.auth.username`.                                                               |
| `<service>.database.auth.existingSecret`          | No        | Replaces the global Secret outright — no per-key merge. Inherits `postgres.auth.existingSecret`. |
| `<service>.database.auth.existingSecretKey`       | No        | Key within that Secret. Default `DB_PASSWORD`.                                                   |
| `<service>.database.auth.existingSecretURLEncKey` | No        | Key holding the URL-encoded password. Default `DB_PASSWORD_URLENC`.                              |
| `<service>.database.probeDatabase`                | No        | Database the `wait-for-db` init container connects to. Defaults per the rule below.              |

Things to know:

- A per-service host wins over the bundled Postgres, so services can be migrated
  one at a time.
- Setting `host` or `port` flips `create` to `false`, and `wait-for-db` then
  probes the service's own database rather than `postgres`. A different role or
  `sslmode` on the same server does not. Set `<service>.database.create: true` to
  opt back in.
- A direct endpoint describes one server, so `host`/`port` also stop the service
  inheriting `postgres.directHost`/`postgres.directPort` — otherwise it would
  wait for readiness against, and migrate against, the shared primary. Give a
  relocated service behind its own pooler its own `directHost`/`directPort`.
  Conversely, `<service>.database.directHost: ''` keeps a service that has not
  moved on the pooled `host`/`port` even when the global block names a direct
  endpoint.
- Give openfga a single host. Its entrypoint keeps only the first entry of a
  comma-separated `DB_HOST`; `rbac.openfga.database.host` rejects a list, but one
  inherited from `postgres.host` is silently truncated.
- `openfga migrate` calls `createdb` regardless of `database.create`, so its role
  needs `CREATEDB` — or set `rbac.openfga.database.migrations: false`, which now
  defaults to true, and migrate out-of-band. With migrations on, `wait-for-db` probes
  `postgres` rather than the openfga database, since that same step creates it.
- Endpoint values travel as container env, not via a ConfigMap. The migration
  Jobs are `pre-upgrade` hooks: Helm renders their spec from the new revision but
  resolves referenced ConfigMaps against the cluster, i.e. the previous revision.
  `engine.yaml` reads `${env:DB_HOST}` and friends for the same reason.
- `directHost`/`directPort` reach the engine's migration Job as
  `--db-direct-host`/`--db-direct-port` arguments instead of through
  `engine.yaml`, so a pooled release can adopt a direct endpoint in a single
  `helm upgrade` — the hook does not depend on the ConfigMap of the revision it
  upgrades from.
- **Do not adopt this chart version and move a service's endpoint in the same
  upgrade.** Upgrading from a version that baked the endpoint into `engine.yaml`
  means the pre-upgrade hook still reads those old literals, so the engine's
  migration would run against the previous server. Upgrade first, then move the
  endpoint in a second upgrade. Subsequent moves need no two-step.
- Per-service credentials require `auth.existingSecret`; there is no inline
  password. The release's `app-secrets` Secret is mounted wholesale via
  `envFrom` by ten workloads, so a password there would reach every service.
- `postgres.caBundle` stays global: experience-api honors a single
  `NODE_EXTRA_CA_CERTS`, so concatenate multiple CAs into one bundle.

### Redis

`redis.tls.insecureSkipVerify` has no default: with `redis.tls.enabled: true`
the chart refuses to render until it is set. Set `false` to verify the Redis
server certificate, which must be signed by a CA the pods trust. Set `true` to skip.

| Key                                                             | Required?           | What it changes                                                                                 |
| --------------------------------------------------------------- | ------------------- | ----------------------------------------------------------------------------------------------- |
| `redis.enabled`                                                 | No                  | Deploys the bundled Redis StatefulSet. Set `false` for external.                                |
| `redis.host`                                                    | If `enabled: false` | Redis hostname.                                                                                 |
| `redis.port`                                                    | No                  | Redis port.                                                                                     |
| `redis.architecture`                                            | No                  | Redis topology.                                                                                 |
| `redis.image.repository` / `.tag` / `.pullPolicy`               | No                  | Bundled Redis image. Default `redis:8-alpine`. Override to pull from a private registry mirror. |
| `redis.auth.enabled`                                            | No                  | Enables Redis AUTH.                                                                             |
| `redis.auth.password`                                           | If `auth.enabled`   | Redis password.                                                                                 |
| `redis.auth.existingSecret`                                     | No                  | Name of a Secret to read the Redis password from.                                               |
| `redis.auth.existingSecretKey`                                  | No                  | Key within that Secret. Default `REDIS_PASSWORD`.                                               |
| `redis.tls.enabled`                                             | No                  | Enables TLS to Redis.                                                                           |
| `redis.tls.existingSecret`                                      | If `tls.enabled`    | Secret containing Redis TLS material.                                                           |
| `redis.tls.certFilename` / `certKeyFilename` / `certCAFilename` | No                  | Filenames in the TLS secret.                                                                    |
| `redis.tls.authClients`                                         | No                  | Require client certificate authentication.                                                      |
| `redis.tls.insecureSkipVerify`                                  | If `tls.enabled`    | Skip Redis TLS cert verification. No default; `false` verifies.                                 |
| `redis.master.persistence.enabled`                              | No                  | Enables persistence on the bundled Redis.                                                       |
| `redis.master.persistence.size`                                 | No                  | PVC size.                                                                                       |
| `redis.master.persistence.storageClass`                         | No                  | StorageClass for the PVC.                                                                       |
| `redis.master.persistence.existingClaim`                        | No                  | Use a pre-existing PVC.                                                                         |
| `redis.master.resources.requests` / `.limits`                   | No                  | CPU/memory.                                                                                     |

### Discovery (arcade-discovery subchart)

The optional `arcade-discovery` subchart adds tool discovery — Condex, hybrid
tool retrieval over RediSearch + Postgres — with its own vendored Redis and
Postgres. It is **off by default**; a default install renders no discovery
workloads and leaves the platform Redis and Postgres untouched.

GoEmbed is no longer part of it. `arcade-discovery` 0.13.0 moved the model
servers into `arcade-inference` below, so a discovery install that needs
embeddings enables both and points Condex at the inference release.

| Key                 | Required? | What it changes                                           |
| ------------------- | --------- | --------------------------------------------------------- |
| `discovery.enabled` | No        | Renders the `arcade-discovery` subchart. Default `false`. |

Configure the subchart itself under the `arcade-discovery:` key — its full value
reference lives in `deploy/charts/arcade-discovery/README.md`. The chart is
fail-closed: opting in requires, at minimum,
`arcade-discovery.arcade.releaseName` (or explicit engine/coordinator URLs),
`arcade-discovery.condex.catalogSync.secret`, and an inference coordinate
(`arcade-discovery.inference.releaseName`, `.embeddingModel`, `.modelRelease`).
Enabling discovery with no inference endpoint named is refused at render rather
than deployed as a Condex that cannot embed.

### Inference (arcade-inference subchart)

The optional `arcade-inference` subchart adds the model servers — GoEmbed (ONNX
embeddings, reranking, image embedding and transcription) and, off by default,
the LLM proxy. Split out of `arcade-discovery` in 0.13.0 so they scale, schedule
and upgrade on their own cadence: they want GPUs and multi-minute model loads,
while Condex wants Redis and Postgres. It is **off by default**.

| Key                                              | Required?              | What it changes                                                                                                                                                                                     |
| ------------------------------------------------ | ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `inference.enabled`                              | No                     | Renders the `arcade-inference` subchart. Default `false`.                                                                                                                                           |
| `arcade-inference.goembed.modelDelivery.release` | If `inference.enabled` | mlops release id of the model weights — the tag of the OCI models image, or the version segment of the S3 prefix. No default and no public models image, so the chart refuses to render without it. |

Configure it under the `arcade-inference:` key — see
`deploy/charts/arcade-inference/README.md`. It is fail-closed too: a model
delivery source and its release must be named, because a GoEmbed with no weights
to load is a pod that passes no probe.

### mTLS

| Key               | Required?         | What it changes                                                          |
| ----------------- | ----------------- | ------------------------------------------------------------------------ |
| `mtls.enabled`    | No                | Wires a custom CA into every Arcade service for internal mTLS.           |
| `mtls.secretName` | If `mtls.enabled` | Name of a pre-existing Secret containing `ca.crt`, `tls.crt`, `tls.key`. |

### Telemetry

Global defaults live under `telemetry.*` and apply to every service. Operators
can override any field per service by setting `<service>.telemetryOverrides.*`
— the override wins over the global value. The engine, coordinator,
experience-api, and workers consume this configuration via dedicated ConfigMaps
emitting `ARCADE_TELEMETRY_*` env vars. All workers share one ConfigMap, so
their overrides go under `workerDefaults.telemetryOverrides`; per-worker
differences need `workers[].extraEnv`.

| Key                                                 | Required? | What it changes                                                                                                                                                                 |
| --------------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `otelConfig.endpoint`                               | No        | **Deprecated** — prefer `telemetry.otlpEndpoint`. Serves as the fallback inside the per-service telemetry helper, and is still set on workers as `OTEL_EXPORTER_OTLP_ENDPOINT`. |
| `telemetry.logs`                                    | No        | Global logs destination — `none`, `stdout`, `otlp`, or `stdout+otlp`.                                                                                                           |
| `telemetry.traces`                                  | No        | Global traces destination — `none` or `otlp`.                                                                                                                                   |
| `telemetry.metrics`                                 | No        | Global metrics destination — `none` or `otlp`.                                                                                                                                  |
| `telemetry.otlpEndpoint`                            | No        | Shared OTLP endpoint. Empty falls back to `otelConfig.endpoint`. Used by any signal whose per-signal override below is empty.                                                   |
| `telemetry.otlpEndpoints.logs`                      | No        | Per-signal endpoint for logs. Empty falls back to `telemetry.otlpEndpoint`.                                                                                                     |
| `telemetry.otlpEndpoints.traces`                    | No        | Per-signal endpoint for traces. Empty falls back to `telemetry.otlpEndpoint`.                                                                                                   |
| `telemetry.otlpEndpoints.metrics`                   | No        | Per-signal endpoint for metrics. Empty falls back to `telemetry.otlpEndpoint`.                                                                                                  |
| `telemetry.logLevel`                                | No        | `debug` / `info` / `warn` / `error`.                                                                                                                                            |
| `telemetry.logFormat`                               | No        | `json` or `text`.                                                                                                                                                               |
| `telemetry.logMaxBytes`                             | No        | Max bytes per emitted log line.                                                                                                                                                 |
| `<service>.telemetryOverrides.*`                    | No        | Per-service overrides (any of the `telemetry.*` keys above). Supported services: `engine`, `coordinator`, `experienceApi`, `workerDefaults`.                                    |
| `opentelemetry-collector.mode`                      | No        | Collector deployment mode.                                                                                                                                                      |
| `opentelemetry-collector.replicaCount`              | No        | Collector replicas.                                                                                                                                                             |
| `opentelemetry-collector.image.repository` / `.tag` | No        | Collector image.                                                                                                                                                                |
| `opentelemetry-collector.config`                    | No        | Full OTLP collector pipeline.                                                                                                                                                   |
| `opentelemetry-collector.serviceMonitor.enabled`    | No        | ServiceMonitor for the collector.                                                                                                                                               |

Example — quiet the coordinator while leaving the rest of the stack alone:

```yaml
coordinator:
  telemetryOverrides:
    logLevel: "warn"
    traces: "none"
```

Example — fan signals out to separate collectors (logs to a Loki gateway,
traces to a Tempo gateway, metrics still to the in-cluster collector):

```yaml
telemetry:
  otlpEndpoints:
    logs: "http://loki-gateway:4318"
    traces: "http://tempo-gateway:4318"
    # metrics omitted → falls back to telemetry.otlpEndpoint / otelConfig.endpoint
```

Per-signal endpoints also accept `<service>.telemetryOverrides.otlpEndpoints.*`
when a single service needs to diverge from the global routing.

For any value not listed, see `values.yaml`.
