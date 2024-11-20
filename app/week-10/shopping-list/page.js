"use client";

import { getItems, addItem } from "../_services/shopping-list-service";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useUserAuth } from "../_utils/auth-context";

export default function Page() {

  const [items, setItems] = useState("");
  const [selectedItem, setSelectedItem] = useState("");

  const {user} = useUserAuth();

  const cleanItemName = (name) => {

  const emojiRemoved = name.replace(
    /([\u2700-\u27BF]|[\uE000-\uF8FF]|[\uD83C-\uDBFF][\uDC00-\uDFFF]|[\u2600-\u26FF])/g,
    ''
  );

  const cleaned = emojiRemoved.split(',')[0].trim();

  return cleaned;
  };      

  async function loadItems() {
    if (user && user.uid) {
      const userItems = await getItems(user.uid);
      setItems(userItems);
    }
  }

  const handleItemSelect = (item) => {
      const cleanedName = cleanItemName(item.name);
      setSelectedItem(cleanedName);
  };

  const handleAddItem = async (newItem) => {
    if (user && user.uid) {
      const itemId = await addItem(user.uid, newItem);
      const itemWithId = { ...newItem, id: itemId };
      setItems([...items, itemWithId]);
    }
  };

  useEffect(() => {
    loadItems();
  }, [user]);

  let linkStyle = "underline text-cyan-800 hover:text-cyan-600 flex justify-center";

  return (
    <main className="bg-blue-200 p-3">
      <h1 className="text-3xl font-bold flex justify-center p-2">Shopping List</h1>
      { user ? (
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
      ) : (
        <div>
          <p className="flex justify-center p-2">You must be logged in to view this page.</p>
          <Link href="/week-9/" className={linkStyle}>Click here to return to the landing page.</Link>
        </div>
      )}
    </main>
  );
}
