
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "user-review" (
"id" SERIAL PRIMARY KEY,
"user_id" INT REFERENCES "user",
"movie_id" INT,
"notes" TEXT,
"rating" INT
);
--where all the names of lists live. Users create lists and those are save here
CREATE TABLE "user_lists" (
"id" SERIAL PRIMARY KEY,
"user_id" INT REFERENCES "user",
"list_title" VARCHAR(100) NOT NULL
);
--matches movie ids and lists they belong in
CREATE TABLE "movie_list" (
"id" SERIAL PRIMARY KEY,
"list_id" INT REFERENCES "user_lists" ("id") ON DELETE CASCADE,
"movie_id" INT
);
