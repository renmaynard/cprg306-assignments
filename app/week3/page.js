import ItemList from "./item-list";

export default function Page(){
    return(
    <main className="content-center">
    <h1 className="text-3xl font-bold ml-20 mt-6 ">Shopping List</h1>
    <ItemList />
    </main>
    );
}