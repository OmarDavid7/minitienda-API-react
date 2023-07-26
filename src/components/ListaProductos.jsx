import React, { useEffect, useState } from "react";
import Paginacion from "./Paginacion";


export default function ListaProductos() {

  const [productos, setProductos] = useState([])
  const [productosPagina, setProductosPagina] = useState(6);
  const [paginaActual, setPaginaActual] = useState(1);
  const totalProductos  = productos.length;
  
  const ultimoIndice = paginaActual * productosPagina; 
  const primerIndice = ultimoIndice - productosPagina;

  const productList = async()=>{
    const data = await fetch('https://fakestoreapi.com/products');
    const datos = await data.json();
    console.log(datos);
    setProductos(datos);
  }

  useEffect(()=>{
    productList();
  },[])

  return (
    <>
    <h1 className="text-center py-5">Tienda Online</h1>
      <div className="container container-products">
        {
          productos.map(item=>(
            <div className="card-product" key={item.id}>
              <figure className="container-img">
                <img src={item.image} alt={item.title} />
              </figure>
              <div className="info-product">
                <h3>{item.title}</h3>
                <p className="price">${item.price}</p>
                <button>Añadir al carrito</button>
              </div>
            </div>
          )).slice(primerIndice,ultimoIndice)
        }
      </div>
      <Paginacion 
      productosPagina={productosPagina} 
      paginaActual={paginaActual} 
      setPaginaActual={setPaginaActual} 
      totalProductos={totalProductos}/>
    </>
  );
}
