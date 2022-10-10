const fs = require('fs');
const path = require('path');
const { stringify } = require('querystring');

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
      const data = await fs.promises.readFile(this.fileName, 'utf-8' );
      const arrayProducts = json.parse(data);
      return arrayProducts;
    }catch(err)
    {
      console.log('No se encontro ningun producto',err);
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
  async save(product)
  {
    const content = await fs.promises.readFile(this.fileName, 'utf-8' );
    const arrayProducts = JSON.parse(content);

    const newProduct ={
      title: product.title,
      price: product.price,
      thumbnail: product.thumbnail,
      ID: arrayProducts[arrayProducts.length-1].ID + 1
    }
    arrayProducts.push(newProduct);

    const data = JSON.stringify(arrayProducts, null, '\t');
    await fs.promises.writeFile(this.fileName,data);
    {
      console.log( `${newProduct.title} ha sido guardado correctamente!` );
    }
    }
    async getByID(idClave)
    {
      const content = await fs.promises.readFile( this.fileName, 'utf-8' );
      const arrayProducts = JSON.parse(content);

      const indice = arrayProducts.findIndex((unProducto) => unProducto.ID === idClave );
      if( indice<0 )
      {
        throw new Error('El producto no existe');
      }
      return arrayProducts[indice];
    }
    async deleteById(idClave)
    {
      const content = await fs.promises.readFile( this.fileName, 'utf-8' );
      const arrayProducts = JSON.parse(content);

      const indice = arrayProducts.findIndex((unProducto) => unProducto.ID === idClave );
      if( indice<0 )
      {
        return;
      }
      arrayProducts.splice(indice,1);
      console.log('Producto eliminado correctamnete');

      const data = JSON.stringify(arrayProducts, null, '\t');
      await fs.promises.writeFile(this.fileName,data);
    }
    
  }

const file = new Contenedor('productos.json');


//getAll: Por alguna razon me dice "json is not defined"
//console.log( file.getAll() );

//deleteAll
//file.deleteAll();

//save
const producto_1 ={
  title: "Liquid paper",
  price: 22,
  thumbnail: "https://www.distribuidoradales.com/wp-content/uploads/2020/10/PPM0003_Mesa-de-trabajo-1_Mesa-de-trabajo-1_Mesa-de-trabajo-1_Mesa-de-trabajo-1.jpg"
}
//file.save(producto_1);

//getByID: "PromiseState: 'pending'" y tambien vacia el .JSON :(
//const prod = file.getByID(2);
//console.log( prod );

//deleteByID
//file.deleteById(2);
