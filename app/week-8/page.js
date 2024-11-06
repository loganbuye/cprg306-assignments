"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";
import { useState } from "react";

export default function Page() {

    const [items, setItems] = useState(itemsData);
    const [selectedItem, setSelectedItem] = useState("");


    const cleanItemName = (name) => {

    const emojiRemoved = name.replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|[\uD83C-\uDBFF][\uDC00-\uDFFF]|[\u2600-\u26FF])/g,
      ''
    );

    const cleaned = emojiRemoved.split(',')[0].trim();

    return cleaned;
    };      

    const handleItemSelect = (item) => {
        const cleanedName = cleanItemName(item.name);
        setSelectedItem(cleanedName);
    };

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

  return (
    <main className="bg-blue-200 p-3">
      <h1 className="text-3xl font-bold">Shopping List</h1>
      <div className="flex">
        <div className="w-1/2 p-3">
          <ItemList items={items} onItemSelect={handleItemSelect} />
          <NewItem onAddItem={handleAddItem} />
        </div>
        <div className="w-1/2 p-3">
          {selectedItem.trim() ? (
            <MealIdeas ingredient={selectedItem} />
          ) : (
            <p>Select an item to view meal ideas</p>
          )}
        </div>
      </div>
    </main>
  );
}
