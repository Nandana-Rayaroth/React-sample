import AddTask from "./Components/AddTask";
import TodoContainer from "./Todo/TodoContainer";
function App() {


  return (
    <>
      <div className="overLay">
        <h1 className="todotitle">TODO APP</h1>
        <TodoContainer />
      </div>
    </>
  );
}

export default App
