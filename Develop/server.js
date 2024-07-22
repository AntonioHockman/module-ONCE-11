const express = require('express');
const path = require('path');
const html_routes = require('./routes/html-routes');
const api_routes = require('./routes/api-routes');

const port = 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(html_routes)
app.use(api_routes)
  
  app.listen(port, () => {
    console.log(`server running on port http://localhost:${port}`)
  });
  