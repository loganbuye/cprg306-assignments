"use client";

import { useState } from 'react';
import Item from './item';
import itemsData from './items.json';

export default function ItemList() {

  const [sortBy, setSortBy] = useState("name");


  const sortItems = [...itemsData].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  let buttonStyleName = "bg-orange-400  text-white rounded py-2 px-4 mt-5 mr-5";
  let buttonStyleCategory = "bg-orange-400  text-white rounded py-2 px-4 mt-5 ml-5";

  if (sortBy === "category") {
    buttonStyleName = "bg-orange-700 text-white rounded py-2 px-4 mt-5 mr-5";
  }
  if (sortBy === "name") {
    buttonStyleCategory = "bg-orange-700 text-white rounded py-2 px-4 mt-5 ml-5";
  }

  return (
    <div>
      <div>
        <button onClick={() => setSortBy("name")} className={buttonStyleName}>Sort By Name</button>
        <button onClick={() => setSortBy("category")} className={buttonStyleCategory}>Sort By Category</button>
      </div>
      <ul>
        {sortItems.map((item) => (
          <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
        ))}
      </ul>
    </div>
  );
}


