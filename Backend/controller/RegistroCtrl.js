const express = require("express")
const personaDAO = require("../model/PersonasDAO")

const usuarioCtrl = {}

usuarioCtrl.listar = async() => {
    let personas = await personaDAO.find();
    return personas;
};

usuarioCtrl.insertar = async(persona) => {
    return await personaDAO.create(persona);
};

usuarioCtrl.actualizar = async(persona) => {
    let id = persona._id;
    delete persona._id;
    return await personaDAO.findOneAndUpdate(id, persona);
};

usuarioCtrl.eliminar = async(id) => {
    await personaDAO.deleteOne({ _id: id });

};

module.exports = usuarioCtrl;