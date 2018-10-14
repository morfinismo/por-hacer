const fs = require("fs");

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile("../tareas/db/data.json", data, (err) => {
        if (err) {
            throw Error(err);
        }
    });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require("../db/data.json");
    } catch (err) {
        listadoPorHacer = [];
    }
}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex((tarea) => tarea.descripcion === descripcion);
    if (index > -1) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }

}

const borrar = (descripcion) => {
    cargarDB();
    let index = listadoPorHacer.findIndex((tarea) => tarea.descripcion === descripcion);
    if (index > -1) {
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return "Tarea borrada";
    } else {
        return "No se encontró la tarea: " + descripcion;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}