import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory, getProductCategory} from "../redux/action";
import { Select } from "@chakra-ui/react";

export default function FilterCategory() {
  const dispatch = useDispatch();
  const allCategories = useSelector((state) => state.category);
  useEffect(() => {
    dispatch(getAllCategory());
  }, []);
  const handleFilterCategory = (e) => {
    dispatch(getProductCategory(e.target.value));
  };

  return (
    <Select placeholder="Select Category" onChange={(e) => handleFilterCategory(e)}>
      <option value="all">All</option>
      {allCategories?.map((category) => (
        <option value={category.name} key={category.id}>{category.name}</option>
      ))}
    </Select>
  );
}
