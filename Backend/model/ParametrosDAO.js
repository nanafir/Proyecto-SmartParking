const mongoose = require("../DB/conexionBD")

const parametrosSchema = mongoose.Schema({
    placa_vehiculo: String,
    plaza: String,
    hora_ingreso: Date,
    hora_salida: Date,
    imagen_vehiculo: String,
    tipo_vehiculo: String,
    total_pagar: String,
}, {
    collection: "Parametros",
    versionKey: false
});

const parametrosDAO = mongoose.model('Parametros', parametrosSchema);

module.exports = parametrosDAO;