var express = require('express');
var router = express.Router();
var dash3Controller = require('../controllers/dash3Controller');

router.get('/personalidades', dash3Controller.listarPersonalidades);

module.exports = router;