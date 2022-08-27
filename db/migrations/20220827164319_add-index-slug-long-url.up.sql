DROP INDEX IF EXISTS links_long_url;
CREATE INDEX IF NOT EXISTS links_slug_long_url ON links (slug, long_url);
