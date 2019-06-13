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

let getEmpleado = (id) => {

    return new Promise( (resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id)

        if(!empleadoDB) {
            reject(`No existe un empleado con el id ${id}`)
        } else {
            resolve(empleadoDB)
        }
    });
    
}

let getSalario = (empleado) => {

    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id)

        if (!salarioDB) {
            reject(`No se encontró un salario para el usuario ${empleado.nombre}`)
        } else{
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            })
        }
    })

}

getEmpleado(3).then((empleado) => {

    return getSalario(empleado);

})
.then((result) => {

    console.log(`el salario de ${result.nombre} es de ${result.salario}€`);
    
}).catch((err) => {

    console.log(err);
    
});