import React from 'react';

export default function Productos(props) {
    const {Productos} = props;
    return (
        <div>
            <img className='' src= {Productos.imagen}></img>
            <h4>{Productos.nombre}</h4>
            <p>${Productos.precio}</p>
        </div>
    );
}


