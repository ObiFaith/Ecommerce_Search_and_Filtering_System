import Category from './Category';
import Price from './Price';
import Colors from './Colors';

const Sidebar = ({ handleSidebar }) => {
	return (
		<section className="py-5 pl-3 xl:pl-8 fixed items-start top-0 lg:w-36 xl:w-56 shadow-md h-full hidden lg:flex flex-col select-none">
			<Category handleCategory={handleSidebar} />
			<Price handlePrice={handleSidebar} />
			<Colors handleColors={handleSidebar} />
		</section>
	);
};

export default Sidebar;
