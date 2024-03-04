let formdata = document.querySelector("form");
let editform = document.querySelector("#form2");
let rightcontent = document.querySelector(".rightcontent");
let body=document.querySelector("#body");

formdata.addEventListener("submit", (e) => {
    e.preventDefault();
    let pname = e.target.pname.value;
    let pdesc = e.target.pdesc.value;
    let price = e.target.price.value;
    // console.log(pname,pdesc,price);
    let userdata = JSON.parse(localStorage.getItem("product")) || [];
    // console.log(userdata);
    let id = new Date().getTime();
    const obj = {
        "product_name": pname,
        "product_description": pdesc,
        "product_price": price,
        "Id": id
    }
    userdata.push(obj)
    // console.log(userdata);
    localStorage.setItem("product", JSON.stringify(userdata));

    display(obj);
    e.target.reset();
})

let div=document.createElement('div');
div.setAttribute('id','div1');

let table=document.createElement('table');
table.border=1;
let tr1=document.createElement('tr');
let th1=document.createElement('th');
let th2=document.createElement('th');
let th3=document.createElement('th');
let th4=document.createElement('th');
let th5=document.createElement('th');

th1.innerHTML="Product Name";
th2.innerHTML="Product description";
th3.innerHTML="Price";
th4.innerHTML="Update";
th5.innerHTML="Delete";

tr1.appendChild(th1);
tr1.appendChild(th2);
tr1.appendChild(th3);
tr1.appendChild(th4);
tr1.appendChild(th5);

table.appendChild(tr1);
div.appendChild(table);
body.appendChild(div);

function display(obj) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement('td');

    td1.innerHTML = obj.product_name;
    td2.innerHTML = obj.product_description;
    td3.innerHTML = obj.product_price;

    let upbtn = document.createElement("button");
    upbtn.innerHTML = "Update"
    td4.appendChild(upbtn);
    let delbtn = document.createElement("button");
    delbtn.innerHTML = "Delete"
    td5.appendChild(delbtn);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);

    table.appendChild(tr);
    delbtn.addEventListener("click", () => {
        table.removeChild(tr);
        deleteData(index);
    })
    upbtn.addEventListener("click", () => {
        rightcontent.setAttribute('class', 'right');
        let userdata = JSON.parse(localStorage.getItem("product")) || [];
        userdata.forEach((item, index) => {
            updateInForm2(index);
        })
    })
}

let byDefualtDisplay = () => {
    let productData = JSON.parse(localStorage.getItem("product")) ?? [];
    productData.forEach((item, index) => {

        let tr = document.createElement("tr");
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');

        td1.innerHTML = item.product_name;
        td2.innerHTML = item.product_description;
        td3.innerHTML = item.product_price;

        let upbtn = document.createElement('button');
        upbtn.innerHTML = "Update";
        let delbtn = document.createElement("button");
        delbtn.innerHTML = "Delete";

        td4.appendChild(upbtn);
        td5.appendChild(delbtn);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);

        table.appendChild(tr);

        upbtn.addEventListener('click', () => {
            updateInForm2(index);
        })

        delbtn.addEventListener('click', () => {
            deleteData(index);
            table.removeChild(tr);
        })
    })
}
byDefualtDisplay();

let updateIndex=0;
function updateInForm2(i) {
    let pname2 = document.querySelector("#pname2");
    let pdesc2 = document.querySelector("#pdesc2");
    let price2 = document.querySelector("#price2");

 
    let productData = JSON.parse(localStorage.getItem("product"))??[];
    productData.forEach((item, index) => {
        if (i == index) {
            rightcontent.setAttribute('class', 'right');
            pname2.value = item.product_name;
            pdesc2.value = item.product_description;
            price2.value = item.product_price;
            updateIndex=index;
        }
    })
}

function deleteData(index) {
    let productData = JSON.parse(localStorage.getItem("product"))??[];
    productData.splice(index, 1);
    localStorage.setItem("product", JSON.stringify(productData));
    byDefualtDisplay();
    window.location.reload();
}

editform.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(updateIndex);
    let pname2=e.target.pname2.value;
    let pdesc2=e.target.pdesc2.value;
    let price2=e.target.price2.value;

    let id = new Date().getTime();
    const obj = {
        "product_name": pname2,
        "product_description": pdesc2,
        "product_price": price2,
        "Id": id
    }

    let productData=JSON.parse(localStorage.getItem("product")) || [];
    productData.splice(updateIndex,1,obj);
    console.log(productData);
    localStorage.setItem("product",JSON.stringify(productData));
    e.target.reset();
    byDefualtDisplay();
    window.location.reload();
})