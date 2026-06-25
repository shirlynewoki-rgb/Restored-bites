// Form Validation
function validateForm(){

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let gender = document.getElementById("gender").value;

    // Check if any field is empty
    if(name === "" || email === "" || phone === "" || gender === ""){
        alert("Please fill in the form first!");
        return false;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(!email.match(emailPattern)){
        alert("Enter a valid email. Example: stacey20@gmail.com");
        return false;
    }

    if(phone.length != 10 || isNaN(phone)){
        alert("Phone number must contain exactly 10 digits.");
        return false;
    }

    alert("Form Submitted Successfully!");
    return true;
}
