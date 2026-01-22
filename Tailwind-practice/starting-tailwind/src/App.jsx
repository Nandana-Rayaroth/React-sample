

function App() {
  return (
    <>
      <div>
        <div className="flex item-center bg-slate-900 text-white p-4 justify-between">
          <h1 className="font-bold">Logo</h1>
          <nav className="flex gap-2 font-semibold">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </nav>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-6 gap-6 text-center font-semibold text-white text-2xl sm:text-lg">
          <div className="bg-slate-500 p-4 rounded hover:bg-slate-600 hover:scale-104 transition-all duration-500">
            Feature One
          </div>
          <div className="bg-slate-500 p-4 rounded hover:bg-slate-600 hover:scale-104 transition-all duration-500">
            Feature Two
          </div>
          <div className="bg-slate-500 p-4 rounded hover:bg-slate-600 hover:scale-104 transition-all duration-500">
            Feature Three
          </div>
          <div className="bg-slate-500 p-4 rounded hover:bg-slate-600 hover:scale-104 transition-all duration-500">
            Feature Four
          </div>
          <div className="bg-slate-500 p-4 rounded hover:bg-slate-600 hover:scale-104 transition-all duration-500">
            Feature Five
          </div>
          <div className="bg-slate-500 p-4 rounded hover:bg-slate-600 hover:scale-104 transition-all duration-500">
            Feature Six
          </div>
        </div>
      </div>
    </>
  );
}

export default App
