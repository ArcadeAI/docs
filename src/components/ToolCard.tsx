"use client";

import React from "react";
import styles from "./ToolCard.module.css";

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
    <a className={styles.card} href={link}>
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
          className={styles.logo}
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
