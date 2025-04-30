const _ = require("lodash");
const teams = require("../database/teams-queries.js");
const router = require("express").Router();

router.get("/", async (req, res) => {
  const allEntries = await teams.all();
  return res.send(allEntries);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const user = await teams.get(id);
  return res.send(user);
});

router.post("/", async (req, res) => {
  const { name, email, password } = req.body;

  const user = await teams.create(name, email, password);
  return res.send(user);
});

router.patch("/:id", async (req, res) => {
  const {
    body,
    param: { id },
  } = req;
  const user = await teams.update(id, body);
  return res.send(user);
});

router.delete("/:id", async (req, res) => {
  const {
    param: { id },
  } = req;
  const user = await teams.del(id);
  return res.send(user);
});

router.delete("/", async (req, res) => {
  const user = await teams.clear(id);
  return res.send(user);
});

module.exports = router;
