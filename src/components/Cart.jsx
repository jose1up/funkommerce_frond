import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, addToCart } from "../redux/action";
import ProductCart from "./ProductCart";
import { Button, useToast } from "@chakra-ui/react";

function Cart() {
  const dispatch = useDispatch();
  const toast = useToast();
  const cart = useSelector((state) => state.cart);
  const handleButoon = () => {
    dispatch(clearCart());
    toast({
      title: "Empty cart.",
      description: "The cart was emptied successfully.",
      status: "error",
      duration: 9000,
      isClosable: true,
    });
  };
  const totalPrice = (items) =>
    items.reduce((counter, item) => counter + item.quantity * item.price, 0);

  return (
    <div>
      {cart &&
        cart.map((cartItem) => {
          return (
            <ProductCart
              id={cartItem.id}
              key={cartItem.id}
              price={cartItem.price}
              title={cartItem.title}
              image={cartItem.image}
              quantity={cartItem.quantity}
            />
          );
        })}
      <div>
        <Button width="100%" colorScheme="green">
          Pay US$ {totalPrice(cart)}
        </Button>
      </div>
      <Button onClick={handleButoon}>Empty cart</Button>
    </div>
  );
}

export default Cart;
