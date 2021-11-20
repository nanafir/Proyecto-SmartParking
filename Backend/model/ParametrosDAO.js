const mongoose = require("../DB/conexionBD")

const parametrosSchema = mongoose.Schema({

    tarifa_minuto_carro: Int,
    tarifa_minuto_moto: Int,
    tarifa_minuto_bicicleta: Int

}, {

    collection: "parametros",
    versionKey: false

});

const parametrosDAO = mongoose.model('parametros', parametrosSchema);

module.exports = parametrosDAO;