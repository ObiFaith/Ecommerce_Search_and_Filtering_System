import { filledStar, shoppingBag } from "..";
import Icon from "../components/Icon";

const Product = ({ imageUrl, name, numReviews, price, discountPrice }) => {
  return (
    <div className="p-8 px-4 md:px-6 shadow-sm hover:shadow-md hover:shadow-slate-300 flex flex-col justify-between border rounded-md border-[#ededed] cursor-pointer">
      <img className="mx-auto mb-6 max-h-40" src={imageUrl} alt={name} />
      <div className="*:my-3">
        <h3 className="font-medium lg:text-lg">{name}</h3>
        <div className="flex justify-between">
          <div className="flex gap-1">
            <Icon iconURL={filledStar} />
            <Icon iconURL={filledStar} />
            <Icon iconURL={filledStar} />
          </div>
          <span className="text-sm">({numReviews} reviews)</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="price flex gap-1 font-medium">
            <span className={discountPrice ? "line-through" : ""}>
              ₦{price}
            </span>
            {discountPrice && <span>₦{price - discountPrice}</span>}
          </div>
          <div>
            <Icon iconURL={shoppingBag} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
