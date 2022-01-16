import React, { useEffect, useState } from "react";
import {data} from "../data/data";
import {ItemList} from "./ItemList";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export const ItemListContainer = ({getting}) => {

    //Estado para simular que lo traemos desde una api --> Array de Objetos
    //Y se va a poder usar por varios usuarios al mismo tiempo
    const [items, setItems] = useState([]);
    const {catId} = useParams();

    //Promesa
    useEffect(()=> {
        const getItems = new Promise ((resolve) => {
            setTimeout( () => {
                const myData = catId 
                    ? data.filter( (item) =>
                    item.categoria === catId) : data
                resolve(myData);
            }, 2000);
            
        });
        getItems.then((res) => {
            setItems(res);
        });
    }, [catId]);
    //Solo se renderiza si hay cambio en item con [item]

    return (
        <>
            <ItemList items={items}/>
        </>
    );
}
