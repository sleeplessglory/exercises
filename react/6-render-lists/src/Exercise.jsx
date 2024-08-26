import PropTypes from 'prop-types';
function Exercise(props){
    const category = props.category;
    const array = props.items;

    const listItems = array.map(item => <li key={item.id}> {item.name}: 
                                                           {item.calories}</li>);

    return(
        <>
            <h4>{category}</h4>
            <ul>{listItems}</ul>
        </>
    );
}
Exercise.propTypes = {
    category: PropTypes.string,
    array: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                               name: PropTypes.string,
                                               calories: PropTypes.number}))
}
Exercise.defaultProps = {
    category: "category",
    array: []
}
export default Exercise;