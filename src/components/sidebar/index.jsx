import PropTypes from "prop-types";
import { Category, Color, Price } from "../..";

const Sidebar = ({ products, onFilterChange }) => {
  return (
    <section className="pl-3 transition-all justify-center xl:pl-8 fixed items-start top-0 lg:w-40 xl:w-56 shadow-md h-full hidden lg:flex gap-4 flex-col select-none">
      <Category
        products={products}
        onSelect={(value) => onFilterChange("category", value)}
      />
      <Price
        products={products}
        onSelect={(value) => onFilterChange("price", value)}
      />
      <Color
        products={products}
        onSelect={(value) => onFilterChange("color", value)}
      />
    </section>
  );
};

Sidebar.propTypes = {
  products: PropTypes.array.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Sidebar;
