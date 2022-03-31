import React from "react";
import { Link } from "react-router-dom";
import { Button, useToast } from "@chakra-ui/react";
import { addToCart } from "../redux/action";
import { useDispatch } from "react-redux";

export default function ContainerProduct({ id, title, image, price }) {
  const dispatch = useDispatch();
  const toast = useToast();
  const handleButoon = (e) => {
    dispatch(addToCart(id));
    toast({
      title: "Add to cart.",
      description: "The product was added successfully.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };
  return (
    <figure>
      <Link to={`/details/${id}`}>
        <img src={image} alt={title}></img>
        <h2>title:{title}</h2>
        <p>price: {price}</p>
      </Link>
      <Button
        colorScheme="black"
        variant="outline"
        onClick={(e) => handleButoon(e)}
      >
        add to cart
      </Button>
    </figure>
  );
}
