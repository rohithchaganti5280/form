'use strict';
 var form=document.getElementById('form');
 var username=document.getElementById('username');
 var email=document.getElementById('email');
 var password=document.getElementById('password');
 var confirmPassword=document.getElementById('confirmpassword');

 //function
 const showError=function(input , message ){
   const formControl= input.parentElement;
   formControl.className='form-control error';
   const small=formControl.querySelector('small');
   small.innerText= message;
 };
 const showSuccess=function(input , message ){
  const formControl= input.parentElement;
  formControl.className='form-control success';
}
const isValidEmail= function(email){
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


 //event listeners
 form.addEventListener('submit', (e) =>{
   e.preventDefault();
   if(username.value ===''){
     showError(username,'username required')
   }else{
     showSuccess(username)
   }
   if(email.value ===''){
    showError(email,'email required')
  }else if(!isValidEmail(email.value)){
    showError(email,'incorrect mail')
  }
  else{
    showSuccess(email)
  }
  if(password.value ===''){
    showError(password,'password required')
  }
  if(confirmPassword.value ===''){
    showError(confirmPassword,'confirmPassword required')
  }else if(password !==confirmPassword){
    showError(confirmPassword,'Enter password correct')
  }else{
    showSuccess(confirmPassword)
  }
 });