// BUTTON TO SHOW THE REGISTER FORM

document.getElementById("register").onclick = function () {

    // VARIABLES

    var form_register = document.getElementById("form-register");
    var form_login = document.getElementById("form-login");
    var form_newsletter = document.getElementById("form-newsletter");
    var form_admin = document.getElementById("form-admin")
 
    // SHOW THE REGISTER FORM / HIDE OTHER

    form_register.style.display = "flex";
    form_login.classList.add("form-login-show");
    form_newsletter.classList.add("newsletter-show");
    form_admin.style.display = "none";
 };