const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const { postFave, } = require('./controller')

app.post("/api/fave", postFave);

app.listen(4040, () => console.log('Party on port 4040!'));