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
// toggle adds and removes a css class as compared to add or remove which
// only ad or remove a class
// classList = access a class from css File
// event.target = describes an user interaction with the page:
// click touch scroll

// when adding a condition: first write the condition with if then {} and write what
// should happen when the condition is met

function handleDocumentClick(event) {
  let closeBtn = document.getElementById("close_btn");
  let burgerBtn = document.getElementById("burger_btn");
  let mobileNav = document.getElementById("mobile_nav");

  if (
    !closeBtn.contains(event.target) &&
    !burgerBtn.contains(event.target) &&
    !mobileNav.contains(event.target)
  ) {
    closeBtn.classList.add("d-none");
    burgerBtn.classList.remove("d-none");
    mobileNav.classList.add("d-none");
  }
}

document.addEventListener("click", handleDocumentClick);
document.addEventListener("touchstart", handleDocumentClick);

//Functii pentru contact form
function getInputValue() {
  //accesez elemente de HTML prin id si le salvez in
  //variablie: name, email, textarea
  let name = document.getElementById("name");
  let email = document.getElementById("mail");
  let textarea = document.getElementById("txt_message");

  //creez noi variabile, in care stilizez
  //ceea ce scrie persoana in fromular, stergand spattile albe
  //cu .trim()
  let nameValue = name.value.trim();
  let emailValue = email.value.trim();
  let textValue = textarea.value.trim();

  if (nameValue === "") {
    showNameAlertMessage();
  }

  if (emailValue === "" || !emailValue.includes("@")) {
    showMailAlertMessage();
  }

  if (textValue === "") {
    showTexAlertMessage();
  }
  else {
    showSuccesMessage();
  }

  name.value = "";
  email.value = "";
  textarea.value = "";
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

function showTexAlertMessage() {
  let alertContainer = document.getElementById("txt_alert_msg");
  alertContainer.innerText = "Please insert your message";
  alertContainer.classList.add("alert");
}


function showSuccesMessage(){
  let successContainer = document.getElementById("success");
  successContainer.innerText = "Thank you for your message!";
  successContainer.classList.add("success"); 
  
  // asa am cautat in css clasa pe care am facut-o pt mesajul de succes
}

function hideAlertName() {
  let alertContainerName = document.getElementById("name_alert_msg");
  alertContainerName.innerText = "";
  alertContainerName.classList.remove("alert");
}

function hideAlertMail() {
  let alertContainerMail = document.getElementById("mail_alert_msg");
  alertContainerMail.innerText = "";
  alertContainerMail.classList.remove("alert");
}

function hideAlertText() {
  let alertContainerText = document.getElementById("txt_alert_msg");
  alertContainerText.innerText = "";
  alertContainerText.classList.remove("alert");
}


// calculator

function CalculatorPortions() {
    const inputNumPortion = document.querySelector(".num-portion");
    const calcBtn = document.querySelector("#calcBtn");
    const valueCells = document.querySelectorAll(".td-value");
    const basePortions = 1;

    calcBtn.addEventListener("click", () => {
        const portions = Number(inputNumPortion.value);

        if (!portions || portions <= 0) {
            alert("Please insert a valid number of portions");
            return;
        }

        valueCells.forEach(cell => {
            const baseValue = Number(cell.dataset.base);

            // Skip empty cells (like Salt)
            if (!baseValue) {
                cell.textContent = "";
                return;
            }

            const newValue = (baseValue * portions) / basePortions;

            // Round to 2 decimals
            cell.textContent = Math.round(newValue * 100) / 100;
        });
    });
}

CalculatorPortions();


// Deci prima data dau un id elementului de HTML 
// pe care vreau sa-l selctez cu JS. Apoi creez 
// o variabila (pe care o denumesc cum vreau eu) si in ea 
// salvez elementul de html pe care il selectez 
// fie cu document get element by id, fie cu 
// document.querySelector (cu asta selectez clasa, nu id-ul)

