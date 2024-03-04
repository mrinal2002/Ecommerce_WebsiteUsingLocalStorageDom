let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let display1 = document.createElement('div');
let body=document.querySelector("body");
// display.setAttribute('id','displ');
display1.style.height='100%';
display1.style.width='90%';
display1.style.display="grid";
display1.style.gridTemplateColumns="repeat(4,1fr)"
display1.style.gridTemplateRows="repeat(4,1fr)";
display1.style.gap="30px";
body.appendChild(display1);

btn1.addEventListener('click', () => {
    let count = 0;
    let productData = JSON.parse(localStorage.getItem("product")) || [];
    let batch = productData.slice(count, count + 6);
    batch.forEach((item, index) => {
        
        let divchild=document.createElement("div");
        divchild.setAttribute('class','childdiv');
        divchild.style.height="300px"
        divchild.style.width="250px"
        divchild.style.border="1px solid black";
        let h1=document.createElement('h1');
        let p=document.createElement('p');
        let price=document.createElement('p');

        h1.innerHTML=item.product_name;
        p.innerHTML=item.product_description;
        price.innerHTML=item.product_price;
        divchild.appendChild(h1);
        divchild.appendChild(p);
        divchild.appendChild(price);

        divchild.style.display="flex";
        divchild.style.flexDirection="column"
        divchild.style.gap="20px"

        let addtocart=document.createElement('button');
        let buynow=document.createElement('button');
        addtocart.innerHTML="Add to Cart";
        buynow.innerHTML="Buy Now";
        
        let span=document.createElement("span");
        span.appendChild(addtocart);
        span.appendChild(buynow);

        divchild.appendChild(span);

        display1.appendChild(divchild);
    })
    count += 6;
})