DROP TABLE IF EXISTS "User";
CREATE TABLE IF NOT EXISTS "User"(
    email VARCHAR(255) NOT NULL,
    password  VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS "Films";
CREATE TABLE IF NOT EXISTS "Films" (
    "title" VARCHAR(255) NOT NULL,
    "year"  INTEGER NOT NULL,
    "poster" VARCHAR(255) NOT NULL,
    "genre" VARCHAR(255) NOT NULL,
    "views" INTEGER NOT NULL,
    "url" VARCHAR(255) NOT NULL
);

INSERT INTO "Films" ("title", "year", "poster", "genre", "views", "url") VALUES('Test 1', 2021, 'poster1', 'Horror', 10, 'url');
INSERT INTO "Films" ("title", "year", "poster", "genre", "views", "url") VALUES('Test 2', 2022, 'poster2', 'Horror', 20, 'url');
INSERT INTO "Films" ("title", "year", "poster", "genre", "views", "url") VALUES('Test 3', 2023, 'poster3', 'Horror', 30, 'url');
INSERT INTO "Films" ("title", "year", "poster", "genre", "views", "url") VALUES('Test 4', 2024, 'poster4', 'Horror', 40, 'url');
INSERT INTO "Films" ("title", "year", "poster", "genre", "views", "url") VALUES('Test 5', 2025, 'poster5', 'Horror', 50, 'url');
INSERT INTO "Films" ("title", "year", "poster", "genre", "views", "url") VALUES('Test 6', 2026, 'poster6', 'Horror', 60, 'url');
INSERT INTO "Films" ("title", "year", "poster", "genre", "views", "url") VALUES('Test 7', 2027, 'poster7', 'Horror', 70, 'url');
INSERT INTO "Films" ("title", "year", "poster", "genre", "views", "url") VALUES('Test 8', 2028, 'poster8', 'Horror', 80, 'url');
INSERT INTO "Films" ("title", "year", "poster", "genre", "views", "url") VALUES('Test 9', 2029, 'poster9', 'Horror', 90, 'url');
INSERT INTO "Films" ("title", "year", "poster", "genre", "views", "url") VALUES('Test 10', 2020, 'poster10', 'Horror', 100, 'url');
INSERT INTO "Films" ("title", "year", "poster", "genre", "views", "url") VALUES('Test 11', 2018, 'poster12', 'Horror', 10, 'url');
INSERT INTO "Films" ("title", "year", "poster", "genre", "views", "url") VALUES('Test 12', 2012, 'poster11', 'Horror', 10, 'url');
INSERT INTO "Films" ("title", "year", "poster", "genre", "views", "url") VALUES('Test 13', 2003, 'poster13', 'Horror', 10, 'url');