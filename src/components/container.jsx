import React from "react";
import { Box } from '@chakra-ui/react'

export default function containerProduct({ id, title, image, price }) {
  return (
    <figure>
      <img src={image} alt={title}></img>
      <h2>title:{title}</h2>
      <p>price: {price}</p>
    </figure>
  );
}
