const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const estudante_controller = require('./estudante_controller');
const produto_controller = require('./produto_controller');
const empresa_controller = require('./empresa_controller');
const senha_controller = require('./senha_controller');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect(
    'mongodb+srv://adilson:Ad81gui@1@cluster0.ddezt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    { useNewUrlParser: true });
app.use('/estudante', estudante_controller);


//mongoose.connect(
 //   'mongodb://localhost:27017/projeto_aula',
 //   { useNewUrlParser: true });

app.use('/produto', produto_controller);
app.use('/empresa', empresa_controller);
app.use('/senha', senha_controller);

app.listen(3001);
