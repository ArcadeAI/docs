import type { MetaRecord } from "nextra";

const meta: MetaRecord = {
  "*": {
    theme: {
      breadcrumb: true,
      toc: true,
    },
  },
  postgres: {
    title: "Postgres",
  },
  mongodb: {
    title: "MongoDB",
  },
  clickhouse: {
    title: "ClickHouse",
  },
};

export default meta;
