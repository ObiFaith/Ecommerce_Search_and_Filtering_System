import { RadioBox } from "../..";
import PropTypes from "prop-types";
import { capitalise } from "../../../utils";


const Category = ({ products, onSelect }) => {
  const categories = [...new Set(products.map((item) => capitalise(item.category)))];

  return (
    <div>
      <h2 className="text-base xl:text-lg font-medium mb-3">Categories</h2>
      <RadioBox name="category" onChange={onSelect} text="All" />
      {categories &&
        categories.map((category, index) => (
          <RadioBox
            name="category"
            onChange={onSelect}
            text={category}
            key={index}
          />
        ))}
    </div>
  );
};

Category.propTypes = {
  products: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default Category;
