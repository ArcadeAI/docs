import type React from "react";

interface ToolCardProps {
  category: string;
  image: string;
  link: string;
  name: string;
  summary: string;
}

export const ToolCard: React.FC<ToolCardProps> = ({
  name,
  image,
  summary,
  link,
  category,
}) => (
  <a
    className="rounded-lg border border-card-border-color p-3 text-center text-inherit no-underline"
    href={link}
  >
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        gap: "0.5rem",
      }}
    >
      <img
        alt={`${name} logo`}
        className="mb-4 h-5 w-5 object-contain"
        height={20}
        src={`/images/icons/${image}${image.includes(".") ? "" : ".png"}`}
        style={{ height: "1.3rem", width: "1.3rem" }}
        width={20}
      />
      <div
        style={{
          alignItems: "flex-start",
          display: "flex",
          flexDirection: "column",
          marginTop: "-1rem",
        }}
      >
        <h2 style={{ fontSize: "1.1rem", fontWeight: "bold" }}>{name}</h2>
      </div>
    </div>
    <div
      style={{
        alignItems: "flex-start",
        display: "flex",
        flexDirection: "column",
        marginTop: "-0.8rem",
      }}
    >
      <h4 style={{ color: "gray", fontSize: "0.80rem" }}>{category}</h4>
      <p style={{ fontSize: "0.70rem", textAlign: "left" }}>{summary}</p>
    </div>
  </a>
);
