export default function Item({name, quantity, category, onSelect}){


    return(
        <div className="bg-blue-400">
            <div className="bg-blue-600, my-4" onClick={onSelect}>
                <ul>
                    <li className="text-2xl">{name}</li>
                    <li className="text-lg">{quantity}</li>
                    <li className="text-lg">{category}</li>
                </ul>
            </div>
        </div>
    );
}

