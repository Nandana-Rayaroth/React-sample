function UserGreeting(props){
    return( 
            props.isLogged ? 
            <h2 className="user-greet">Welcome {props.userName}</h2> : 
            <h2 className="loginPrompt">Please Loggin</h2>
        )
}
export default UserGreeting