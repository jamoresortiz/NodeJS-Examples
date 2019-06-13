/**
 * Async Await
 */


//  let getNombre = async() => {

//      return 'Jorge'
//  };

let getNombre = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Jorge')
        }, 3000);
    })
}

let saludo = async () => {
    let nombre = await getNombre();

    return `Hola ${nombre}`
}

saludo().then((msg) => {
    console.log(msg);
}).catch((err) => {
    console.log('Error de ASYNC', e);
});