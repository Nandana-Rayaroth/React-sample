import Main from "./Components/Main";
import NavBar from "./Components/NavBar";


function App() {
  return (
    <div className=" bg-[url('./assets/home-banner-background.png')] h-screen bg-no-repeat bg-right bg-contain ">
      <NavBar />
      <Main />
    </div>
  );
}

export default App
