import propTypes from "prop-types";

export const ChildComponent = (props) => {
  return (
    <div>{props.children}</div>
  )
};

export default ChildComponent; 

ChildComponent.propTypes = {
    children: propTypes.array,
};