var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var empresaSchema = new Schema({
    nome: String,
    email: String,
    cnpj: String
}, { versionKey: false })
module.exports = mongoose.model("Empresa", empresaSchema)
