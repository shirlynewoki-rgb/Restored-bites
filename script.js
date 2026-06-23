// Welcome Pop-up
window.onload = function(){
    alert("Welcome to Restores Bites!");
}

// Form Validation
function validateForm(){

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let gender = document.getElementById("gender").value;

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(name == ""){
        alert("Please enter your name.");
        return false;
    }

    if(!email.match(emailPattern)){
        alert("Enter a valid email. Example: stacey20@gmail.com");
        return false;
    }

    if(phone.length != 10 || isNaN(phone)){
        alert("Phone number must contain exactly 10 digits.");
        return false;
    }

    if(gender == ""){
        alert("Please select your gender.");
        return false;
    }

    alert("Form Submitted Successfully!");
    return true;
}
