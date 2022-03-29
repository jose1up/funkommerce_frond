import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllLicense, getProductLicense } from "../redux/action";
import { Select } from "@chakra-ui/react";

export default function FilterLicense() {
  const dispatch = useDispatch();
  const allLicense = useSelector((state) => state.licenses);
  useEffect(() => {
    dispatch(getAllLicense());
  }, []);
  const handleFilterLicense = (e) => {
    dispatch(getProductLicense(e.target.value));
  };

  return (
    <Select
      placeholder="Select License"
      onChange={(e) => handleFilterLicense(e)}
    >
      <option value="all">All</option>
      {allLicense?.map((license) => (
        <option value={license.name} key={license.id}>{license.name}</option>
      ))}
    </Select>
  );
}
