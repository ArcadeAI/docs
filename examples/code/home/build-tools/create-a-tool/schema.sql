CREATE TABLE "public"."users" (
    "id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256) NOT NULL,
	"email" text NOT NULL UNIQUE,
	"password_hash" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);

CREATE TABLE "public"."messages" (
    "id" serial PRIMARY KEY NOT NULL,
	"body" text NOT NULL,
	"user_id" integer NOT NULL REFERENCES "public"."users" (id),
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);