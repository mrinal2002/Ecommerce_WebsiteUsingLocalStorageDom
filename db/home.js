let body = document.querySelector("#body");
let divbtn = document.createElement('div');
divbtn.style.height = "20px";
divbtn.style.width = "100%";
divbtn.style.display = "flex";
divbtn.style.justifyContent = "center";
divbtn.style.alignItems = "center";

let loadbtn = document.createElement("button");
let lesbtn = document.createElement("button");
loadbtn.innerHTML = "Load More";
lesbtn.innerHTML = "Load Less";
divbtn.appendChild(loadbtn);
divbtn.appendChild(lesbtn);
divbtn.style.paddingTop = "40px";
divbtn.style.gap = "30px";
loadbtn.style.cursor = "pointer";
lesbtn.style.cursor = "pointer";

let display1 = document.createElement('div');
display1.setAttribute('id', 'displ1');
display1.style.height = '80%';
display1.style.width = '90%';
display1.style.display = "grid";
display1.style.gridTemplateColumns = "repeat(4,1fr)";
display1.style.gridTemplateRows = "repeat(2,1fr)";

body.appendChild(display1);

let count = 0;
const addproducts = (() => {
    let productData = JSON.parse(localStorage.getItem("product")) || [];
    let batch = productData.slice(count, count + 3);

    if (batch.length > 0) {

        batch.forEach((item, index) => {
            console.log(item);

            let divchild = document.createElement("div");
            divchild.setAttribute('class', 'childdiv');

            divchild.style.height = "300px";
            divchild.style.width = "250px";

            divchild.style.border = "1px solid black";
            divchild.style.backgroundColor = "lightblue";
            let h1 = document.createElement('h1');
            let p = document.createElement('p');
            let price = document.createElement('p');

            h1.innerHTML = item.product_name;
            p.innerHTML = item.product_description;
            price.innerHTML = item.product_price;
            divchild.appendChild(h1);
            divchild.appendChild(p);
            divchild.appendChild(price);

            divchild.style.display = "flex";
            divchild.style.flexDirection = "column";
            divchild.style.gap = "20px";


            let addtocart = document.createElement('button');
            let buynow = document.createElement('button');
            addtocart.setAttribute("class", "addtocartbtn");
            buynow.setAttribute("class", "buynow");
            addtocart.innerHTML = "Add to Cart";
            buynow.innerHTML = "Buy Now";

            addtocart.style.cursor = "pointer";
            buynow.style.cursor = "pointer";

            let span = document.createElement("span");
            span.appendChild(addtocart);
            span.appendChild(buynow);
            span.style.gap = "10px";

            divchild.appendChild(span);
            display1.appendChild(divchild);
            


            addtocart.addEventListener("click", () => {
                let logindata = localStorage.getItem("isLogin") || [];

                console.log(item);

                if (logindata.length == 0) {
                    window.location.href = "../public/index.html";
                }
                else {
                    // headerdiv.setAttribute("class", 'headerdiv');
                    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

                    let cartLength = cartItems.length;

                    let flag = 0;
                    if (cartLength == 0) {
                        cartItems.push(item);
                        localStorage.setItem("cartItems", JSON.stringify(cartItems));
                    }
                    else {
                        cartItems.forEach((item1) => {
                            console.log(item);
                            if (item.product_name == item1.product_name && item.product_description == item1.product_description && item.product_price == item1.product_price) {
                                alert('its alredy is in your cart');
                                flag = 1;
                            }
                        })
                        if (flag == 0) {
                            cartItems.push(item);
                            localStorage.setItem("cartItems", JSON.stringify(cartItems));
                        }
                    }
                    // window.location.href = "../public/cart.html";
                }
            })
        })
        count += 3;
    }
    else {
        alert('dont have enough items');
    }
})

addproducts();
loadbtn.addEventListener("click", addproducts);

lesbtn.addEventListener('click', () => {
    let productData = JSON.parse(localStorage.getItem("product")) || [];
    let childDivs = display1.getElementsByClassName('childdiv');

    if (childDivs.length >= 4) {
        for (let i = 0; i < 4; i++) {
            display1.removeChild(childDivs[childDivs.length - 1]);
        }
        count -= 4;
        const batch = productData.slice(count, count + 4);
        if (batch.length > 0) {
            batch.forEach((item, index) => {
                // console.log(index);
            })
        } else {
            alert('Please add more items');
        }
    } else {
        alert('Not enough items to load less');
    }
})
body.appendChild(divbtn);

