const { application, response, request } = require("express");
const { stringify } = require("nodemon/lib/utils");
const express = require("express")
const registroCtrl = require("./controller/RegistroCtrl")

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

app.delete('/api/personas/:id', async(request, response) => {
    let id = request.params.id
    console.log(id);
    await personasCtrl.eliminar(id);
    response.status(204).send("Server corriendo")
});


app.listen(1400, () => {
    console.log("servidor corriendo")
});