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

let getEmpleado = async (id) => {

        let empleadoDB = empleados.find(empleado => empleado.id === id)

    if(!empleadoDB) {
        throw new Error(`No existe un empleado con el id ${id}`)
    } else {
        return (empleadoDB)
    }
}

let getSalario = async (empleado) => {

        let salarioDB = salarios.find(salario => salario.id === empleado.id)

        if (!salarioDB) {
            throw new Error(`No se encontró un salario para el usuario ${empleado.nombre}`)
        } else{
            return {
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            }
        }

}

getInformacion = async (id) => {

    let empleado = await getEmpleado(id);
    let bodySalary = await getSalario(empleado)

    console.log(`${bodySalary.nombre} tiene un salario de ${bodySalary.salario}€`);

}

getInformacion(1).then((result) => {
    console.log(msg);
}).catch((err) => {
    console.log(err);
});