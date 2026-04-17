const r = require("express").Router();
const c = require("./home.controller");
r.post("/", c.create);
r.get("/", c.getAll);
r.get("/:id", c.getById);
r.put("/:id", c.update);
r.delete("/:id", c.delete);
module.exports = r;
