require('dotenv').config();

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app)
const morgan = require('morgan');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));


// Routes for the API
app.use(require('./api/routes'));

// Start server
server.listen(process.env.PORT || 5999, () => {
    console.log('Server is running on port ' + process.env.PORT);
});

