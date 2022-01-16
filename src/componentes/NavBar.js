import React from 'react';
import { Link, NavLink } from 'react-router-dom'; //Para que no se refresque la página

export const NavBar = () => {
    const categorias = [
        {
            id: 1,
            direccion: "/",
            texto: "Todos los cuadros",
        },
        {
            id: 2,
            direccion: "/categoria/A",
            texto: "Abstractos",
        },
        {
            id: 3,
            direccion: "/categoria/B",
            texto: "Figurativos",
        },
        {
            id: 3,
            direccion: "/categoria/C",
            texto: "Retratos",
        }
    ];

// Se utiliza Link c/ to en vez de a y href
// La diferencia con NavLink es que se le puede poner una categoría para que aparezca marcado, a través de CSS cuando se está en esta vista
    return (
       <section>
           {categorias.map((cat) =>{
               return (
                   <div className='links' key={cat.id}>
                       <NavLink to={cat.direccion} exact activeClassName={'active'}>{cat.texto}</NavLink> 
                   </div>
               );
           })}
       </section>
    );
};
