const router = require("express").Router();
const menuData = require("../data/menu.json");

router.get("/", (req, res) => {
  try {
    res.status(200).json(menuData.menu);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
