// Welcome Pop-up
window.onload = function() {
    const overlay = document.createElement('div');
    overlay.id = 'welcomePopup';
    overlay.className = 'popup-overlay';

    const box = document.createElement('div');
    box.className = 'popup-box';

    const heading = document.createElement('h2');
    heading.textContent = 'Welcome to Savory Bites!';

    const message = document.createElement('p');
    message.textContent = 'Enjoy our delicious meals and excellent service.';

    const button = document.createElement('button');
    button.textContent = 'Continue';

    button.onclick = function() {
        overlay.style.display = 'none';
    };

    box.appendChild(heading);
    box.appendChild(message);
    box.appendChild(button);
    overlay.appendChild(box);
    document.body.appendChild(overlay);

    overlay.style.display = 'flex';
};

// Form Validation
function validateForm() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let gender = document.getElementById("gender").value;

    // Check if fields are empty
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
