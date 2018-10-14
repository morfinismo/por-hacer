const descripcion = {
    alias: "d",
    demand: true,
    descripcion: "descripcion de la tarea"
};

const argv = require("yargs")
    .command("crear", "crea una tarea por hacer", {
        descripcion
    })
    .command("actualizar", "actualiza una tarea por hacer", {
        completado: {
            alias: "c",
            demand: true
        },
        descripcion
    })
    .command("borrar", "borra una tarea por hacer", {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
};