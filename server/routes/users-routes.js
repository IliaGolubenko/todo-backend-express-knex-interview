const _ = require("lodash");
const users = require("../database/users-queries.js");
const router = require("express").Router();

router.get("/", async (req, res) => {
  const allEntries = await users.all();
  return res.send(allEntries);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const user = await users.get(id);
  return res.send(user);
});

router.post("/", async (req, res) => {
  const { name, email, password } = req.body;

  const user = await users.create(name, email, password);
  return res.send(user);
});

router.patch("/:id", async (req, res) => {
  const {
    body,
    param: { id },
  } = req;
  const user = await users.update(id, body);
  return res.send(user);
});

router.delete("/:id", async (req, res) => {
  const {
    param: { id },
  } = req;
  const user = await users.del(id);
  return res.send(user);
});

router.delete("/", async (req, res) => {
  const user = await users.clear(id);
  return res.send(user);
});

module.exports = router;
