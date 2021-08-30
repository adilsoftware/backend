var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var estudanteSchema = new Schema({
    nome: String,
    email: String,
    cpf: String
}, { versionKey: false })
module.exports = mongoose.model("Estudante", estudanteSchema)
