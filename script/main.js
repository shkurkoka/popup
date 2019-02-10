var modal_button = document.querySelector(".modal_popup button");
var modal_form = document.querySelector(".modal_form");
var login_form = document.querySelector(".login_form");
var register_form = document.querySelector(".register_form");
var login_button = document.querySelector(".login_button");
var register_button = document.querySelector(".register_button");
var login_show_pass = document.querySelector(".login_form .show_pass");
var login_password = document.querySelector('.login_form input[type="password"]');
var register_show_pass = document.querySelector(".register_form .show_pass");
var register_password = document.querySelector('.register_form input[type="password"]');
var register_confirm_password = document.querySelector('.register_forminput[name="confirm_password"]');

modal_button.addEventListener("click", function(){
    if (modal_form.style.display == "block") {
        modal_form.style.display = "none";
        register_form.style.display = "none";
    } else {
        login_form.style.display = 'block';
        modal_form.style.display = "block";
        login_button.style.textDecoration = 'underline';
        register_button.style.textDecoration = 'none';
    }
});
register_button.addEventListener("click", function(){
    if (register_form.style.display == "block") {
        register_form.style.display = "block";
        login_form.style.display = "none";
        register_button.style.textDecoration = 'underline';
        login_button.style.textDecoration = 'none';
    } else {
        register_form.style.display = "block";
        login_form.style.display = "none";
        register_button.style.textDecoration = 'underline';
        login_button.style.textDecoration = 'none';
    }
});

login_button.addEventListener("click", function(){
    if (login_form.style.display == "block") {
        register_form.style.display = "none";
        login_form.style.display = "block"
        login_button.style.textDecoration = 'underline';
        register_button.style.textDecoration = 'none';
    } else {
        register_form.style.display = "none";
        login_form.style.display = "block"
        login_button.style.textDecoration = 'underline';
        register_button.style.textDecoration = 'none';
    }
});

login_show_pass.addEventListener("click", function(evt){
    evt.preventDefault()
    if (login_password.type == "password") {
        login_password.type = "text"
//        login_show_pass.style.backgroundImage = 'url(../show_pass.png)'
    } else {
        login_password.type = "password"
//        login_show_pass.style.backgroundImage = 'url(../hide_pass.png)'
    }
});

register_show_pass.addEventListener("click", function(evt){
    evt.preventDefault()
    if (register_password.type == "password") {
        register_password.type = "text"
//        register_show_pass.style.backgroundImage = 'url(../show_pass.png)'
    } else {
        register_password.type = "password"
//        register_show_pass.style.backgroundImage = 'url(../hide_pass.png)'
    }
});