const db = require("../connection");

const create = ({ user_id, content }) => {
  return db
    .query(
      "INSERT INTO notes (user_id, content) VALUES ($1, $2) RETURNING *;",
      [user_id, content]
    )
    .then((res) => res.rows);
};

const getAll = () => {
  return db.query("SELECT * FROM notes;").then((res) => res.rows);
};

module.exports = { create, getAll };
