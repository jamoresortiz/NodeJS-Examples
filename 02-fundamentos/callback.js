// setTimeout(() => {
//     console.log('Hola mundo');
// }, 3000);


let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'Jorge',
        id
    }

    if( id === 20) {
        callback(true, `El usuario con id ${id} no exite en la bbd`)
    } else{
        callback(null, usuario);
    }

}

getUsuarioById(10, (err, usuario) => {

    if(err) {
        return console.log(err);
    } 

    console.log('Usuario de bbdd', usuario);
})