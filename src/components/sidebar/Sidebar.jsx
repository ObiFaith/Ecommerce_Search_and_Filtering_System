import Price from "./Price";
import Colors from "./Colors";
import Category from "./Category";

const Sidebar = ({ products, handleSidebar }) => {
  return (
    <section className="py-5 pl-3 xl:pl-8 fixed items-start top-0 lg:w-36 xl:w-56 shadow-md h-full hidden lg:flex flex-col select-none">
      <Category products={products} handleCategory={handleSidebar} />
      {/* <Price products={products} handlePrice={handleSidebar} /> */}
      <Colors products={products} handleColors={handleSidebar} />
    </section>
  );
};

export default Sidebar;
