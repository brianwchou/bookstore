CREATE TABLE users (
    firstname text NOT NULL,
    lastname text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    id SERIAL PRIMARY KEY,
    username text
);

INSERT INTO users(firstname, lastname, email, password, username)
VALUES 
    ('Ranna', 'Rizzello', 'rrizzello0@theglobeandmail.com', '4wbFzH8Bhr', 'rrizzello0'),
    ('Elianora', 'Fredy', 'efredy1@comcast.net', 'Jasv9JyeDy', 'efredy1'),
    ('Denys', 'Eastman', 'deastman2@creativecommons.org', 'zlox2UMnR7', 'deastman2'),
    ('Rosita', 'Cannavan', 'rcannavan3@oakley.com', 'TwV0lcGWCCFD', 'rcannavan3'),
    ('Kerri', 'Phelit', 'kphelit4@sourceforge.net', '4HtpaUM4Dugw', 'kphelit4'),
    ('Cathe', 'Hews', 'chews5@e-recht24.de', 'uVY1dLM', 'chews5'),
    ('Cordula', 'Looks', 'clooks6@who.int', 'l2mjOtUYO', 'clooks6'),
    ('Alexandre', 'Porrett', 'aporrett7@dagondesign.com', '7cbEtOY', 'aporrett7'),
    ('Vernice', 'Lemerle', 'vlemerle8@irs.gov', 'CVm2hP9MbtZ', 'vlemerle8'),
    ('Marinna', 'O''Halloran', 'mohalloran9@whitehouse.gov', 'PqxLdYELQ', 'mohalloran9');

CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    author text,
    title text,
    pages integer
);

INSERT INTO books(author, title, pages)
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

CREATE TABLE carts (
    id SERIAL PRIMARY KEY,
    book_id integer REFERENCES books(id),
    user_id integer REFERENCES users(id),
    quantity integer
);

INSERT INTO carts(book_id, user_id, quantity)
values 
    (10, 9, 5),
    (6, 10, 4),
    (4, 5, 6),
    (1, 5, 4),
    (1, 7, 4),
    (10, 1, 7),
    (2, 6, 6),
    (1, 5, 8),
    (14, 8, 2),
    (11, 1, 4),
    (5, 6, 5),
    (11, 9, 8),
    (15, 6, 4),
    (8, 9, 2),
    (6, 5, 8),
    (6, 8, 7),
    (7, 5, 2),
    (12, 3, 6),
    (4, 2, 8),
    (12, 3, 4),
    (9, 10, 10),
    (10, 10, 4),
    (8, 3, 7),
    (6, 4, 6),
    (14, 6, 4),
    (5, 4, 1),
    (2, 10, 6),
    (14, 6, 3),
    (3, 8, 5),
    (11, 1, 3),
    (10, 8, 10),
    (15, 3, 7),
    (6, 7, 7),
    (11, 7, 4),
    (14, 5, 2),
    (7, 2, 7),
    (2, 7, 3),
    (2, 9, 5),
    (2, 7, 2),
    (12, 2, 10),
    (8, 1, 4),
    (12, 8, 8),
    (14, 7, 2),
    (6, 2, 4),
    (1, 2, 2),
    (12, 5, 3),
    (1, 5, 1),
    (10, 9, 4),
    (5, 5, 8),
    (14, 10, 1);
