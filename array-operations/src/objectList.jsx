function ObjectList(){

    const obj = [
        {id: 1, name: "Apple", calories: 85},
        {id: 2, name: "orange", calories: 60},
        {id: 3, name: "banana", calories: 105},
        {id: 4, name: "Pineapple", calories: 450}
    ]
    obj.sort((a, b) => a.name.localeCompare(b.name))
    let AlpshaOrder = obj.map(item => <li key={item.id}>{item.name} : {item.calories}</li>)

    obj.sort((a, b) => b.name.localeCompare(a.name))
    let ReverseAlphaOrder = obj.map(item => <li key={item.id}>{item.name} : {item.calories}</li>)

    obj.sort((a,b) => a.calories - b.calories)
    let IncreaseCaloriOrder = obj.map(item => <li key={item.id}>{item.name} : {item.calories}</li>)

    obj.sort((a,b) => b.calories - a.calories)
    let DecreaseCaloriOrder = obj.map(item => <li key={item.id}>{item.name} : {item.calories}</li>)

    let low = obj.filter(item => item.calories < 100)
    let LowCalories = low.map(item => <li key={item.id}>{item.name} : {item.calories}</li>)

    let high = obj.filter(item => item.calories > 100)
    let HighCalories = high.map(item => <li key={item.id}>{item.name} : {item.calories}</li>)
    return(
        <>
            <ul>{AlpshaOrder}</ul>
            <ul>{ReverseAlphaOrder}</ul>
            <ul>{IncreaseCaloriOrder}</ul>
            <ul>{DecreaseCaloriOrder}</ul>
            <ul>{LowCalories}</ul>
            <ul>{HighCalories}</ul>
        </>
    )
}

export default ObjectList