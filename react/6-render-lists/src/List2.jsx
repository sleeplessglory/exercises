import PropTypes from 'prop-types';
function List2(props) {
    /*Moved the array to the App.jsx and made it reusable
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
    let listItems = itemList.map(item => <li key={item.id}> {item.name}: &nbsp; {/*"&nbsp" is for space*/}
                                                         <b>{item.calories}</b></li>);
    /*
    let listItems = fruits.map(fruit => <li key={fruit.id}> {fruit.name}: &nbsp;
                                                         <b>{fruit.calories}</b></li>);
    */
    //Let's add an "id" too, since the names can be the same in the database
    //Warning in the console demanding for each list child to have their own key prop. (key={fruit.id} or key={index} (if an array))
    /* example with filtering by calories
    const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    listItems = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>
        {lowCalFruit.name}: &nbsp;
     <b>{lowCalFruit.calories}</b></li>);
    */ 
    return(
    <>
        <h3 className="list-category">{category}</h3>
        <ol className="list-items">{listItems}</ol>
    </>
    );
}
List2.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, //we have an array of objects
                                              name: PropTypes.string, //each property type is specified
                                              calories: PropTypes.number}))
}
List2.defaultProps = { //remember to use defaultProps and propTypes as a back-up for bugs
    category: "category",
    items: [] //at least the category will be displayed, if array's absent
}
export default List2;