import React from "react";

interface ToolCardProps {
  name: string;
  image: string;
  summary: string;
  link: string;
  category: string;
}

export const ToolCard: React.FC<ToolCardProps> = ({
  name,
  image,
  summary,
  link,
  category,
}) => {
  return (
    <a
      className="border-card-border-color rounded-lg border p-3 text-center text-inherit no-underline"
      href={link}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <img
          src={`/images/icons/${image}${image.includes(".") ? "" : ".png"}`}
          alt={`${name} logo`}
          className="mb-4 h-5 w-5 object-contain"
          style={{ width: "1.3rem", height: "1.3rem" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginTop: "-1rem",
          }}
        >
          <h2 style={{ fontWeight: "bold", fontSize: "1.1rem" }}>{name}</h2>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginTop: "-0.8rem",
        }}
      >
        <h4 style={{ fontSize: "0.80rem", color: "gray" }}>{category}</h4>
        <p style={{ fontSize: "0.70rem", textAlign: "left" }}>{summary}</p>
      </div>
    </a>
  );
};
