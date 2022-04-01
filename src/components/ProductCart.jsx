import React from "react";
import { DeleteIcon } from "@chakra-ui/icons";
import { removeOneFromCart } from "../redux/action";
import { useDispatch } from "react-redux";
import { useToast } from "@chakra-ui/react";

export default function ProductCart({ id, title, image, price, quantity }) {
  const dispatch = useDispatch();
  const toast = useToast();
  const handleButoon = (e) => {
    dispatch(removeOneFromCart(id));
    toast({
      title: "Deleted item.",
      description: "The item was deleted successfully.",
      status: "error",
      duration: 9000,
      isClosable: true,
    });
  };
  return (
    <>
      <img src={image} alt={title}></img>
      <h2>title:{title}</h2>
      <p>price: US$ {price}</p>
      <p>quantity: {quantity}</p>
      <DeleteIcon onClick={(e) => handleButoon(e)} />
    </>
  );
}
