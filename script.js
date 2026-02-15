//Functii pt. mobile nav
function toggleMobileNav() {
  let mobileNav = document.getElementById("mobile_nav");
  let burgerBtn = document.getElementById("burger_btn");
  let closeBtn = document.getElementById("close_btn");

  mobileNav.classList.toggle("d-none");

  if (!mobileNav.classList.contains("d-none")) {
    burgerBtn.classList.add("d-none");
    closeBtn.classList.remove("d-none");
  } else {
    burgerBtn.classList.remove("d-none");
    closeBtn.classList.add("d-none");
  }
}

  // classList = access a class from css File
  // event.target = describes an user interaction woth the page: 
  // click touch scroll

  // when adding a condition: first write the condition with if then {} and write what
  // should happen when the condition is met 


function handleDocumentClick(event) {
  let closeBtn = document.getElementById("close_btn");
  let burgerBtn = document.getElementById("burger_btn");
  let mobileNav = document.getElementById("mobile_nav");

  if(!closeBtn.contains(event.target) &&
     !burgerBtn.contains(event.target)&&
      !mobileNav.contains(event.target)) {
        closeBtn.classList.add("d-none");
        burgerBtn.classList.remove("d-none");
        mobileNav.classList.add("d-none");
      }
}

document.addEventListener('click', handleDocumentClick);
document.addEventListener('touchstart', handleDocumentClick);


//Functii pentru contact form
function getInputValue() {
  let name = document.getElementById("name");
  let email = document.getElementById("mail");
  let nameValue = name.value.trim();
  let emailValue = email.value.trim();

  if(nameValue === "") {
    showNameAlertMessage();
  }

  if(emailValue === "" || !emailValue.includes("@")) {
    showMailAlertMessage();
  }
}

function showNameAlertMessage() {
  let alertContainer = document.getElementById("name_alert_msg");
  alertContainer.innerText = "Please enter your name!";
  alertContainer.classList.add("alert");
}

function showMailAlertMessage() {
  let alertContainer = document.getElementById("mail_alert_msg");
  alertContainer.innerText = "Please enter a valid e-mail!";
  alertContainer.classList.add("alert");
}

function hideAlertMessages(){
  //1. Identifici elementele de HTML care au alerta
  let alertContainerName = document.getElementById("name_alert_msg");
  let alertContainerMail = document.getElementById("mail_alert_msg");

  //2. Le stergi mesajul de alerta
  alertContainerName.innerText = "";
  alertContainerMail.innerText = "";

  //3. Le stergi clasa de CSS
  alertContainerName.classList.remove("alert");
  alertContainerMail.classList.remove("alert");
}


//functie pentru <textartea> care nu trebuie de asemenea sa se extinda
//la infintit, pentru asta trebuie doar sa fie stilizata in CSS

// se creeaza functia si se adauga la conditie


