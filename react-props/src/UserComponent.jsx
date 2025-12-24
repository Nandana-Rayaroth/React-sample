function UserGreeting(props){

    if(props.isLogged){
        return(
            <>
                <h2>Suscessfully Logged</h2>
            </>
        )
    }
    else{
        return(
            <>
                <h2>Please log in to continue</h2>
            </>
        )
    }
}
export default UserGreeting