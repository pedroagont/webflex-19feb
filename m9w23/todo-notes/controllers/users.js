const userQueries = require("../db/queries/users");

const getAll = (req, res) => {
  userQueries
    .getUsers()
    .then((users) => {
      res.json({ users });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
};

module.exports = { getAll };
