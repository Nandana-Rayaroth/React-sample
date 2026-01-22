import ProductCard from "./Components/ProductCard";

function App() {
  return (
    <div className="flex flex-row gap-4 m-10">
      <ProductCard name="laptop" price={50000} />
      <ProductCard name="Monitor" price={22000}/>
    </div>
  );
}

export default App
