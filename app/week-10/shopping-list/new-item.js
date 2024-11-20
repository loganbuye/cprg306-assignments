"use client"
import { useState } from "react";

export default function NewItem({ onAddItem }){

    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");

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

    const handleNameChange = (event) => setName(event.target.value);
    const handleCategoryChange = (event) => setCategory(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.dir(event);
        
        let item = {
            name: name,
            quantity: quantity,
            category: category
        }

        onAddItem(item);

        setName("");
        setCategory("produce");
        setQuantity(1);
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
        <div className="flex justify-start">
            <div>
                <h1 className="font-bold text-2xl flex justify-center">Add a New Item</h1>
                <form onSubmit={handleSubmit} className="p-4">
                    <div className="flex justify-center mb-4">
                        <label className="px-2 font-bold">Name: </label>
                        <input 
                        type="text" 
                        value={name} 
                        onChange={handleNameChange}
                        placeholder="Cheese"
                        className="px-2 py-1 rounded border-2"
                        />
                    </div>
                    <div className="flex justify-center m-4">
                            <div className="flex items-center space-x-2">
                                <button type="button" onClick={decrement} className={buttonStyleDecrement}>-</button>
                                <span className="text-black align-middle font-bold">{quantity}</span>
                                <button type="button" onClick={increment} className={buttonStyleIncrement}>+</button>
                            </div>
                    </div>
                    <div className="flex justify-center m-4">
                        <label className="px-2 font-bold">Category: </label>
                        <select 
                        value={category} 
                        onChange={handleCategoryChange}
                        className="px-2 py-1 rounded border-2">
                            <option value="Produce">Produce</option>
                            <option value="Dairy">Dairy</option>
                            <option value="Bakery">Bakery</option>
                            <option value="Meat">Meat</option>
                            <option value="Frozen Food">Frozen Food</option>
                            <option value="Canned">Canned Goods</option>
                            <option value="Dry goods">Dry Goods</option>
                            <option value="Beverages">Beverages</option>
                            <option value="Snacks">Snacks</option>
                            <option value="Household">Household</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="flex justify-center">
                        <button 
                        onClick={handleSubmit}
                        className="bg-blue-400 hover:bg-blue-700 active:bg-blue-800 text-white rounded px-3 py-2"
                        >Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}