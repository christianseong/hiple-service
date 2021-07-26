const express = require("express");

const app = express();

const path = require('path');

app.use(express.static(path.join(__dirname,'dist')))

const port = process.env.PORT || 80

console.log(__dirname);

app.listen(port);