const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion: { demand: true, alias: 'd', desc: 'Descripcion de la tarea por hacer' },
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion: { demand: true, alias: 'd', desc: 'Descripcion de la tarea por hacer' },
        completado: { default: true, alias: 'c', desc: 'Marca como completado o pendiente una tarea' },
    })
    .command('borrar', 'Borrar un elemento', {
        descripcion: { demand: true, alias: 'd', desc: 'Descripcion de la tarea por hacer' },
    })
    .help()
    .argv;

module.exports = {
    argv
};