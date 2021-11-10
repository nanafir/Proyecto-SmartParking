const { application, response, request } = require("express");
const { stringify } = require("nodemon/lib/utils");
const express = require("express")
const mongoose = require("./conexionBD")
const app = express();
app.use(express.json());
let registro = [{
    placa_vehiculo = " ",
    plaza = " ",
    hora_ingreso = "",
    hora_salida = "",
    imagen_vehiculo = "",
    tipo_vehiculo = "",
    total_pagar = ""
}];

const registroSchema = mongoose.Schema({
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

const registroDAO = mongoose.model('registro', registroSchema);
app.post('/api/registro', (request, response) => {
    const registro = request.body;
    try {
        registroDAO.create(registro);
        response.status(200).json(registro);
    } catch (error) {
        console.log(error);
        response.status(400).send(error);
    }
});

app.delete('/api/registro', (request, response) => {
    let registroElim = request.body;
    console.log(registroElim.placa_vehiculo);
    let existe = false;
    for (let i = 0; i < registro.length; i++) {
        console.log("registroElim.placa_vehiculentro al for");
        console.log(registroElim.placa_vehiculo);
        console.log(registro[i].placa_vehiculo);
        if (registroElim.placa_vehiculo == registro[i].placa_vehiculo) {
            console.log(registro[i].placa_vehiculo);
            console.log("La persona con cc: " + registroElim.placa_vehiculo + " , sera eliminada");
            registro.splice(i, 1);
            response.status(200).json(registro);
            i = registro.length;
            existe = true;

        }
    }
    if (!existe) {
        response.status(404).send("Persona no existe, no se puede borrar");
    }
})


app.listen(1400, () => {
    console.log("servidor corriendo")
});