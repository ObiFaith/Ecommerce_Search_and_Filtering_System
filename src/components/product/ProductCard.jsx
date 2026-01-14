import { Icon } from "../..";
import PropTypes from "prop-types";
import { filledStar, shoppingBag } from "../..";

const ProductCard = ({ imageUrl, name, numReviews, price, discountPrice }) => {
  return (
    <div className="p-8 px-4 md:px-6 shadow-sm hover:shadow-md hover:shadow-slate-300 flex flex-col justify-between border rounded-md border-[#ededed] cursor-pointer">
      <img className="mx-auto mb-6 max-h-40" src={imageUrl} alt={name} />
      <div className="*:my-3">
        <h3 className="lg:text-lg">{name}</h3>
        <div className="flex items-center justify-between">
          <div className="price flex gap-1">
            {discountPrice && <span className="font-medium">₦{price - discountPrice}</span>}
            <span className={discountPrice ? "line-through text-gray-500" : "font-medium"}>
              ₦{price}
            </span>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-1">
            <Icon iconUrl={filledStar} />
            <Icon iconUrl={filledStar} />
            <Icon iconUrl={filledStar} />
          </div>
          <span className="text-sm">({numReviews} reviews)</span>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  numReviews: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  discountPrice: PropTypes.number.isRequired,
};

export default ProductCard;
