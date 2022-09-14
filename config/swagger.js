const path = require('path');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const { version } = require('../package.json');

const routesApi = path.join(__dirname, '../api/list/list.controller.js');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation List',
      version,
      description: 'Documentation about Favs API',
      contact: {
        name: 'Guillermo Garzon',
        email: 'guillegarzon.gg@gmail.com',
      }
    },
    servers:[
      {
        url:'http://localhost:8080/',
        description:'Local server'
      },
    ],
  },
  apis: [routesApi],
}

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app, port) {
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

  // Docs in JSON format
  app.get('/docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
  console.log(`Swagger docs running on http://localhost:${port}/docs`);
}

module.exports = swaggerDocs;
