// selector's of an elements 
const name = document.getElementById("name");
const fatherName = document.getElementById("father-name");
const motherName = document.getElementById("mother-name");
const emailId = document.getElementById("emial-id");
const mobileNumber = document.getElementById("mobile-number");
const nation = document.getElementById("nation")
const submit = document.getElementById("submit");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");


 submit.addEventListener("click", (e)=>{
     
   const password1 = password.value;
   const confirmPassword1 = confirmPassword.value;
   const mobileNumber1 = mobileNumber.value;

    if(password1 != confirmPassword1 ){
        alert("Password should be same");
        e.preventDefault()
        return;
    }
    if(password1.length < 8){
        alert("please enter password of minimun 8 characters")
        e.preventDefault()
        return;
    }
    if(mobileNumber1.length !=  10){
        alert("Please Enter a valid number");
        e.preventDefault();
        return;
    }
    if(nation.selectIndex == -1){
        alert("please select nationality");
        e.preventDefault();
        return;
    } 
 })