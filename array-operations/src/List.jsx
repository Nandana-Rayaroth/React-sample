function List(){

    const fruits = [
        "apple", "orange", "banana", "coconut", "pineapple"
    ]
    const items = fruits.map(item => <li key={item}>{item}</li>)
    return(
        <ul>{items}</ul>
    )
}
export default List