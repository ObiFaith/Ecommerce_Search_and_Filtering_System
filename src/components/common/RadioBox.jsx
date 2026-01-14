import PropTypes from "prop-types";

const RadioBox = ({ text, name, onChange }) => {
  return (
    <div className="relative block pl-9 mb-3 *:cursor-pointer">
      <input
        type="radio"
        value={text !== "All" ? text.toLowerCase() : ""}
        onChange={(e) => onChange(e.target.value)}
        name={name}
        className="absolute w-5 h-5 left-0 opacity-0 peer z-10"
      />
      <span className="custom-radio"></span>
      {text}
    </div>
  );
};

RadioBox.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RadioBox;
