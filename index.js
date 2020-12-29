require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const serveStatic = require('serve-static');
const mailgunRouter = require('./router/mailgun');

const app = express();
const PORT = process.env.PORT || 8082;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(serveStatic(__dirname + '/client/dist'));
app.use(cors({
  origin: 'http://localhost:8080',
  credentials: true
}));

app.use('/mailgun', mailgunRouter);

app.listen(PORT, () => {
  console.log(`Server listening to port ${PORT}`);
});