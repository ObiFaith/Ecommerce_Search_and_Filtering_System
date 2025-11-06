import RadioBox from "../RadioBox";
import { useProduct } from "../../context/product";

const Color = ({ handleColor }) => {
  const { products } = useProduct();

  const colors = [
    ...new Set(
      products.map(
        (item) =>
          item.color[0].toUpperCase() + item.color.slice(1).toLowerCase()
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
            color={color.toLowerCase()}
          />
        ))}
    </div>
  );
};

export default Color;
