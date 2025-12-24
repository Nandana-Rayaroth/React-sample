import Student from "./Student"
import Default from "./defaultProps"
import UserGreeting from "./UserComponent"
function App() {

  return(
    <>
      {/* <Student name="Spongebob" age={30} isStudent={true}/>
      <Student name="Patrick" age={28} isStudent={false}/>
      <Default/>
      <Default name="Caption" age={34} isEmployee={true}/> */}
      <UserGreeting isLogged={true}/>
    </>
  )
}

export default App
