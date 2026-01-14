const SkeletonCard = () => (
  <div className="product__card animate-pulse">
    <div className="h-36 bg-gray-200 mb-2 rounded"></div> {/* image */}
    <div className="h-4 bg-gray-200 mb-1 rounded w-3/4"></div> {/* title */}
    <div className="h-4 bg-gray-200 rounded w-1/2"></div> {/* price */}
  </div>
);

export default SkeletonCard;
