import PropTypes from "prop-types";
import { ProductCard } from "../..";
import SkeletonCard from "./SkeletonCard";
import { getFilterValues } from "../../../utils";

const ProductList = ({ filters, products, isLoading }) => {
  const activeFilterValues = getFilterValues(filters);
  const message =
    activeFilterValues.length > 0
      ? `No products found for ${activeFilterValues.join(" ")}.`
      : "No products found.";

  return (
    <section className="max-container transition-all pt-12">
      {/* SkeletonCards */}
      {isLoading && (
        <div className="product__list">
          {Array.from({ length: 6 }).map((_, idx) => (
            <SkeletonCard key={idx} />
          ))}
        </div>
      )}
      {/* ProductCards */}
      {!isLoading && products.length > 0 ? (
        <div className="product__list">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      ) : (
        <div className="text-xl lg:text-2xl text-black/75">{message}</div>
      )}
    </section>
  );
};

ProductList.propTypes = {
  filters: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default ProductList;
