export default function Item({name,quantity,category,onSelect}){
    const handleSelect = () =>{
        onSelect(name);
    }
    return(
        <div className="rounded text-center border border-white bg-blue-950 w-full max-w-xs m-6 p-4">
        <li onClick={handleSelect}>
            <h3 className="font-xl font-bold">{name}</h3>
            <p>Buy {quantity} in {category}</p>
        </li>
        </div>
    );
}