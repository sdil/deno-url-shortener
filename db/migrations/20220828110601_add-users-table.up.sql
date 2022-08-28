CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY, -- Github user id
    username STRING,
    fullname STRING,
    access_token STRING,
    github_token STRING NOT NULL,
    INDEX user_access_token (access_token)
)