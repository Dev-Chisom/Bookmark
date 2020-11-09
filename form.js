

//   globals
let  passwordValue=""
let firstnameValidate=false
let lastValidate=false
let passValidate=false
let confirmValidate=false
let eValidate=false

const domElements={
    firstNameInput:document.querySelector('#firstName'),
    lastNameInput:document.querySelector('#lastName'),
    emailInput:document.querySelector('.form-email'),
    passWordInput:document.querySelector('input[type="password"]'),
    confirmInput:document.querySelector('#confirmPass'),
    submitButton:document.querySelector('.form-button'),
    form:document.querySelector('form'),
}


const matchPattern= (str,pattern)=> pattern.test(str)

const displayError=(element,msg)=>{ 
  element.parentNode.querySelector('small').innerHTML=msg
 
  element.parentNode.className= 'error'
}


const displaySuccess=element=> {
  element.parentNode.className="success"
}


const  addLoader=()=>{
   domElements.submitButton.innerHTML=`<i class="fas loader fa-spinner"></i>`
}

const removeLoader=()=>{
domElements.submitButton.innerHTML=''
}





const updateButton=()=> {

     removeLoader()

      domElements.submitButton.textContent='Submitted'
}

// listener for submit event
domElements.form.addEventListener('submit',(e)=>{
  e.preventDefault()

  addLoader()

  setTimeout(updateButton,3000)
})


domElements.passWordInput.addEventListener('keyup',()=>{

 passwordValue=domElements.passWordInput.value.trim()

 if(passwordValue.length<8 || passwordValue===''){
     displayError(domElements.passWordInput,"Password should be at least 8 charcters long")
     passValidate=false
 }
 else{
     displaySuccess(domElements.passWordInput)
     passValidate=true
 }
 activateButton()
})


domElements.confirmInput.addEventListener('keyup',()=>{

const confirmPassValue= domElements.confirmInput.value.trim()
if(confirmPassValue==='' || (confirmPassValue !== passwordValue)){
   displayError(domElements.confirmInput,'Password doesnt match')
   confirmValidate=false
}else{
   displaySuccess(domElements.confirmInput)
   confirmValidate=true
}
activateButton()
})




domElements.emailInput.addEventListener('keyup',()=>{

  const emailRegexp= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/


  const emailValue=domElements.emailInput.value.trim()

  if(emailValue==='' || !(matchPattern(emailValue,emailRegexp))){
      displayError(domElements.emailInput,"Please enter a valid mail address")
      eValidate=false
  }else{
      displaySuccess(domElements.emailInput)
      eValidate=true
  }
  activateButton()
})

domElements.firstNameInput.addEventListener('keyup',()=>{
const firstNameValue= domElements.firstNameInput.value.trim()
if(firstNameValue==='' || matchPattern(firstNameValue,/[0-9]/)) {
   displayError(domElements.firstNameInput,'Name cannot contain numbers ')
   firstnameValidate=false
}else{
   displaySuccess(domElements.firstNameInput)
   firstnameValidate=true
}
activateButton()
})


domElements.lastNameInput.addEventListener('keyup',()=>{
const lastNameValue= domElements.lastNameInput.value.trim()

if(lastNameValue==='' || matchPattern(lastNameValue,/[0-9]/)) {
   displayError(domElements.lastNameInput,'Name cannot contain numbers')
   lastValidate=false
}else{
   displaySuccess(domElements.lastNameInput)
   lastValidate=true
}
activateButton()
})


const activateButton=()=>{
  if(eValidate&&passValidate&&lastValidate&&firstnameValidate&&confirmValidate){
      document.querySelector('.form-button').removeAttribute('disabled')
  }
  else{
          domElements.submitButton.textContent="Register"
          document.querySelector('.form-button').setAttribute('disabled','disabled')
  }
}



