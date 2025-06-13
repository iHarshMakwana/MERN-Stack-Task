const express = require("express");
const cors = require("cors");
const products = require("./products");

const app = express();
app.use(cors());

const PORT = 5000;

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});