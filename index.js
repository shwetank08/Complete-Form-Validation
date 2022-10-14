const email = document.querySelector("#email");
const userName = document.querySelector("#username");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const btn = document.querySelector("button");
const msg = document.querySelector('.msg');


function display(e){
    msg.innerText = "";
    let message = document.createElement('h1');
    message.innerText = e.toUpperCase();
    msg.appendChild(message)
}

function isValidEmail(e){
    const reg = /[A-Za-z._]{1,}@[A-Za-z]{3,}[.]{1}[a-zA-Z.]{3,}/;
    if(reg.test(e)){
        return true;
    }
    return false;
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if(!isValidEmail(email.value)){
    display("Please enter valid mail id");
    return;
  }
  if(email.value === ""||userName.value === ""||password.value === ""||confirmPassword.value === ""){display("Please input all the fields"); return;}

  if(password.value === confirmPassword.value){
    display("User signed up")
  }else{
    display("Password don't match")
    return;
  }
  email.value = "";
  userName.value = "";
  password.value = "";
  confirmPassword.value = "";
});

