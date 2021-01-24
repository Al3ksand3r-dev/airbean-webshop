const router = require("express").Router();
const { generateOrderNr, generateETA } = require("../utils/utils");

router.get("/", (req, res) => {
  try {
    res.status(200).json({ eta: generateETA(), orderNr: generateOrderNr() });
  } catch (error) {
    res.status(400).json(error);
  }
});

router.post("/", (req, res) => {
  console.log(req.body);
  //   try {
  //     res.status(200).json({ message: "Order sent" });
  //   } catch (error) {
  //     res.status(400).json(error);
  //   }
});

module.exports = router;
