import React from 'react'

export default function Paginacion({productosPagina, paginaActual, setPaginaActual, totalProductos}) {

  const numeroPagina = [];
  console.log();

  for(let i=1; i <= Math.ceil(totalProductos/productosPagina); i++){
      numeroPagina.push(i)
  }

  const PaginaPrevia = ()=>{
    setPaginaActual(paginaActual - 1)
  }

  const PaginaSiguiente = ()=>{
    setPaginaActual(paginaActual + 1)
  }

  const onPaginaEspecifica = (i)=>{
    setPaginaActual(i)
  }

  return (
  <>
    <nav aria-label="Page navigation example">
  <ul className="pagination">
    <li className="page-item"><button className={`page-link ${paginaActual === 1 ? 'disabled' : ''}`} onClick={PaginaPrevia}>Anterior</button></li>

    {numeroPagina.map(numPage =>(
        <li className="page-item" key={numPage}>
          <a 
          className={`page-link ${numPage === paginaActual ? 'active' : '' }`}
           onClick={()=>onPaginaEspecifica(numPage)}>{numPage}</a></li>
    ))}
    <li className="page-item"><button className={`page-link ${paginaActual >= numeroPagina.length ? 'disabled' : ''}`} onClick={PaginaSiguiente}>Siguiente</button></li>
  </ul>
</nav>
  </>
  )
}
