import { filledStar, shoppingBag } from '..';
import Icon from '../components/Icon';

const Product = ({ img, title, reviews, prevPrice, newPrice }) => {
	return (
		<div className="p-8 shadow-sm hover:shadow-md hover:shadow-slate-300 flex flex-col justify-between max-w-80 border rounded-md border-[#ededed] cursor-pointer">
			<img
				className="mx-auto lg:max-w-52 mb-6 max-h-40"
				src={img}
				alt={title}
			/>
			<div className="*:my-3">
				<h3 className="font-medium">{title}</h3>
				<div className="flex justify-between">
					<div className="flex gap-1">
						<Icon iconURL={filledStar} />
						<Icon iconURL={filledStar} />
						<Icon iconURL={filledStar} />
					</div>
					<span className="text-sm">{reviews}</span>
				</div>
				<div className="flex items-center justify-between">
					<div className="price">
						<del>{prevPrice}</del> {newPrice}
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
