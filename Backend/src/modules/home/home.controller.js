const s = require("./home.service");
exports.create = async (r, res, n) => {
  try {
    res.json(await s.create(r.body));
  } catch (e) {
    n(e);
  }
};
exports.getAll = async (r, res, n) => {
  try {
    res.json(await s.getAll());
  } catch (e) {
    n(e);
  }
};
exports.getById = async (r, res, n) => {
  try {
    res.json(await s.getById(r.params.id));
  } catch (e) {
    n(e);
  }
};
exports.update = async (r, res, n) => {
  try {
    res.json(await s.update(r.params.id, r.body));
  } catch (e) {
    n(e);
  }
};
exports.delete = async (r, res, n) => {
  try {
    await s.delete(r.params.id);
    res.json({ msg: "Deleted" });
  } catch (e) {
    n(e);
  }
};
