import React from "react";
import { Link } from "react-router-dom"


export default function containerProduct({ id, title, image, price }) {
  return (
    <Link to={`/details/${id}`}>
      <figure>
        <img src={image} alt={title}></img>
        <h2>title:{title}</h2>
        <p>price: {price}</p>
      </figure>
    </Link>
  );
}
