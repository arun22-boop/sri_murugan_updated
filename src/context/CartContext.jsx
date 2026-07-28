import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Add Product
  const addToCart = (product, quantity = 1) => {
    const exist = cartItems.find((item) => item.id === product.id);

    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item
        )
      );

      toast.success(
        `${product.name} quantity updated`
      );
    } else {
      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity,
        },
      ]);

      toast.success(
        `${product.name} added to cart`
      );
    }
  };

  // Increase Quantity
  const increaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  // Decrease Quantity
  const decreaseQty = (id) => {
    setCartItems(
      cartItems
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove Product
  const removeItem = (id) => {
    setCartItems(
      cartItems.filter((item) => item.id !== id)
    );

    toast.success("Product removed");
  };

  // Clear Cart
  const clearCart = () => {
    setCartItems([]);

    toast.success("Cart cleared");
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQty,
        decreaseQty,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}