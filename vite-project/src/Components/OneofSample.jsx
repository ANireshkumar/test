
import PropTypes from "prop-types";
export const OneofSample = (props) => {
    const {color} = props;
  return (
    <div style = {{ backgroundColor: color, padding: "20px" , color:"white", fontSize:"20px"}}><p>This component has a background colour of {color}</p></div>
  );
};

OneofSample.propTypes = {
    color: PropTypes.oneOf(["red","green","blue"]).isRequired,
};