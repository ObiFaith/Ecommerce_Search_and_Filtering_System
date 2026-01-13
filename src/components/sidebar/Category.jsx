import { RadioBox } from "../..";
import PropTypes from "prop-types";

const Category = ({ products, handleCategory }) => {
  const categories = [
    ...new Set(
      products.map(
        item =>
          item.category[0].toUpperCase() + item.category.slice(1).toLowerCase()
      )
    ),
  ];

  return (
    <div>
      <h2 className="text-base xl:text-lg font-medium mb-3">Categories</h2>
      <RadioBox name="category" handleValue={handleCategory} text="All" />
      {categories &&
        categories.map((category, index) => (
          <RadioBox
            name="category"
            handleValue={handleCategory}
            text={category}
            key={index}
          />
        ))}
    </div>
  );
};

Category.propTypes = {
  products: PropTypes.array.isRequired,
  handleCategory: PropTypes.func.isRequired,
};

export default Category;
