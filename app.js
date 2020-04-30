const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log(porHacer.crear(argv.descripcion));
        break;
    case 'listar':
        let listado = porHacer.getListado();
        listado.forEach(tarea => {
            console.log('============POR HACER=============='.green);
            console.log(tarea.descripcion);
            console.log(`Estado: ${tarea.completado}`);
            console.log('==================================='.green);
        });
        break;
    case 'actualizar':
        let tareaAct = porHacer.actualizar(argv.descripcion, argv.completado);
        if (tareaAct) {
            console.log(`Tarea actualizada: ${tareaAct.descripcion}`);
        } else {
            console.log('Tarea no encontrada');
        }
        break;
    case 'borrar':
        let tareaBorrar = porHacer.borrar(argv.descripcion);

        if (tareaBorrar) {
            console.log(`Tarea borrada: ${tareaBorrar.descripcion}`);
        } else {
            console.log('Tarea no encontrada');
        }
        break;
    default:
        console.log('Comando no reconocido');
}