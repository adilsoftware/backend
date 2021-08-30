var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var senhaSchema = new Schema({
    senha: String,
    data: String,
    empresa: String
}, { versionKey: false })

module.exports = mongoose.model("Senha", senhaSchema)
