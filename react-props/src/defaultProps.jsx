function Default({name="Unknown Employee", age=18, isEmployee = false}){

    return (
      <div className="studentCard">
        <p>Name : {name}</p>
        <p>Age : {age}</p>
        <p>Student : {isEmployee ? "Yes" : "No"}</p>
      </div>
    );

}
export default Default