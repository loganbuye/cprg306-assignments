export default function Item({name, quantity, category}){


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

