const express = require('express');
const router = express.Router();

// Importar templates compartidos
const templates = require('../data/templates');

// Ruta para agregar un nuevo template
router.post('/add', (req, res) => {
  const { name, comment } = req.body;
  if (name && comment) {
    const id = templates.length + 1;
    templates.push({ id, name, comment });
  }
  res.redirect('/');
});

// Ruta para eliminar un template existente
router.post('/delete/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const index = templates.findIndex((template) => template.id === id);
  if (index !== -1) {
    templates.splice(index, 1);
  }
  res.redirect('/');
});

module.exports = router;
