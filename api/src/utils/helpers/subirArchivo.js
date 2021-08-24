
const path = require('path');
const {v4: uuidv4}  = require('uuid')

const TIPO_CARPETAS = ['productos' , 'usuarios'];

const subirArchivo = ( files , extensionesValidas = ['png' , 'jpg' , 'jpeg' , 'gif'] , carpeta = 'productos') => {

    return new Promise( (resolve , reject) => {
    
          const { archivo  } = files;
          const nombreCortado = archivo.name.split('.');
          const extension = nombreCortado[nombreCortado.length - 1];
    
          // Validar las extensiones permitidas    
          if(!extensionesValidas.includes(extension)){
             reject(`La extensión ${extension}  no es permitida, ${extensionesValidas}`);
          }
    
          const nombreTemp = uuidv4() + '.' + extension; 
          const uploadpath = path.join(__dirname , '../../../../uploads/',carpeta ,  nombreTemp);
          console.log("uploadpath" , uploadpath)
          archivo.mv(uploadpath, (error) => {

              if(error){
                   reject(error);
              }

              resolve(nombreTemp)
          })
    });
    
}

module.exports = {
    TIPO_CARPETAS,
    subirArchivo
}