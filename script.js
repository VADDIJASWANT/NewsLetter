const emailInput = document.getElementById("email");
const labelError = document.getElementById("label_error");
const submitButton = document.getElementById("submitBtn");
const mainElement = document.querySelector(".signUp-form");
const successMessage = document.querySelector(".successMessage");
const dismissButton = document.getElementById("dismiss-btn");
function submitEmail() {
    var email = emailInput.value;
    const isEmailValid = validateEmail(email)
    if(isEmailValid){
        showSuccessMessage();
    }else{
        showError();
    }
}
function validateEmail(email){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function emailInputChange(){
    const email = emailInput.value;
    if(email == ""){
        removeError();
    }
}

function showError(){
    emailInput.classList.add("email-error");
    labelError.style.display = "block";
}

function removeError(){
    if(emailInput.classList.contains("email-error")){
        emailInput.classList.remove("email-error");
    }
    labelError.style.display = "none";
}
function showSuccessMessage(){
   mainElement.style.display = "none";
   successMessage.style.display = "flex";
   document.getElementById("email-name").textContent = emailInput.value;
}

function showForm(){
    mainElement.style.display = "flex";
    successMessage.style.display = "none";
    emailInput.value = "";
}

emailInput.addEventListener("keyup", emailInputChange);
submitButton.addEventListener("click", submitEmail);
dismissButton.addEventListener("click", showForm);