const { application, response, request } = require("express");
const { stringify } = require("nodemon/lib/utils");
const express = require("express")
const registroCtrl = require("./controller/RegistroCtrl")

const app = express();
app.use(express.json());


app.get('/api/registro', async(request, response) => {
    let registros = await registroCtrl.listar();
    response.status(200).json(registros);
});

app.post('/api/registro', async(request, response) => {
    const registro = request.body;
    try {
        await registroCtrl.insertar(registro);
        response.status(200).json(registro);
    } catch (error) {
        console.log(error);
        response.status(400).send(error);
    }
});

app.put('/api/registro', async(request, response) => {
    const registro = request.body;
    try {
        await registroCtrl.actualizar(registro);
        response.status(200).json(registro);
    } catch (error) {
        console.log(error);
        response.status(400).send(error);
    }
});

app.delete('/api/registro/:id', async(request, response) => {
    let id = request.params.id
    console.log(id);
    await registroCtrl.eliminar(id);
    response.status(204).send("Server corriendo")
});


app.listen(1400, () => {
    console.log("servidor corriendo")
});