function List2(props) {
    /*
    const fruits=[{id: 1, name: "apple", calories: 95}, 
                  {id: 2, name: "orange", calories: 45}, 
                  {id: 3, name: "banana", calories: 105}, 
                  {id: 4, name: "coconut", calories: 159},
                  {id: 5, name: "pineapple", calories: 37}];
    
    fruits.sort((a, b) => a.name.localeCompare(b.name)); //sort string properties
    fruits.sort((a, b) => a.calories - b.calories); //sort number properties
    */
    const category = props.category;
    const itemList = props.items;
    let listItems = itemList.map(item => <li key={item.id}>
                                            {item.name}: &nbsp; {/*"&nbsp" is for space*/}
                                         <b>{item.calories}</b></li>);
    /*
    let listItems = fruits.map(fruit => <li key={fruit.id}>
                                            {fruit.name}: &nbsp;
                                            <b>{fruit.calories}</b></li>);
    */
    //Let's add an "id" too, since the names can be the same in the database
    //Warning in the console demanding for each list child to have their own key prop. (key={fruit.id})
    /* example with filtering by calories
    const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    listItems = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>
        {lowCalFruit.name}: &nbsp;
     <b>{lowCalFruit.calories}</b></li>);
    */
    return(
    <>
        <h3>{category}</h3>
        <ol>{listItems}</ol>
    </>
    );
}
export default List2