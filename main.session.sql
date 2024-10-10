CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  firstname VARCHAR(255) NOT NULL,
  lastname VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  pwd VARCHAR(255) NOT NULL,
  registration DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE artworks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    description TEXT
);

CREATE TABLE views (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userId INTEGER,
    artworkId INTEGER,
    viewedAt DATETIME,
    FOREIGN KEY (userId) REFERENCES users(id),
    FOREIGN KEY (artworkId) REFERENCES artworks(id)
);

CREATE TABLE votes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userId INTEGER,
    artworkId INTEGER,
    votedAt DATETIME,
    FOREIGN KEY (userId) REFERENCES users(id),
    FOREIGN KEY (artworkId) REFERENCES artworks(id)
);

CREATE TABLE suggestions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userId INTEGER,
    suggestionName TEXT,
    suggestedAt DATETIME,
    FOREIGN KEY (userId) REFERENCES users(id)
);