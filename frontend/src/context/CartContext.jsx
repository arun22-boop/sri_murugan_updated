import { createContext, useContext, useState } from "react";


const CartContext = createContext(null);



export function CartProvider({children}){


const [cartItems,setCartItems] = useState([]);





// ADD TO CART

const addToCart = (product, quantity=1)=>{


setCartItems(prev=>{


const existing = prev.find(

item=>item._id === product._id

);



if(existing){


return prev.map(item=>

item._id === product._id

?

{

...item,

quantity:item.quantity + quantity

}

:

item


);


}




return [

...prev,

{

...product,

quantity

}

];


});


};









// INCREASE

const increaseQuantity = (id)=>{


setCartItems(prev=>

prev.map(item=>

item._id===id

?

{

...item,

quantity:item.quantity+1

}

:

item

)


);


};









// DECREASE

const decreaseQuantity = (id)=>{


setCartItems(prev=>

prev.map(item=>

item._id===id && item.quantity>1

?

{

...item,

quantity:item.quantity-1

}

:

item

)


);


};









// REMOVE

const removeFromCart=(id)=>{


setCartItems(prev=>

prev.filter(

item=>item._id!==id

)

);


};









// CLEAR CART

const clearCart=()=>{


setCartItems([]);


};









return(


<CartContext.Provider

value={{

cartItems,

addToCart,

increaseQuantity,

decreaseQuantity,

removeFromCart,

clearCart

}}

>


{children}


</CartContext.Provider>


);


}








export function useCart(){


return useContext(CartContext);


}