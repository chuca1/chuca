const express = require("express");
const router = express.Router();
const { getAllDatos } = require("../controllers/datos.controller");
const { getAllLogros } = require("../controllers/logros.controller");
const { getAllTrabajos } = require("../controllers/trabajos.controller");
/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});
router.get("/datos", getAllDatos);
router.get("/trabajos", getAllTrabajos);
router.get("/logros", getAllLogros);
module.exports = router;
