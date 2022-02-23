// var express = require("express");
// var router = express.Router();
const router = require("express").Router();
const indexController = require("../controllers/indexController");
// const { upload, uploadMultiple } = require('../middlewares/multer');
// const auth = require('../middlewares/auth');

/* GET home page. */
router.get("/", indexController.viewIndex);
router.get("/masterData", indexController.viewMasterData);

module.exports = router;
