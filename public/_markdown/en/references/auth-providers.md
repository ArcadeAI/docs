---
title: "Auth Providers"
description: "Registry of all auth providers available in the Arcade ecosystem"
---
Auth ProvidersOverview

# Auth Providers

 enable users to seamlessly and securely allow Arcade  to access their data.

Arcade has several  available in the Arcade Cloud Platform so you don’t have to configure your own. However, using Arcade’s auth providers means that your  will see the Arcade brand (name and logo) on the auth screen and your authentications will share any rate limits from those providers with other Arcade customers.

It can be useful to configure your own  for the following reasons:

-   You want to use your own brand on the auth screen
-   You want to isolate your rate limits from other Arcade customers
-   You want to use a service that Arcade [does not have a built-in auth provider for](/references/auth-providers/oauth2.md)


After adding an  used by an Arcade , executing the tool will automatically use your auth provider. Even in the Arcade Cloud Platform, your auth provider will take precedence over the arcade-provided auth provider.

Adding multiple providers of the same type, not including the arcade-provided ones, can cause Arcade’s  authorization to fail, see [Using multiple providers of the same type](#using-multiple-providers-of-the-same-type) for more information.

## Catalog of providers

For more information on how to customize your , select an auth provider from the list below:



[![Asana logo](/images/icons/asana.svg) ## Asana #### Auth Authorize tools and agents with Asana](/references/auth-providers/asana.md)
[![Atlassian logo](/images/icons/atlassian.png) ## Atlassian #### Auth Authorize tools and agents with Atlassian](/references/auth-providers/atlassian.md)
[![Discord logo](/images/icons/discord.png) ## Discord #### Auth Authorize tools and agents with Discord in a user's context](/references/auth-providers/discord.md)
[![Dropbox logo](/images/icons/dropbox.png) ## Dropbox #### Auth Authorize tools and agents with Dropbox in a user's context](/references/auth-providers/dropbox.md)
[![GitHub logo](/images/icons/github.png) ## GitHub #### Auth Authorize tools and agents with GitHub, including private repositories](/references/auth-providers/github.md)
[![Google logo](/images/icons/google.png) ## Google #### Auth Authorize tools and agents with Google: Gmail, Calendar, YouTube, Drive, and more](/references/auth-providers/google.md)
[![HubSpot logo](/images/icons/hubspot.png) ## HubSpot #### Auth Authorize tools and agents with HubSpot](/references/auth-providers/hubspot.md)
[![Linear logo](/images/icons/linear.svg) ## Linear #### Auth Authorize tools and agents with Linear](/references/auth-providers/linear.md)
[![LinkedIn logo](/images/icons/linkedin.png) ## LinkedIn #### Auth Authorize tools and agents with LinkedIn](/references/auth-providers/linkedin.md)
[![Microsoft logo](/images/icons/msft.png) ## Microsoft #### Auth Authorize tools and agents with Microsoft Graph](/references/auth-providers/microsoft.md)
[![Notion logo](/images/icons/notion.png) ## Notion #### Auth Authorize tools and agents with Notion](/references/auth-providers/notion.md)
[![Reddit logo](/images/icons/reddit.png) ## Reddit #### Auth Authorize tools and agents with Reddit](/references/auth-providers/reddit.md)
[![Slack logo](/images/icons/slack.png) ## Slack #### Auth Authorize tools and agents with Slack](/references/auth-providers/slack.md)
[![Spotify logo](/images/icons/spotify.png) ## Spotify #### Auth Authorize tools and agents with Spotify](/references/auth-providers/spotify.md)
[![Twitch logo](/images/icons/twitch.png) ## Twitch #### Auth Authorize tools and agents with Twitch](/references/auth-providers/twitch.md)
[![X logo](/images/icons/twitter.png) ## X #### Auth Authorize tools and agents with X (Twitter)](/references/auth-providers/x.md)
[![Zoom logo](/images/icons/zoom_fav.svg) ## Zoom #### Auth Authorize tools and agents with Zoom](/references/auth-providers/zoom.md)
[![OAuth 2.0 logo](/images/icons/oauth2.png) ## OAuth 2.0 #### Auth Authorize tools and agents with any OAuth 2.0-compatible provider](/references/auth-providers/oauth2.md)

If the  you need is not listed, try the [OAuth 2.0](/references/auth-providers/oauth2.md) provider, or [get in touch](mailto:contact@arcade.dev) with us!

## Using multiple providers of the same type

You can create multiple  of the same type, for example, you can have multiple Google auth providers, each with their own client ID and secret. This might be useful if you want separate Google clients to handle calendar and email scopes, for example.

However, Arcade’s tools are configured to select an  by the type. This means that if you have multiple auth providers of the same type, Arcade will not know which one to use and authorizing the  will fail.

To work around this, you can fork Arcade’s tools and modify them to specify your own  by the unique ID that you give each of them. For example, if you have two Google auth providers, `acme-google-calendar` and `acme-google-email`, you can modify Arcade’s Gmail.ListEmails  like this:

```python
@tool(
    requires_auth=Google(
        id="acme-google-email", # This is the unique ID you gave your auth provider
        scopes=["https://www.googleapis.com/auth/gmail.readonly"],
    )
)
async def list_emails(
# ...
```

This is similar to the pattern used in the generic OAuth2 provider, but instead of using the `OAuth2` class, you use the `Google` class and specify the `id` of the  you want to use.

See the docs about [Authoring Tools](/guides/create-tools/tool-basics/build-mcp-server.md) for more information on how to create and serve a  Server.

Last updated on February 11, 2026

[Logic Extensions API](/en/references/logic-extensions-api.md)
[OAuth 2.0](/en/references/auth-providers/oauth2.md)
