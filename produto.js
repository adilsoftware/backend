var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var produtoSchema = new Schema({
    produto: String,
    marca: String,
    valor: String
}, { versionKey: false })
module.exports = mongoose.model("Produto", produtoSchema)
