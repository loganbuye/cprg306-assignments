import ItemList from "./item-list";

export default function Page(){
    return(
        <main className="bg-blue-300">
            <h1 className="text-3xl">Shopping List</h1>
            <ItemList />
        </main>
    );
}