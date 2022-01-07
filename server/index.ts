import express from 'express';
import bodyParser from 'body-parser';
import fileRouter from './src/routes/file.router';
import http from 'http';

const app = express();
const port = process.env.PORT || 5000;

// DB Configuration
require('./src/database');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '50mb' }));

// Use routes
app.use('/api', fileRouter);

http.createServer(app).listen(port, () => console.log('Server running at ' + port))

module.exports = app;