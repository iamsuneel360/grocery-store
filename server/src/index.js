const express = require("express");
const app = express();
const port = 4000;

app.get("/me", (req, res) => {
  res.send({
    name: "sunil",
    age: 25,
    balance: 10000,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
