// requires
const fs = require('fs'); // Viene con node
const colors = require('colors');

let listarTabla = ( base, limite = 10 ) => {

    console.log('===================='.green);
    console.log(`Tabla de ${ base}`.green);
    console.log('===================='.green);

    for(let i=1; i<= limite; i++){
        console.log( `${base} x ${i} = ${base*i}` );
    }
}

let crearArchivo = ( base, limite = 10 ) => {

    return new Promise( (resolve, reject) => {

        if( !Number(base)){ // Valida si es un numero
            reject(`El parametro ${base} no es número`);
            return;
        }

        let data = '';

        for(let i=1; i<= limite; i++){
            data += `${base} x ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {
            
            if (err){ 
                reject(err);
            }else{
                resolve(`tabla-${ base }-al-${ limite }.txt`);
            }
            
            //console.log(`El archivo tabla-${base}.txt ha sido creado!!`);
        });
    
    });
}

// Tambien valdría module.exports.crearArchivo
module.exports = {
    crearArchivo,
    listarTabla
}

