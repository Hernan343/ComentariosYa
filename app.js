const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const templates = require('./data/templates');
const templatesRoutes = require('./routes/templates');

const app = express();

let generatedComment = ''; // Variable para almacenar el comentario generado

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/templates', templatesRoutes);

// Ruta principal
app.get('/', (req, res) => {
  res.render('index', { templates, generatedComment });
});

// Ruta para generar un comentario
app.post('/generate-comment', (req, res) => {
  const { riderName, template } = req.body;

  // Buscar el template seleccionado
  const selectedTemplate = templates.find((t) => t.id === parseInt(template, 10));

  if (selectedTemplate) {
    // Generar el comentario en el formato deseado
    generatedComment = `${riderName} // ${selectedTemplate.comment}`;
    console.log(generatedComment); // Solo para depuración
  }

  // Redirigir de vuelta a la página principal
  res.redirect('/');
});
app.post('/generate-comment', (req, res) => {
  const { riderName, template } = req.body;

  // Buscar el template seleccionado
  const selectedTemplate = templates.find((t) => t.id === parseInt(template, 10));

  if (selectedTemplate) {
    // Generar el comentario en el formato deseado
    generatedComment = `${riderName} // ${selectedTemplate.comment}`;
    console.log(generatedComment); // Solo para depuración
  }

  // Redirigir de vuelta a la página principal
  res.redirect('/');
});
app.post('/generate-comment', (req, res) => {
  const { riderName, template } = req.body;

  // Buscar el template seleccionado
  const selectedTemplate = templates.find((t) => t.id === parseInt(template, 10));

  if (selectedTemplate) {
    // Generar el comentario en el formato deseado
    generatedComment = `${riderName} // ${selectedTemplate.comment}`;
    console.log(generatedComment); // Solo para depuración
  }

  // Redirigir de vuelta a la página principal
  res.redirect('/');
});
app.post('/generate-comment', (req, res) => {
  const { riderName, template } = req.body;

  // Buscar el template seleccionado
  const selectedTemplate = templates.find((t) => t.id === parseInt(template, 10));

  if (selectedTemplate) {
    // Generar el comentario en el formato deseado
    generatedComment = `${riderName} // ${selectedTemplate.comment}`;
    console.log(generatedComment); // Solo para depuración
  }

  // Redirigir de vuelta a la página principal
  res.redirect('/');
});
app.post('/generate-comment', (req, res) => {
  const { riderName, template } = req.body;

  // Buscar el template seleccionado
  const selectedTemplate = templates.find((t) => t.id === parseInt(template, 10));

  if (selectedTemplate) {
    // Generar el comentario en el formato deseado
    generatedComment = `${riderName} // ${selectedTemplate.comment}`;
    console.log(generatedComment); // Solo para depuración
  }

  // Redirigir de vuelta a la página principal
  res.redirect('/');
});
app.post('/generate-comment', (req, res) => {
  const { riderName, template } = req.body;

  // Buscar el template seleccionado
  const selectedTemplate = templates.find((t) => t.id === parseInt(template, 10));

  if (selectedTemplate) {
    // Generar el comentario en el formato deseado
    generatedComment = `${riderName} // ${selectedTemplate.comment}`;
    console.log(generatedComment); // Solo para depuración
  }

  // Redirigir de vuelta a la página principal
  res.redirect('/');
});
app.post('/generate-comment', (req, res) => {
  const { riderName, template } = req.body;

  // Buscar el template seleccionado
  const selectedTemplate = templates.find((t) => t.id === parseInt(template, 10));

  if (selectedTemplate) {
    // Generar el comentario en el formato deseado
    generatedComment = `${riderName} // ${selectedTemplate.comment}`;
    console.log(generatedComment); // Solo para depuración
  }

  // Redirigir de vuelta a la página principal
  res.redirect('/');
});
app.post('/generate-comment', (req, res) => {
  const { riderName, template } = req.body;

  // Buscar el template seleccionado
  const selectedTemplate = templates.find((t) => t.id === parseInt(template, 10));

  if (selectedTemplate) {
    // Generar el comentario en el formato deseado
    generatedComment = `${riderName} // ${selectedTemplate.comment}`;
    console.log(generatedComment); // Solo para depuración
  }

  // Redirigir de vuelta a la página principal
  res.redirect('/');
});
app.post('/generate-comment', (req, res) => {
  const { riderName, template } = req.body;

  // Buscar el template seleccionado
  const selectedTemplate = templates.find((t) => t.id === parseInt(template, 10));

  if (selectedTemplate) {
    // Generar el comentario en el formato deseado
    generatedComment = `${riderName} // ${selectedTemplate.comment}`;
    console.log(generatedComment); // Solo para depuración
  }

  // Redirigir de vuelta a la página principal
  res.redirect('/');
});
app.post('/generate-comment', (req, res) => {
    const { riderName, template } = req.body;
  
    // Buscar el template seleccionado
    const selectedTemplate = templates.find((t) => t.id === parseInt(template, 10));
  
    if (selectedTemplate) {
      // Generar el comentario en el formato deseado
      generatedComment = `${riderName} // ${selectedTemplate.comment}`;
      console.log(generatedComment); // Solo para depuración
    }
  
    // Redirigir de vuelta a la página principal
    res.redirect('/');
  });
  
  

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
