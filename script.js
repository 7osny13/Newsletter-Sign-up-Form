const mainContainer = document.getElementById("mainContainer");
const successContainer = document.getElementById('successContainer');
const form = document.getElementById('signup');
const errorMsg = document.getElementById('errorMsg');
const email = document.getElementById('email');
const submitBtn = document.getElementById('submit');



function handleSignup(e) {
     e.preventDefault();


     const emailErrorMessage = validateEmail(email.value);

     if(emailErrorMessage){
        errorMsg.textContent = emailErrorMessage;
        console.log(emailErrorMessage)
     } else {
        mainContainer.style.display = 'none';
        successContainer.style.display = 'flex';
        console.log(emailErrorMessage)
     }
}


function validateEmail(email) {
    if (!email) return 'Email is required';
  
    const isValidEmail =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!isValidEmail.test(email)) {
      return 'Please enter a valid email';
    } 
    
    return '';
  
    
  }

form.addEventListener('submit' , handleSignup)
