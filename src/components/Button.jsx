const Button = ({ name, handleClick, className = "" }) => (
  <button
    onClick={handleClick}
    className={`btn ${className}`}
    value={name !== "All Products" ? name.toLowerCase() : ""}
  >
    {name}
  </button>
);

export default Button;
