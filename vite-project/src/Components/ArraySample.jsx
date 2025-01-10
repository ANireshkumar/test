
import PropTypes from "prop-types";
import propType from "prop-types";


export const ArraySample = (props) => {
  const {items} = props;
    return (
    <div><h1>Items List</h1>
    <ul>
{items.map((items) => (<li key= {items.id}>{items.name}</li>))}
        </ul>
        </div>
  )
}


ArraySample.protoTypes = {
    items:PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    })).isRequired,
};