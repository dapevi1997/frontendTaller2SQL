/**
 * Importación del módulo express.
 */
var express = require('express');
/**
 * Almacenamiento del método router de express.
 */
var router = express.Router();
/**
 * API GET que lleva a la página principal de la aplicación.
 */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
