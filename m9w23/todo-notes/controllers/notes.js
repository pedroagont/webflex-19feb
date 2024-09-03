const notesQueries = require("../db/queries/notes");

const create = (req, res) => {
  const user_id = 1;
  // const { user_id } = req.session
  // if(!user_id) {
  //     return res.status(400).json({ message: 'User is not logged in'})
  // }

  const { content } = req.body;
  if (!content) {
    return res.status(400).json({ message: "Body is missing content" });
  }

  const noteBody = { user_id, content };

  notesQueries
    .create(noteBody)
    .then((note) => {
      res.json({ note });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
};

const getAll = (req, res) => {
  notesQueries
    .getAll()
    .then((notes) => {
      res.json({ notes });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
};

module.exports = { create, getAll };
