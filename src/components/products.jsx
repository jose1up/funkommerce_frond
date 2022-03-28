import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ContainerProduct from "./container";
import { getAllFunko } from "../redux/action";

export default function products() {
  const dispatch = useDispatch();
  const allFunko = useSelector((state) => state.allFunko);
  useEffect(() => {
    dispatch(getAllFunko());
  }, []);

  return (
    <div>
      {allFunko &&
        allFunko.map((funko) => {
          return (
            <ContainerProduct
              key={funko.id}
              title={funko.title}
              image={funko.image}
              price={funko.price}
            />
          );
        })}
    </div>
  );
}
