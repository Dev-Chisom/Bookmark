const form = document.getElementById("form");
const email = document.getElementById("email");


form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInput();
});

function checkInput() {
   const emailValue = email.value.trim();

   if (emailValue === "") {
    setErrorFor(email, 'email is blank')
   } else if(!isEmail(emailValue)){
       setErrorFor(email, 'Whoops make sure its an email')
   }else{
    setSuccessFor(email);
   }
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    const icon = document.getElementById("icon");

    small.innerText = message;
    icon.style.visibility = "visible";
    icon.style.color = "var(--soft-red)";
    formControl.style.margin = "1rem";

    formControl.className = "form-control error";
}
function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success"
    const small = formControl.querySelector('small');
    const icon = document.getElementById("icon");

    small.style.display = "none";
    formControl.style.margin = "1rem";
    icon.style.visibility = "hidden";

}
function isEmail(email){
    // return /^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email);
     return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function closeMenu(){
    document.getElementById("navbar").style.height = "0%";
    document.getElementById("icon").style.display = "block";
  }
  function openMenu(){
    document.getElementById("navbar").style.height = "100%";
    document.getElementById("icon").style.display = "none";
  }