const mongoose = require("../DB/conexionDB")

const registroSchema = mongoose.Schema({
    placa_vehiculo: String,
    plaza: String,
    hora_ingreso: Date,
    hora_salida: Date,
    imagen_vehiculo: String,
    tipo_vehiculo: String,
    total_pagar: String,
}, {
    collection: "Registro",
    versionKey: false
});

const registroDAO = mongoose.model('Registro', registroSchema);

module.exports = registroDAO;