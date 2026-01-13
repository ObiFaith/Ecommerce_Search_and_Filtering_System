import PropTypes from "prop-types";

const Button = ({ name, handleClick, className = "" }) => (
  <button
    onClick={handleClick}
    className={`btn ${className}`}
    value={name !== "All Products" ? name.toLowerCase() : ""}
  >
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  className: PropTypes.string,
}

export default Button;
