const fs = require('fs');

let listadoPorHacer = [];

cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
};

guardarDB = () => {
    fs.writeFile('db/data.json', JSON.stringify(listadoPorHacer), (error) => {
        if (error) {
            throw new Error('No se pudo grabar');
        }
    });
};

crear = (descripcion) => {
    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
    //    fs.writeFile('tareas/tareas.txt', , );
}

getListado = () => {
    cargarDB();
    return listadoPorHacer;
};

actualizar = (descripcion, completado = true) => {
    cargarDB();
    let tareaAct;
    listadoPorHacer.forEach(tarea => {
        if (tarea.descripcion === descripcion) {
            tarea.completado = completado;

            tareaAct = tarea;
            guardarDB();
        }
    });

    return tareaAct;
};

borrar = (descripcion) => {
    cargarDB();
    let idx = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    //listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);
    var tareaPorBorrar = null;

    if (idx != -1) {
        tareaPorBorrar = listadoPorHacer.splice(idx, 1)[0];
        console.log(listadoPorHacer);
        guardarDB();
    }

    return tareaPorBorrar;
};

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
};