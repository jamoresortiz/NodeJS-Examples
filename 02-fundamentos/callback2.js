let empleados = [{
    id: 1,
    nombre: 'Jorge'
},{
    id: 2,
    nombre: 'Paco'
},{
    id: 3,
    nombre: 'Juan Antonio'
}];

let salarios =[{
    id: 1,
    salario: 1610
},{
    id: 2,
    salario: 900
}];

let getEmpleado = (id, callback) => {

    let empleadoDB = empleados.find(empleado => empleado.id === id)

    if(!empleadoDB) {
        callback(`No existe un empleado con el id ${id}`)
    } else {
        callback(null, empleadoDB)
    }
}

let getSalario = (empleado, callback) => {

    let salarioDB = salarios.find(salario => salario.id === empleado.id)

    if (!salarioDB) {
        callback(`No se encontró un salario para el usuario ${empleado.nombre}`)
    } else{
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        })
    }
}

getEmpleado(1, (err, empleado) => {

    if (err) {
        return console.log(err);
    }

    getSalario(empleado, (err, body) => {

        if (err) {
            return console.log(err);
        } else {
            return console.log(body);
        }
    
    });
});
