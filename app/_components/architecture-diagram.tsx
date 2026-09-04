/**
 * Arcade architecture overview, drawn as one SVG so it follows the active
 * theme, stays crisp at any zoom, and keeps every label as real selectable text.
 *
 * Every box is placed by hand. The left-to-right Local -> Platform reading
 * order, the shared tools row, and the boundary crossings are the content here,
 * so none of it is auto-laid-out. The coordinate space is sized so labels stay
 * legible at the docs column width; changing VIEW_W means resizing the type.
 */

const VIEW_W = 1000;
const VIEW_H = 630;

/** Zone boundaries. */
const LOCAL = { x: 8, w: 210 };
const PLATFORM = { x: 348, w: 644 };
const ZONE = { y: 70, h: 400 };

/** Columns inside the Platform zone. */
const GOVERNANCE = { x: 364, w: 200 };
const SERVICES = { x: 584, w: 368 };

/** Vertical lanes kept clear so routed lines never cross a box. */
const IDP_LANE_X = 574;
const EXTERNAL_MCP_LANE_X = 972;
const KIT_LANE_X = 308;

const ROW_TOOLS = { y: 302, h: 52 };
const ROW_ENGINE = { y: 396, h: 52 };
const ROW_CONSUMERS = { y: 560, h: 58 };

const TOOLS_MID_Y = ROW_TOOLS.y + ROW_TOOLS.h / 2;
const ENGINE_MID_Y = ROW_ENGINE.y + ROW_ENGINE.h / 2;
const LOCAL_MID_X = LOCAL.x + LOCAL.w / 2;

const BODY_SIZE = 15;
const CHIP_SIZE = 13;
const ZONE_LABEL_SIZE = 17;

const LINE_HEIGHT_RATIO = 1.3;
/** Nudge that puts a line's optical center, not its baseline, on cy. */
const BASELINE_OFFSET_RATIO = 0.34;

/** Where a zone's label and its accent rule sit below the zone's top edge. */
const ZONE_LABEL_INSET_X = 18;
const ZONE_LABEL_BASELINE_Y = 28;
const ZONE_RULE_Y = 38;
const ARROW = "url(#arcade-arrow)";
const ARROW_ACCENT = "url(#arcade-arrow-accent)";

type Lines = readonly string[];

type LabelProps = {
  cx: number;
  cy: number;
  lines: Lines;
  className: string;
  fontSize: number;
};

/** Centers one or more lines of text on (cx, cy). */
function Label({ cx, cy, lines, className, fontSize }: LabelProps) {
  const lineHeight = fontSize * LINE_HEIGHT_RATIO;
  const firstY =
    cy -
    ((lines.length - 1) * lineHeight) / 2 +
    fontSize * BASELINE_OFFSET_RATIO;

  return (
    <text className={className} fontSize={fontSize} textAnchor="middle" x={cx}>
      {lines.map((line, index) => (
        <tspan key={line} x={cx} y={firstY + index * lineHeight}>
          {line}
        </tspan>
      ))}
    </text>
  );
}

type NodeProps = {
  x: number;
  y: number;
  w: number;
  h: number;
  lines: Lines;
};

/** A capability inside one of the two zones. */
function Box({ x, y, w, h, lines }: NodeProps) {
  return (
    <g>
      <rect
        className="fill-card stroke-border"
        filter="url(#arcade-box-shadow)"
        height={h}
        rx={8}
        strokeWidth={1}
        width={w}
        x={x}
        y={y}
      />
      <Label
        className="fill-foreground"
        cx={x + w / 2}
        cy={y + h / 2}
        fontSize={BODY_SIZE}
        lines={lines}
      />
    </g>
  );
}

/** An agent or application calling into Arcade. The anchors of the diagram. */
function Consumer({ x, y, w, h, lines }: NodeProps) {
  return (
    <g>
      <rect
        className="fill-brand-accent/10 stroke-brand-accent/50"
        height={h}
        rx={h / 2}
        strokeWidth={1.2}
        width={w}
        x={x}
        y={y}
      />
      <Label
        className="fill-foreground font-semibold"
        cx={x + w / 2}
        cy={y + h / 2}
        fontSize={BODY_SIZE}
        lines={lines}
      />
    </g>
  );
}

/** A system outside the Arcade boundary. Dashed so it reads as "not yours". */
function External({ x, y, w, h, lines }: NodeProps) {
  return (
    <g>
      <rect
        className="fill-background stroke-muted-foreground/50"
        height={h}
        rx={h / 2}
        strokeDasharray="5 4"
        strokeWidth={1.2}
        width={w}
        x={x}
        y={y}
      />
      <Label
        className="fill-muted-foreground"
        cx={x + w / 2}
        cy={y + h / 2}
        fontSize={BODY_SIZE}
        lines={lines}
      />
    </g>
  );
}

type ChipProps = {
  cx: number;
  cy: number;
  w: number;
  label: string;
  accent?: boolean;
};

/** A protocol label sitting on a connector, masking the line behind it. */
function Chip({ cx, cy, w, label, accent = false }: ChipProps) {
  const h = 24;

  return (
    <g>
      <rect
        className={
          accent
            ? "fill-background stroke-brand-accent/40"
            : "fill-background stroke-border"
        }
        height={h}
        rx={6}
        strokeWidth={1}
        width={w}
        x={cx - w / 2}
        y={cy - h / 2}
      />
      <Label
        className={accent ? "fill-brand-accent" : "fill-muted-foreground"}
        cx={cx}
        cy={cy}
        fontSize={CHIP_SIZE}
        lines={[label]}
      />
    </g>
  );
}

/** Local and Platform: the two places Arcade tools run. */
function Zone({ x, w, label }: { x: number; w: number; label: string }) {
  return (
    <g>
      <rect
        className="fill-muted/40 stroke-border"
        height={ZONE.h}
        rx={14}
        strokeWidth={1}
        width={w}
        x={x}
        y={ZONE.y}
      />
      <text
        className="fill-foreground font-semibold"
        fontSize={ZONE_LABEL_SIZE}
        x={x + ZONE_LABEL_INSET_X}
        y={ZONE.y + ZONE_LABEL_BASELINE_Y}
      >
        {label}
      </text>
      <rect
        className="fill-brand-accent"
        height={2}
        rx={1}
        width={24}
        x={x + ZONE_LABEL_INSET_X}
        y={ZONE.y + ZONE_RULE_Y}
      />
    </g>
  );
}

export function ArchitectureDiagram() {
  return (
    <figure className="my-8">
      <div className="overflow-x-auto">
        <svg
          className="h-auto w-full min-w-[720px]"
          role="img"
          viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Arcade architecture overview</title>
          <desc>
            Two zones sit side by side. Local holds custom local tools and a
            local MCP server, which serves single-user agents and applications
            over MCP. Platform holds project and user management, auditing and
            compliance, the tool registry, tool authentication and
            authorization, the distributed tool runtime, custom hosted tools,
            and pre-built Arcade tools, all feeding the MCP and agentic tool
            engine, which serves multi-user agents and applications over MCP and
            native LLM tool calls. Identity providers and external MCP servers
            connect in from outside, and one tool development kit builds for
            both zones.
          </desc>

          <defs>
            <marker
              id="arcade-arrow"
              markerHeight={7}
              markerWidth={7}
              orient="auto-start-reverse"
              refX={5.4}
              refY={3}
            >
              <path
                className="fill-muted-foreground/70"
                d="M 0 0 L 6 3 L 0 6 z"
              />
            </marker>
            <marker
              id="arcade-arrow-accent"
              markerHeight={7}
              markerWidth={7}
              orient="auto-start-reverse"
              refX={5.4}
              refY={3}
            >
              <path className="fill-brand-accent/80" d="M 0 0 L 6 3 L 0 6 z" />
            </marker>
            <filter
              height="180%"
              id="arcade-box-shadow"
              width="140%"
              x="-20%"
              y="-40%"
            >
              <feDropShadow
                dy={1}
                floodColor="black"
                floodOpacity={0.07}
                stdDeviation={1.5}
              />
            </filter>
          </defs>

          <Zone label="Local" w={LOCAL.w} x={LOCAL.x} />
          <Zone label="Platform" w={PLATFORM.w} x={PLATFORM.x} />

          {/* Systems outside the boundary, above the zone they reach into. */}
          <External
            h={50}
            lines={["IdPs and entitlement", "servers"]}
            w={210}
            x={570}
            y={6}
          />
          <External
            h={38}
            lines={["External MCP servers"]}
            w={176}
            x={816}
            y={12}
          />

          {/* Platform, governance column. */}
          <Box
            h={54}
            lines={["Project and user", "management"]}
            w={GOVERNANCE.w}
            x={GOVERNANCE.x}
            y={128}
          />
          <Box
            h={42}
            lines={["Auditing and compliance"]}
            w={GOVERNANCE.w}
            x={GOVERNANCE.x}
            y={194}
          />

          {/* Platform, services column. */}
          <Box
            h={42}
            lines={["Tool registry"]}
            w={SERVICES.w}
            x={SERVICES.x}
            y={124}
          />
          <Box
            h={42}
            lines={["Tool authentication, authorization, and secrets"]}
            w={SERVICES.w}
            x={SERVICES.x}
            y={180}
          />
          <Box
            h={42}
            lines={["Distributed tool runtime and management"]}
            w={SERVICES.w}
            x={SERVICES.x}
            y={236}
          />

          {/* The tools row, shared across the boundary. */}
          <Box
            h={ROW_TOOLS.h}
            lines={["Custom local tools"]}
            w={170}
            x={28}
            y={ROW_TOOLS.y}
          />
          <Box
            h={ROW_TOOLS.h}
            lines={["Custom hosted tools"]}
            w={180}
            x={584}
            y={ROW_TOOLS.y}
          />
          <Box
            h={ROW_TOOLS.h}
            lines={["Pre-built Arcade tools"]}
            w={180}
            x={772}
            y={ROW_TOOLS.y}
          />

          {/* The runtime row. */}
          <Box
            h={ROW_ENGINE.h}
            lines={["Local MCP server"]}
            w={180}
            x={23}
            y={ROW_ENGINE.y}
          />
          <Box
            h={ROW_ENGINE.h}
            lines={["MCP and agentic tool engine"]}
            w={SERVICES.w}
            x={SERVICES.x}
            y={ROW_ENGINE.y}
          />

          {/* Consumers, and the kit that builds for both zones. */}
          <Consumer
            h={ROW_CONSUMERS.h}
            lines={["Local single-user agents", "and applications"]}
            w={196}
            x={15}
            y={ROW_CONSUMERS.y}
          />
          <Box
            h={ROW_CONSUMERS.h}
            lines={["Tool development kit", "and evals"]}
            w={160}
            x={228}
            y={ROW_CONSUMERS.y}
          />
          <Consumer
            h={ROW_CONSUMERS.h}
            lines={["Multi-user agents", "and applications"]}
            w={200}
            x={674}
            y={ROW_CONSUMERS.y}
          />

          <g className="fill-none stroke-[1.6] stroke-muted-foreground/55">
            {/* Identity routes down the lane between the platform columns. */}
            <path
              d={`M 675 56 L 675 88 L ${IDP_LANE_X} 88 L ${IDP_LANE_X} 155 L ${GOVERNANCE.x + GOVERNANCE.w} 155`}
              markerEnd={ARROW}
            />
            <path
              d={`M ${SERVICES.x} 201 L ${IDP_LANE_X} 201 L ${IDP_LANE_X} 88 L 675 88 L 675 56`}
              markerEnd={ARROW}
            />

            {/* Tools feed the runtime that fronts them. */}
            <path
              d={`M 674 ${ROW_TOOLS.y + ROW_TOOLS.h} L 674 ${ROW_ENGINE.y}`}
              markerEnd={ARROW}
              markerStart={ARROW}
            />
            <path
              d={`M 862 ${ROW_TOOLS.y + ROW_TOOLS.h} L 862 ${ROW_ENGINE.y}`}
              markerEnd={ARROW}
              markerStart={ARROW}
            />
            <path
              d={`M ${LOCAL_MID_X} ${ROW_TOOLS.y + ROW_TOOLS.h} L ${LOCAL_MID_X} ${ROW_ENGINE.y}`}
              markerEnd={ARROW}
              markerStart={ARROW}
            />

            {/* The same tool code runs on either side of the boundary. */}
            <path
              d={`M 198 ${TOOLS_MID_Y} L ${SERVICES.x} ${TOOLS_MID_Y}`}
              markerEnd={ARROW}
              markerStart={ARROW}
              strokeDasharray="7 6"
            />
            <path
              d={`M ${KIT_LANE_X} ${ROW_CONSUMERS.y} L ${KIT_LANE_X} ${TOOLS_MID_Y}`}
              strokeDasharray="7 6"
            />
          </g>

          <g className="fill-none stroke-[1.6] stroke-brand-accent/55">
            {/* Everything that speaks MCP. */}
            <path
              d={`M 904 50 L 904 62 L ${EXTERNAL_MCP_LANE_X} 62 L ${EXTERNAL_MCP_LANE_X} ${ENGINE_MID_Y} L ${SERVICES.x + SERVICES.w} ${ENGINE_MID_Y}`}
              markerEnd={ARROW_ACCENT}
              markerStart={ARROW_ACCENT}
            />
            <path
              d={`M ${LOCAL_MID_X} ${ROW_ENGINE.y + ROW_ENGINE.h} L ${LOCAL_MID_X} ${ROW_CONSUMERS.y}`}
              markerEnd={ARROW_ACCENT}
              markerStart={ARROW_ACCENT}
            />
            <path
              d={`M 700 ${ROW_ENGINE.y + ROW_ENGINE.h} L 700 ${ROW_CONSUMERS.y}`}
              markerEnd={ARROW_ACCENT}
              markerStart={ARROW_ACCENT}
            />
            <path
              d={`M 850 ${ROW_ENGINE.y + ROW_ENGINE.h} L 850 ${ROW_CONSUMERS.y}`}
              markerEnd={ARROW_ACCENT}
              markerStart={ARROW_ACCENT}
            />
          </g>

          <Chip accent cx={966} cy={375} label="MCP" w={48} />
          <Chip accent cx={LOCAL_MID_X} cy={504} label="MCP" w={52} />
          <Chip accent cx={700} cy={482} label="MCP" w={52} />
          <Chip cx={850} cy={526} label="OXP / native LLM tools" w={170} />
        </svg>
      </div>
    </figure>
  );
}
