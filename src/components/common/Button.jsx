import PropTypes from "prop-types";

const Button = ({ name, onClick, className = "" }) => (
  <button
    onClick={onClick}
    className={`btn ${className}`}
    value={name !== "All Products" ? name.toLowerCase() : ""}
  >
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
}

export default Button;
