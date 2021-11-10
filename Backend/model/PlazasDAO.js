const mongoose = require("../DB/conexionBD")

const plazasSchema = mongoose.Schema({
    placa_vehiculo: String,
    plaza: String,
    hora_ingreso: Date,
    hora_salida: Date,
    imagen_vehiculo: String,
    tipo_vehiculo: String,
    total_pagar: String,
}, {
    collection: "Plazas",
    versionKey: false
});

const plazasDAO = mongoose.model('Plazas', plazasSchema);

module.exports = plazasDAO;