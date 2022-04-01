import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Input, IconButton, Stack } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { findFunko } from "../redux/action";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(" ");

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      alert("el campo de busqueda esta vacio");
      return false;
    }
    dispatch(findFunko(title));
    setTitle("");
  };
  return (
    <Stack>
      <Input
        placeholder="Find Funko"
        size="md"
        onChange={handleInputChange}
        type="text"
        value={title}
      />
      <IconButton
        width={"10px"}
        colorScheme="blue"
        aria-label="Search database"
        icon={<SearchIcon />}
        onClick={(e) => handleSubmit(e)}
      />
    </Stack>
  );
}
