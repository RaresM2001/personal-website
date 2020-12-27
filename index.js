const express = require('express');
const bodyParser = require('body-parser');
const serveStatic = require('serve-static');

const app = express();
const PORT = process.env.PORT || 8082;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(serveStatic(__dirname + '/client/dist'));

app.listen(PORT, () => {
  console.log(`Server listening to port ${PORT}`);
});