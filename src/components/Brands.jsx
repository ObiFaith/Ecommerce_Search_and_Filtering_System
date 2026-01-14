import { Button } from "..";
import { useState } from "react";
import PropTypes from "prop-types";

const Brands = ({ products, onSelect }) => {
  const [activeBtn, setActiveBtn] = useState("All Products");

  const handleClick = (e) => {
    setActiveBtn(e.target.innerText);
    return onSelect(e.target.value);
  };

  const companys = [
    ...new Set(
      products.map(
        (item) =>
          item.company[0].toUpperCase() + item.company.slice(1).toLowerCase()
      )
    ),
  ];

  return (
    <div className="max-container">
      <h2 className="font-sans text-2xl font-bold mb-3">Recommend</h2>
      <div className="flex gap-3">
        <Button
          name="All Products"
          onClick={handleClick}
          className={
            activeBtn === "All Products" ? "bg-slate-500 text-white" : ""
          }
        />
        {companys &&
          companys.map((company) => (
            <Button
              key={company}
              name={company}
              onClick={handleClick}
              className={activeBtn === company ? "bg-slate-500 text-white" : ""}
            />
          ))}
      </div>
    </div>
  );
};

Brands.propTypes = {
  products: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default Brands;
