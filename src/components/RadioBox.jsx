const RadioBox = ({ text, name, handleValue, color }) => {
  return (
    <div className="relative block pl-9 mb-3 *:cursor-pointer">
      <input
        type="radio"
        value={text !== "All" ? text.toLowerCase() : ""}
        onChange={handleValue}
        name={name}
        className="absolute w-full h-5 left-0 opacity-0 peer z-10"
      />
      <span
        className={`custom-radio ${
          color && color !== "black"
            ? `bg-${color}-600 peer-checked:bg-${color}-500`
            : `bg-${color} peer-checked:bg-${color}`
        } ${
          color && color == "white"
            ? "shadow-sm shadow-gray-300 bg-white peer-checked:bg-white after:bg-black"
            : ""
        }`}
      ></span>
      {text}
    </div>
  );
};

export default RadioBox;
