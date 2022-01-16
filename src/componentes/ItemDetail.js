import React from "react";

export const ItemDetail = ({
    id,
    titulo,
    categoria,
    imagen,
    stock,
}) => {
    return (
        <div className="detail-row">
            <img src={imagen} alt={'${id}-${titulo}'} className="flex-col"/>
            <section className="flex-col">
                <h1>{titulo}</h1>
                <h2>{stock}</h2>
            </section>
        </div>
    )
}