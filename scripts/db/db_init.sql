CREATE TYPE user_role AS ENUM
('guest', 'member', 'admin');

CREATE TABLE users
(
    firstname text NOT NULL,
    lastname text NOT NULL,
    email text NOT NULL,
    password_hash char(128) NOT NULL,
    id SERIAL UNIQUE PRIMARY KEY,
    username text,
    salt char(64),
    role user_role
);

CREATE TABLE books
(
    id SERIAL PRIMARY KEY,
    author text,
    title text,
    pages integer
);

INSERT INTO books
    (author, title, pages)
VALUES
    ('Floyd Cuttles', 'strategy', 334),
    ('Esme Dunderdale', 'methodology', 502),
    ('Ros Whiskin', 'De-engineered', 486),
    ('Kathlin Galliford', 'system-worthy', 645),
    ('Josephina Reddin', 'extranet', 691),
    ('Loren Sirl', 'help-desk', 307),
    ('Bonnee Laurens', 'encryption', 735),
    ('Eamon Brinicombe', 'core', 753),
    ('Queenie Durrand', 'Profound', 692),
    ('Marrissa Zapata', 'optimal', 475),
    ('Evangeline Gunter', 'value-added', 508),
    ('Phil Steabler', 'Function-based', 650),
    ('Lucio Dowey', 'Graphic Interface', 376),
    ('Reuven Ferrieres', 'national', 668),
    ('Heriberto Perutto', 'Right-sized', 785);

CREATE TABLE carts
(
    book_id integer REFERENCES books(id),
    user_id integer REFERENCES users(id),
    quantity integer,
    PRIMARY KEY (book_id, user_id)
);

/*
 copied from connect-pg-simple
 https://github.com/voxpelli/node-connect-pg-simple/blob/main/table.sql
*/
CREATE TABLE "session"
(
    "sid" varchar NOT NULL
    COLLATE "default",
	"sess" json NOT NULL,
	"expire" timestamp
    (6) NOT NULL
)
    WITH
    (OIDS=FALSE);

    ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid")
    NOT DEFERRABLE INITIALLY IMMEDIATE;

    CREATE INDEX "IDX_session_expire" ON "session" ("expire");