import List from "./List"
import ObjectList from "./objectList";
import FruitProps from "./FruitProps";
function App() {
  const obj = [
    { id: 1, name: "Apple", calories: 85 },
    { id: 2, name: "orange", calories: 60 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "Pineapple", calories: 450 },
    { id: 5, name: "Coconut", calories: 159}
  ];
  return (
    <>
      <List />
      <ObjectList />
      <FruitProps fruits={obj} />
    </>
  );
}

export default App
