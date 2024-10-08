"use client"
import { useState } from "react";

export default function NewItem(){

    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        let currentQuantity = quantity;
        if(quantity < 20){
            setQuantity(currentQuantity + 1);
        }
    }

    const decrement = () => {
        let currentQuantity = quantity;
        if(quantity > 1){
            setQuantity(currentQuantity - 1);
        }
    }
    
    let buttonStyleIncrement = "bg-blue-400 hover:bg-blue-700 text-white rounded py-2 px-4 mt-5";
    let buttonStyleDecrement = "bg-blue-400 hover:bg-blue-700 text-white rounded py-2 px-4 mt-5";
    if(quantity === 1){
        buttonStyleDecrement = "bg-gray-400 text-white rounded py-2 px-4 mt-5";
    }
    if(quantity === 20){
        buttonStyleIncrement = "bg-gray-400 text-white rounded py-2 px-4 mt-5";
    }

    return(
        <div className="p-2 m-4 bg-white w-36">
            <div className="flex justify-between">
                <span className="text-black">{quantity}</span>
                <div className="flex">                
                    <button onClick={decrement} className={buttonStyleDecrement}>-</button>
                    <button onClick={increment} className={buttonStyleIncrement}>+</button>
                </div>
            </div>
            
        </div>
    )
}