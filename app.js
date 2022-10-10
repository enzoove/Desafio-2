const fs = require('fs');
const path = require('path');

class Contenedor
{
  constructor(fileName)
  {
    this.fileName = fileName;
  }
  
  async getAll()
  {
    try
    {
      const content = await fs.promises.readFile(this.fileName,'utf-8');
      const products = JSON.parse(content);

      return products;
    }catch(err)
    {
      console.log('No se encontro ningun producto', err);
    }
  }
  async deleteAll()
  {
    try
    {
      const products = [];
      const data = JSON.stringify(products, null, '\t');
      await fs.promises.writeFile(this.fileName, data);
    }catch(err)
    {
      console.log(err);
    }
  }
}

const contenedor = new Contenedor('productos.json');

console.log( contenedor.getAll() );

//contenedor.deleteAll();
