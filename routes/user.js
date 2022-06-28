/**
 * Importación del módulo express.
 */
var express = require('express');
/**
 * Almacenamiento del método router de express.
 */
var router = express.Router();

/**
 * API GET que renderiza la página para actualizar contacto.
 */
router.get('/toUpdate/:id', function(req, res, next) {
    const id = req.params.id;
  res.render('toUpdate', { id: id });
});

/**
 * API GET que renderiza la página para actualizar el nombre.
 */
router.get('/toUpdateName/:id', function(req, res, next) {
  const id = req.params.id;
res.render('toUpdateName', { id: id });
});

/**
 * API GET que renderiza la página para actualizar el número.
 */
router.get('/toUpdateNumber/:id', function(req, res, next) {
  const id = req.params.id;
res.render('toUpdateNumber', { id: id });
});

/**
 * API GET que renderiza la página para actualizar el email.
 */
router.get('/toUpdateEmail/:id', function(req, res, next) {
  const id = req.params.id;
res.render('toUpdateEmail', { id: id });
});

/**
 * API GET que renderiza la página para actualizar la fecha de nacimiento.
 */
router.get('/toUpdateBirthday/:id', function(req, res, next) {
  const id = req.params.id;
res.render('toUpdateBirthday', { id: id });
});

/**
 * API GET que renderiza la página para eliminar contacto.
 */
router.get('/toEliminate/:id', function(req, res, next) {
  const id = req.params.id;
res.render('toEliminate', { id: id });
});

module.exports = router;