import React from "react";
import { Link } from "react-router-dom";


export const Item = ({titulo,categoria,imagen,stock}) => {
    return (
        <Link to={'/product/${id}'}>
            <div className={"item_card ${categoria}-categoria"}>
            <span> Cat: {categoria}</span>
            <span>
                <img src={imagen} alt={titulo} className={"small-img"}/>
            </span>
            <span> {stock} </span>
        </div>
        </Link>

    );
};

