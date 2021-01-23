const express = require("express");
const app = express();
const PORT = 5000;
const menuListRouter = require("./router/menuList");

app.use("/api/menu", menuListRouter);

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
