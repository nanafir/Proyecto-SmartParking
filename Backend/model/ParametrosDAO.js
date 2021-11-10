const mongoose = require("../DB/conexionDB")

const personaSchema = mongoose.Schema({
    placa_vehiculo: String,
    plaza: String,
    hora_ingreso: Date,
    hora_salida: Date,
    imagen_vehiculo: String,
    tipo_vehiculo: String,
    total_pagar: String,
}, {
    collection: "registro",
    versionKey: false
});

const personaDAO = mongoose.model('Personas', personaSchema);

module.exports = personaDAO;