import { getPriceRanges } from "../../../utils";
import { useProduct } from "../../context/product";

const Price = ({ handlePrice }) => {
  let priceRanges = [];
  const { products } = useProduct();

  const prices = [
    ...new Set(products.map(item => item.price - (item.discountPrice || 0))),
  ].sort((a, b) => a - b);

  priceRanges = getPriceRanges(prices[0], prices[prices.length - 1]);

  return (
    <div>
      <h2 className="text-base xl:text-lg font-medium mb-3">Price</h2>
      {priceRanges &&
        priceRanges.map((newPrice, index) => (
          <div
            key={index}
            className="relative block pl-9 mb-3 *:cursor-pointer"
          >
            <input
              onChange={handlePrice}
              type="radio"
              name="price"
              value={(() => {
                const price = newPrice;
                return price;
              })()}
              className="absolute w-5 h-5 left-0 opacity-0 peer z-10"
            />
            <span className="custom-radio"></span>
            <span>
              {priceRanges[index + 1]
                ? `$${newPrice} - $${priceRanges[index + 1]}`
                : `Over $${newPrice}`}
            </span>
          </div>
        ))}
    </div>
  );
};

export default Price;
