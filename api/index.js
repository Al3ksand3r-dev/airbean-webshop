const express = require("express");
const app = express();
const PORT = 5000;
const menuListRouter = require("./router/menuList");
const orderRouter = require("./router/orders");

app.use(express.json());

app.use("/api/menu", menuListRouter);
app.use("/api/order", orderRouter);

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
