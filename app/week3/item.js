export default function Item({name,quantity,category}){
    return(
        <div className="text-center border border-white bg-green-950 w-full max-w-xs m-6 p-4">
        <h3 className="font-xl font-bold">{name}</h3>
        <p>Buy {quantity} in {category}</p>
        </div>
    );
}