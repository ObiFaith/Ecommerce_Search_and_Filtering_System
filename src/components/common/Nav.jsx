import PropTypes from "prop-types";
import { cart, heart, Icon, user } from "../..";

const Nav = ({ value, onChange }) => {
  return (
    <header className="max-container mb-8">
      <nav className="flex items-center py-5 border-b-2 border-[#f3f3f3] justify-between">
        <div>
          <input
            onChange={(e) => onChange(e.target.value)}
            value={value}
            type="text"
            className="outline-none focus:shadow-md placeholder:font-normal text-gray-600 font-medium px-5 py-3 rounded-md border-0 bg-[#f7f6f6] relative sm:min-w-96"
            placeholder="Enter product"
          />
        </div>
        <div className="flex gap-4">
          <Icon iconUrl={heart} />
          <Icon iconUrl={cart} />
          <Icon iconUrl={user} />
        </div>
      </nav>
    </header>
  );
};

Nav.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Nav;
