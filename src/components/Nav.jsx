import { heart, cart, user } from "..";
import Icon from "../components/Icon";

const Nav = ({ text, handleText }) => {
  return (
    <header className="max-container mb-8">
      <nav className="flex items-center py-5 border-b-2 border-[#f3f3f3] justify-between">
        <div>
          <input
            onChange={handleText}
            value={text}
            type="text"
            className="outline-none focus:shadow-md placeholder:font-normal text-gray-600 font-medium px-5 py-3 rounded-md border-0 bg-[#f7f6f6] relative sm:min-w-96"
            placeholder="Enter product"
          />
        </div>
        <div className="flex gap-4">
          <Icon iconURL={heart} />
          <Icon iconURL={cart} />
          <Icon iconURL={user} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
