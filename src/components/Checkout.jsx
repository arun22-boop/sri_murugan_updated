const placeOrder = (e) => {

e.preventDefault();


const cart =
JSON.parse(localStorage.getItem("cart")) || [];



const total = cart.reduce(
(sum,item)=>
sum + Number(item.price) * Number(item.qty),
0
);



const newOrder = {

id: Date.now(),

customerName: customer.name,

phone: customer.phone,

address: customer.address,


products: cart.map(item=>({

id:item.id,

name:item.name,

brand:item.brand,

qty:item.qty,

price:item.price,

image:item.image

})),


total: total,

date:new Date().toLocaleDateString(),

status:"Pending"

};





const oldOrders =
JSON.parse(localStorage.getItem("orders")) || [];



localStorage.setItem(

"orders",

JSON.stringify([
...oldOrders,
newOrder
])

);



localStorage.removeItem("cart");


alert("Order Placed Successfully");


navigate("/checkout-success");


};