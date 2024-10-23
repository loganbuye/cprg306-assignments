export default function Item({name, quantity, category}){

    function ItemList({ items }) {
        return (
          <div>
            {items.map((item) => (
              <Item key={item.id} id={item.id} name={item.name} category={item.category} />
            ))}
          </div>
        );
      }

    return(
        <div className="bg-blue-400">
            <ul>
                <div className="bg-blue-600, my-4">
                    <li className="text-2xl">{name}</li>
                    <li className="text-lg">{quantity}</li>
                    <li className="text-lg">{category}</li>
                </div>
            </ul>
        </div>
    );
}

