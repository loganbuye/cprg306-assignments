"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";


export default function Page(){

    const [items, setItems] = useState(itemsData);
    
    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    return(
        <main className="bg-blue-200 p-3">
            <h1 className="text-3xl font-bold">Shopping List</h1>
            <ItemList items={items}/>
            <NewItem onAddItem={handleAddItem}/>
        </main>
    );
}