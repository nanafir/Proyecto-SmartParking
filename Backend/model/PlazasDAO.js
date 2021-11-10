const mongoose = require("../DB/conexionDB")

const plazasSchema = mongoose.Schema({
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

const plazasDAO = mongoose.model('Personas', plazasSchema);

module.exports = plazasDAO;