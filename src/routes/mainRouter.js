const express = require('express');
const router = express.Router();
const controller = require('../controllers/mainController');


router.get('/', controller.index);
router.get('/catalogo', controller.catalogo);
router.get('/contacto', controller.contacto);
router.get('/nosotros', controller.nosotros);






module.exports = router;