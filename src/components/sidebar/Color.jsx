import { RadioBox } from "../..";
import PropTypes from "prop-types";

const Color = ({ products, handleColor }) => {
  const colors = [
    ...new Set(
      products.map(
        item => item.color[0].toUpperCase() + item.color.slice(1).toLowerCase()
      )
    ),
  ];

  return (
    <div>
      <h2 className="text-base xl:text-lg font-medium mb-3">Colors</h2>
      <RadioBox name="color" handleValue={handleColor} text="All" />
      {colors &&
        colors.map((color, index) => (
          <RadioBox
            key={index}
            name="color"
            text={color}
            handleValue={handleColor}
          />
        ))}
    </div>
  );
};

Color.propTypes = {
  products: PropTypes.array.isRequired,
  handleColor: PropTypes.func.isRequired,
};

export default Color;
