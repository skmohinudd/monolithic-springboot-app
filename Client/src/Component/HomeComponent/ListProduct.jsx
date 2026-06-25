import React, { useEffect, useState } from "react";
import { ProductCard } from "../ShopComponent/ProductCard";
import axiosFetch from "../../Helper/Axios";

export const ListProduct = () => {
  const [data, setData] = useState([]);

  const fatchData = async () => {
    try {
      const response = await axiosFetch({
        url: "product/",
        method: "GET",
      });

      console.log("Product API response:", response.data);

      if (Array.isArray(response.data)) {
        setData(response.data);
      } else {
        setData([]);
      }
    } catch (error) {
      console.error("Product API failed:", error);
      setData([]);
    }
  };

  useEffect(() => {
    fatchData();
  }, []);

  return (
    <>
      <section id="products" className="section product">
        <div className="container">
          <p className="section-subtitle"> -- Organic Products --</p>
          <h2 className="h2 section-title">All Organic Products</h2>

          <ul className="grid-list">
            {data.map((item) => (
            <ProductCard
  key={item.productid}
  id={item.productid}
  name={item.productName}
  description={item.description}
  price={item.price}
  img={item.img}
/>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};