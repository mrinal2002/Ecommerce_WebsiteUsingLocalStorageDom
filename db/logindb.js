const formlogin = document.querySelector("#formlogin");
formlogin.addEventListener("submit", (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let pass = e.target.pass.value;
    let arr = JSON.parse(localStorage.getItem("Signup")) || [];

    let f = 1;
    if ("mrinal1@gmail.com" == email && "1234" == pass) {
        f = 0;
        window.location.href = "../public/admindashboard.html"
    }
    console.log(arr);
    let flag = 1;
    if (f == 1) {
        arr.forEach((item) => {
            if (item.Email == email && item.Password == pass) {
                flag = 0;
                let narr = [];
                narr.push(item.Id);
                localStorage.setItem("isLogin", JSON.stringify(narr));
                window.location.href = "../public/home.html"
            }
        })
        if (flag == 1) {
            alert("please signup first");
        }
        e.target.reset();
    }
})

let signupbtn=document.querySelector(".signupdiv");
signupbtn.addEventListener("click",()=>{
    window.location.href="../public/signup.html";
})