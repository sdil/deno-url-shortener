CREATE TABLE IF NOT EXISTS defaultdb.links (
	id SERIAL PRIMARY KEY,
	long_url STRING NOT NULL,
	slug STRING NOT NULL
)
