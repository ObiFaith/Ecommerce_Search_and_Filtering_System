import PropTypes from "prop-types";
import { getPriceRanges } from "../../../utils";

const Price = ({ products, handlePrice }) => {
  let priceRange = [];
  const prices = [
    ...new Set(products.map(item => item.price - (item.discountPrice || 0))),
  ].sort((a, b) => a - b);

  priceRange = getPriceRanges(prices[0], prices[prices.length - 1]);

  return (
    <div>
      <h2 className="text-base xl:text-lg font-medium mb-3">Price</h2>
      {!priceRange.includes(NaN) &&
        priceRange.map((price, index) => (
          <div
            key={index}
            className="relative border-2 border-red-500 block pl-9 mb-3 *:cursor-pointer"
          >
            <input
              onChange={handlePrice}
              type="radio"
              name="price"
              value={price}
              className="absolute w-5 h-5 left-0 opacity-0 peer z-10"
            />
            <span className="custom-radio"></span>
            <span>
              {priceRange[index + 1]
                ? `$${price} - $${priceRange[index + 1]}`
                : `Over $${price}`}
            </span>
          </div>
        ))}
    </div>
  );
};

Price.propTypes = {
  products: PropTypes.array.isRequired,
  handlePrice: PropTypes.func.isRequired,
};

export default Price;
