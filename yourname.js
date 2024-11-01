function validateForm() {
    // Clear previous error messages
    clearErrors();

    // Get form values
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    
    // Quiz answers
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2Checked = document.querySelectorAll('input[name="q2"]:checked');
    const q4Checked = document.querySelectorAll('input[name="q4"]:checked');
    const q5 = document.getElementById('q5').value.trim();
    const q3 = document.getElementById('q3').value.trim();  // Get value for Question 3
    
    let isValid = true;

    // Validate first name
    if (!/^[A-Za-z]+$/.test(firstName)) {
        document.getElementById('firstNameError').textContent = "Please enter a valid first name with only letters.";
        isValid = false;
    }

    // Validate last name
    if (!/^[A-Za-z]+$/.test(lastName)) {
        document.getElementById('lastNameError').textContent = "Please enter a valid last name with only letters.";
        isValid = false;
    }

    // Validate email
    if (!validateEmail(email)) {
        document.getElementById('emailError').textContent = "Please enter a valid email address.";
        isValid = false;
    }

    // Validate radio button question (Question 1)
    if (!q1) {
        document.getElementById('q1Error').textContent = "Please select an answer for Question 1.";
        isValid = false;
    }

    // Validate checkbox question (Question 2)
    if (q2Checked.length === 0) {
        document.getElementById('q2Error').textContent = "Please select at least one programming language.";
        isValid = false;
    }

    // Validate open-ended question (Question 3)
    if (q3.length === 0) {
        document.getElementById('q3Error').textContent = "Please describe your favorite hobby.";
        isValid = false;
    }
    
    // Validate checkbox question (Question 4)
    if (q4Checked.length === 0) {
        document.getElementById('q4Error').textContent = "Please select at least one favorite fruit.";
        isValid = false;
    }

    // Check if Question 5 has an answer (not required)
    if (q5.length === 0) {
        document.getElementById('q5Error').textContent = "Please describe your dream job.";
    }

    // If the form is valid, show success message
    if (isValid) {
        document.getElementById('successMessage').style.display = 'block';
    } else {
        document.getElementById('successMessage').style.display = 'none';
    }
}

// Function to clear all previous error messages
function clearErrors() {
    document.getElementById('firstNameError').textContent = "";
    document.getElementById('lastNameError').textContent = "";
    document.getElementById('emailError').textContent = "";
    document.getElementById('q1Error').textContent = "";
    document.getElementById('q2Error').textContent = "";
    document.getElementById('q4Error').textContent = "";
    document.getElementById('q3Error').textContent = ""; // Clear error for Question 3
    document.getElementById('q5Error').textContent = "";
}


// Email validation function using regular expression
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

