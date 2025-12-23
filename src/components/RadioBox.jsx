const RadioBox = ({ text, name, handleValue }) => {
  return (
    <div className="relative block pl-9 mb-3 *:cursor-pointer">
      <input
        type="radio"
        value={text !== "All" ? text.toLowerCase() : ""}
        onChange={handleValue}
        name={name}
        className="absolute w-5 h-5 left-0 opacity-0 peer z-10"
      />
      <span className="custom-radio"></span>
      {text}
    </div>
  );
};

export default RadioBox;
