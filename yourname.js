
//Form
function validateForm() {

    clearErrors();

    // Form values
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    
    // Quiz answers
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3Checked = document.querySelectorAll('input[name="q3"]:checked');
    const q4 = document.getElementById('q4').value.trim();
    const q5 = document.getElementById('q5').value.trim();
    
    let isValid = true;

    if (!/^[A-Za-z]+$/.test(firstName)) {
        document.getElementById('firstNameError').textContent = "Please enter a valid first name with only letters.";
        isValid = false;
    }

    if (!/^[A-Za-z]+$/.test(lastName)) {
        document.getElementById('lastNameError').textContent = "Please enter a valid last name with only letters.";
        isValid = false;
    }

    if (!validateEmail(email)) {
        document.getElementById('emailError').textContent = "Please enter a valid email address.";
        isValid = false;
    }


    // Q1
    if (!q1) {
        document.getElementById('q1Error').textContent = "Please select an answer for Question 1.";
        isValid = false;
    } else if (q1.value !== "pacific") {
        document.getElementById('q1Error').textContent = "The correct answer is 'Pacific Ocean'.";
        isValid = false;
    }

    // Q2
    if (!q2) {
        document.getElementById('q2Error').textContent = "Please select an answer for Question 2.";
        isValid = false;
    } else if (q2.value !== "stockholm") {
        document.getElementById('q2Error').textContent = "The correct answer is 'Stockholm'.";
        isValid = false;
    }

    // Q3
    if (q3Checked.length === 0) {
        document.getElementById('q3Error').textContent = "Please select at least one answer for Question 3.";
        isValid = false;
    } else {
        const selectedQ3Values = Array.from(q3Checked).map(input => input.value);
        const correctQ3Answers = ["argentina", "colombia", "chile"];
        if (!correctQ3Answers.every(answer => selectedQ3Values.includes(answer)) || selectedQ3Values.length !== correctQ3Answers.length) {
            document.getElementById('q3Error').textContent = "The correct answers are 'Argentina', 'Colombia', and 'Chile'.";
            isValid = false;
        }
    }

    // Q4
    if (q4.length === 0) {
        document.getElementById('q4Error').textContent = "Please answer Question 4.";
        isValid = false;
    } else if (q4.toLowerCase() !== "tokyo") {
        document.getElementById('q4Error').textContent = "The correct answer is 'Tokyo'.";
        isValid = false;
    }

    // Q5
    if (q5.length > 0) {
        const ratingPattern = /^[1-5]$/; 
        if (!ratingPattern.test(q5)) {
            document.getElementById('q5Error').textContent = "Please enter a number between 1 and 5.";
            isValid = false;
        }
    }

    // Success message
    if (isValid) {
        document.getElementById('successMessage').style.display = 'block';
    } else {
        document.getElementById('successMessage').style.display = 'none';
    }
}

function clearErrors() {
    document.getElementById('firstNameError').textContent = "";
    document.getElementById('lastNameError').textContent = "";
    document.getElementById('emailError').textContent = "";
    document.getElementById('q1Error').textContent = "";
    document.getElementById('q2Error').textContent = "";
    document.getElementById('q3Error').textContent = "";
    document.getElementById('q4Error').textContent = ""; 
    document.getElementById('q5Error').textContent = "";
}

// Email validation 
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
