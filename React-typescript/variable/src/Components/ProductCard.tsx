
type laptop = {
    name : string,
    price : number
}
export default function ProductCard({name, price} : laptop) {
  return (
    <div className="p-4 bg-blue-900 text-white font-bold text-lg rounded-lg shadow-user">
      <h3>Product : {name}</h3>
      <h4>Price : {price}</h4>
    </div>
  );
}
