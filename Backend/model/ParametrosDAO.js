const mongoose = require("../DB/conexionBD")

const parametrosSchema = mongoose.Schema({
    tipo_carro: Int,
    tipo_moto: Int,
    tipo_bicicleta: Int,
    tpm_carro: Int,
    tpm_moto: Int,
    tpm_bicicleta: Int
}, {
    collection: "parametros",
    versionKey: false
});

const parametrosDAO = mongoose.model('parametros', parametrosSchema);

module.exports = parametrosDAO;