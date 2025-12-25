function FruitProps(props){

    let items = props.fruits
    let list = items.map(item => <li key={item.id}>{item.name} : {item.calories}</li>)

    return(
        <>
            <ul>{list}</ul>
        </>
    )
}

export default  FruitProps