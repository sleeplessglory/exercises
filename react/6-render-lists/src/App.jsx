import List from './List.jsx';
import List2 from './List2.jsx';
import Exercise from './Exercise.jsx';
function App() {
    const fruits=[{id: 1, name: "apple", calories: 95}, 
                  {id: 2, name: "orange", calories: 45}, 
                  {id: 3, name: "banana", calories: 105}, 
                  {id: 4, name: "coconut", calories: 159},
                  {id: 5, name: "pineapple", calories: 37}];
    const vegetables=[{id: 6, name: "potatoes", calories: 110}, 
                      {id: 7, name: "celery", calories: 15}, 
                      {id: 8, name: "carrots", calories: 25}, 
                      {id: 9, name: "corn", calories: 63},
                      {id: 10, name: "broccoli", calories: 50}];

    return(
        <>
            <List />
            <br></br>
            {fruits.length > 0 ? <List2 items={fruits} category="Fruits"></List2> : null}
            {/*{fruits.length > 0 && <List2 items={fruits} category="Fruits" />} is a shorter way (short circuiting)*/}
            {vegetables.length > 0 ? <List2 items={vegetables} category="Vegetables" /> : null}
            <Exercise items={fruits} category="Any" />
        </>
    );
}

export default App;