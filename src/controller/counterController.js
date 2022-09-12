const { read, update } = require("../service/counter.js");

module.exports = (app) => {
  app.get("/counter", (req, res) => {
    res.json(read());
  });

  app.put("/counter", (req, res) => {
    console.log(req.body);
    res.json(update(req.body.counter));
  });
};
