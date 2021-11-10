const express = require("express")
const registroDAO = require("../model/RegistroDAO")

const regsitroCtrl = {}

registroCtrl.listar = async() => {
    let registros = await registroDAO.find();
    return registros;
};

registroCtrl.insertar = async(registro) => {
    return await registroDAO.create(registro);
};

registroCtrl.actualizar = async(registro) => {
    let id = registro._id;
    delete registro._id;
    return await registroDAO.findOneAndUpdate(id, registro);
};

registroCtrl.eliminar = async(id) => {
    await registroDAO.deleteOne({ _id: id });

};

module.exports = registroCtrl;