import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { getAllFunko } from "../redux/action";
import ContainerProduct from "./container";
import loader from "../assets/Ecxd.gif";
import Pager from "./pager";
import FilterCategory from "./filterCategory";
import FilterBrand from "./filterBrand";
import FilterLicense from "./filterLicense";
import { Link } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch();
  const funkos = useSelector((state) => state.allFunko);
  const [currentPage, setCurrentPage] = useState(1);
  const [funkoPerPage] = useState(9); //Set max amount of funkos in each page
  const lastFunko = currentPage * funkoPerPage;
  const firstFunko = lastFunko - funkoPerPage;
  const fukoGap = funkos.slice(firstFunko, lastFunko);
  const pager = (number) => {
    setCurrentPage(number);
  };
  useEffect(() => {
    dispatch(getAllFunko());
  }, []);
  return (
    <>
      <h1>home</h1>
      <Link to={"/cart"}>
        <h2>carrito</h2>
      </Link>
      <FilterCategory />
      <FilterBrand />
      <FilterLicense />
      <Pager
        key={currentPage}
        funkos={funkos.length ? funkos.length : []}
        funkoPerPage={funkoPerPage}
        pager={pager}
      />
      <div>
        {fukoGap.length > 0 ? (
          fukoGap?.map((funko) => {
            return (
              <ContainerProduct
                key={funko.id}
                id={funko.id}
                title={funko.title}
                price={funko.price}
                image={funko.image}
              />
            );
          })
        ) : (
          <div>
            <img src={loader} alt="loading" className="load" />
          </div>
        )}
      </div>
    </>
  );
}
