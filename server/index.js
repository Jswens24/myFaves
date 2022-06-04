const express = require('express');

const app = express();

app.use(express.json());

const { postFav, } = require('./controller')

app.post("/api/fave/", postFav);

app.listen(4040, () => console.log('Party on port 4040!'));