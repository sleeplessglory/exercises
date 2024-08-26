function List(){
    const fruits=["apple", "orange", "banana", "coconut", "pineapple"];
    //fruits.sort(); we can presort them before rendering
    const listItems = fruits.map(fruit => <li>{fruit}</li>);
    
    return(<ul>{listItems}</ul>); //rendering lists
}
export default List;