import { RadioBox } from "../..";
import PropTypes from "prop-types";
import { capitalise } from "../../../utils";


const Color = ({ products, onSelect }) => {
  const colors = [...new Set(products.map((item) => capitalise(item.color)))];

  return (
    <div>
      <h2 className="text-base xl:text-lg font-medium mb-3">Colors</h2>
      <RadioBox name="color" onChange={onSelect} text="All" />
      {colors &&
        colors.map((color, index) => (
          <RadioBox key={index} name="color" text={color} onChange={onSelect} />
        ))}
    </div>
  );
};

Color.propTypes = {
  products: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default Color;
