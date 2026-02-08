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
