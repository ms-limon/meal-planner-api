DROP TYPE IF EXISTS recipes;

CREATE TABLE IF NOT EXISTS meals (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    user_id INTEGER REFERENCES users(id),
    name TEXT NOT NULL,
    details TEXT,
    calories INTEGER DEFAULT 0
);