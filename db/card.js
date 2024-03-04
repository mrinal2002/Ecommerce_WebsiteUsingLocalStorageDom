let div=document.createElement('div');
let h2=document.createElement('h2');
let p1=document.createElement('p');
let p2=document.createElement('p');
let body=document.querySelector("#body");

let cartData=JSON.parse(localStorage.getItem("cartItems")) ?? [];

cartData.forEach((item)=>{
    console.log(item);
})