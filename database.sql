
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!



--Create a new database called `splattr_prime_solo` and create the following tables:
--If you would like to name your database something else, 
--you will need to change `splattr_prime_solo` 
--to the name of your new database name in `server/modules/pool.js`

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
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
