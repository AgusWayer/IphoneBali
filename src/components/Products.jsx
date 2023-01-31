import Link from "next/link";
import React, { useEffect, useState } from "react";
import { products } from "../data";
import { BsFillArrowDownCircleFill, BsFillArrowUpCircleFill } from "react-icons/bs";

const Products = ({ breakpoint }) => {
  const [hide, setHide] = useState(false);
  useEffect(() => {
    if (breakpoint == "mobile") {
      return setHide(true);
    }
    return setHide(false);
  }, [breakpoint]);
  const handleShowItems = () => {
    return setHide((prev) => !prev);
  };
  return (
    <div className="p-5 text-center w-full">
      <h1 className="md:w-1/4  mx-auto font-semibold text-center text-3xl my-7 border-b-4 border-b-black">OUR PRODUCTS</h1>

      <div className="md:grid md:grid-cols-2 gap-5">
        {hide ? (
          <>
            <Link href={`/product/${products[0].id}`}>
              <img src={products[0].img} alt="" className=" scale-100 mx-auto hover:scale-105 transition-all" />
              <h1 className="my-5 font-semibold text-xl hover:scale-105 transition-all">{products[0].title}</h1>
            </Link>
            <Link href={`/product/${products[1].id}`}>
              <img src={products[1].img} alt="" className=" scale-100 mx-auto hover:scale-105 transition-all" />
              <h1 className="my-5 font-semibold text-xl hover:scale-105 transition-all">{products[1].title}</h1>
            </Link>
            <button className=" text-center" type="button" onClick={handleShowItems}>
              <BsFillArrowDownCircleFill className="text-3xl block mx-auto" />
              <h1>View More!</h1>
            </button>
          </>
        ) : (
          <>
            {(() => {
              if (breakpoint == "mobile") {
                return (
                  <>
                    {products.map((product, index) => (
                      <div key={product.title} className={`my-5  text-center ${index == products.length - 1 ? "col-span-2" : ""} flex flex-col items-center justify-center`}>
                        <Link href={`/product/${product.id}`}>
                          <img src={product.img} alt="" className=" scale-100 mx-auto hover:scale-105 transition-all" />
                          <h1 className="my-5 font-semibold text-xl hover:scale-105 transition-all">{product.title}</h1>
                        </Link>
                      </div>
                    ))}
                    <button className=" text-center" type="button" onClick={handleShowItems}>
                      <BsFillArrowUpCircleFill className="text-3xl block mx-auto" />
                      <h1>View Less</h1>
                    </button>
                  </>
                );
              }
              return (
                <>
                  {products.map((product, index) => (
                    <div key={product.title} className={`my-5  text-center ${index == products.length - 1 ? "col-span-2" : ""} flex flex-col items-center justify-center `}>
                      <div></div>
                      <Link href={`/product/${product.id}`}>
                        <img src={product.img} alt="" className=" scale-100 mx-auto hover:scale-105 transition-all" />
                        <h1 className="my-5 font-semibold text-xl hover:scale-105 transition-all">{product.title}</h1>
                      </Link>
                    </div>
                  ))}
                </>
              );
            })()}
          </>
        )}
      </div>
    </div>
  );
};

export default Products;
