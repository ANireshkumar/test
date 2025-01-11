import PropTypes from "prop-types";

export const MultiComponent = (props) => {
  return (
    <div>
        <p>This is the  value : {props.value}</p>
    </div>
  )
}

MultiComponent.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]).isRequired,
};
