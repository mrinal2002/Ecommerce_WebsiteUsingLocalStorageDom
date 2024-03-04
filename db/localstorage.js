let formsignup=document.querySelector("#formsignup");
formsignup.addEventListener('submit',(e)=>{

    e.preventDefault();
    let email=e.target.email.value;
    let pass=e.target.pass.value;

    let id=new Date().getTime();

    const userData=({
        "Email":email,
        "Password":pass,
        "Id":id,
        "cart":[{}]
    })   
    
   let arr=JSON.parse(localStorage.getItem("Signup")) || [];
   console.log(arr);
   arr.forEach((item)=>{
    if(item.Email==userData.Email && item.Password==userData.Password){
        alert("user already exist!!");
        window.location.href=("../public/index.html");
    }
   })
   arr.push(userData);
   localStorage.setItem("Signup",JSON.stringify(arr));
    window.location.href=("../public/index.html");
})

let loginbtn=document.querySelector(".loginbtn");
loginbtn.addEventListener("click",()=>{
    window.location.href="../public/index.html";
})