const fs = require('fs');
const path = require('path');

class Contenedor
{
    constructor(nombreArchivo)
    {
        this.nombreArchivo = nombreArchivo;
    }
    async validateExistFile()
    {
        try {
          await fs.promises.stat(this.nombreArchivo);
          return 1;
        } catch (err) {
          console.error(`${this.nombreArchivo} no se encuentra en la ruta especificada. Creando archivo...`);
          await fs.promises.writeFile(this.nombreArchivo, JSON.stringify([]));
          return 0;
        }
      }
      async save()
      {

      }
      async getById()
      {

      }
      async getAll()// por alguna razon me aparece este mensaje No hay ningún depurador disponible; no se puede enviar "variables".
      {
        try{
            const contenido = await fs.promises.readFile(this.nombreArchivo,'utf-8');
            return JSON.parse(contenido);
        }catch(err){
            console.log(err);
        }
      }
    async deleteById(del_Id)
    {

    }
    async deleteAll()
    {
        try{
            await fs.promises.writeFile(this.nombreArchivo, JSON.stringify([]));
        }catch(err){
            console.error(err);
        }
    }

}

const productos = new Contenedor('productos.json');
productos.validateExistFile();
console.log(productos.getAll());
productos.deleteAll();
