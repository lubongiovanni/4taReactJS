import React, {useState, useEffect} from "react";
import { ItemDetail } from "./ItemDetail";
import { data } from "../data/data";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState ({});
    const {itemId} = useParams();

    //Promesa
    useEffect(()=> {
        const getItems = new Promise ((resolve) => {
            setTimeout( () => {
                const myData = data.find( (item) =>
                    item.id === itemId)
                resolve(myData);
            }, 2000);
            
        });
        getItems.then((res) => {
            setProduct(res);
        });
    }, [itemId]);

    return <ItemDetail {...product}/>;
};