import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrand, getProductBrand } from "../redux/action";
import { Select } from "@chakra-ui/react";



export default function filterBrand() {
  const dispatch = useDispatch();
  const allBrand = useSelector((state) => state.brands);
  useEffect(() => {
    dispatch(getAllBrand());
  }, []);

  const handleFilterBrands = (e) => {
    dispatch(getProductBrand(e.target.value));
  };

  return (
    <Select placeholder="Select Brand" onChange={(e) => handleFilterBrands(e)}>
      <option value="all">All</option>
      {allBrand?.map((brand) => (
        <option value={brand.name}>{brand.name}</option>
      ))}
    </Select>
  );
}