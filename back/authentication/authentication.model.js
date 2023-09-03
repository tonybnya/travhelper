const query_register = `
INSERT INTO 
    users_table 
(
    username, 
    full_name, 
    email, 
    password
)
VALUES (
    ?, 
    ?, 
    ?, 
    md5(?)
);
`;

const query_login = `
SELECT
    user_id,
    username, 
    email, 
    full_name 
FROM 
    users_table 
WHERE 
    email = ? 
AND 
    password = md5(?);
`;

module.exports = {
    query_register,
    query_login
}