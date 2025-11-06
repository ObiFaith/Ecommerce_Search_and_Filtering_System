import { useState } from "react";
import Button from "../components/Button";
import { useProduct } from "../context/product";

const Recommend = ({ handleRecommmend }) => {
  const { products } = useProduct();
  const [activeBtn, setActiveBtn] = useState("All Products");

  const handleClick = (e) => {
    const company = e.target.innerText;
    setActiveBtn(company);
    return handleRecommmend(e);
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
          handleClick={handleClick}
          className={
            activeBtn === "All Products" ? "bg-slate-500 text-white" : ""
          }
        />
        {companys &&
          companys.map((company) => (
            <Button
              key={company}
              name={company}
              handleClick={handleClick}
              className={activeBtn === company ? "bg-slate-500 text-white" : ""}
            />
          ))}
      </div>
    </div>
  );
};

export default Recommend;
