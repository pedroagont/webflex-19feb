/*
 * All routes for Widget Data are defined here
 * Since this file is loaded in server.js into api/widgets,
 *   these routes are mounted onto /api/widgets
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const router = express.Router();
const notesController = require("../controllers/notes");

// CRUD - Create, Read All, Read one, Update, Delete
router.post("/", notesController.create);
router.get("/", notesController.getAll);

module.exports = router;
