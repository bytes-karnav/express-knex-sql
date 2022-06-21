require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const http = require('http');
const cors = require('cors');
const app = express();

const server = http.createServer(app)
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes for the API
app.use(require('./api/routes'));

// Start server
server.listen(process.env.PORT || 5999, () => {
    console.log('Server is running on port ' + process.env.PORT);
});

