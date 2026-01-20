import MovieComponent from "./Components.jsx/MovieComponent"
import StarRating from "./Components.jsx/StarRating"



function App() {
  return(
    <>
      {/* <MovieComponent /> */}
      <StarRating maxRating={5} size={24} color="red" messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]} defaultRating={3} />
    </>
  )
}

export default App
