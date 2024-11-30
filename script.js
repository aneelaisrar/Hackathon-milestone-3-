var from = document.getElementById('resumeForm');
var resumeDisplayElement = document.getElementById('resume-display');
//Handle from submission
from.addEventListener('submit', function (event) {
    event.preventDefault();
    // Get references to form elements using their IDs
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Create resume danamcly
    var resumeHTML = "\n        <h2><b>Resume</b></h2>\n        <h3>Personal Information</h3>\n        <p><b>Name:</b> ".concat(name, "</p>\n        <p><b>Email:</b> ").concat(email, "</p>\n        <p><b>Phone Number:</b> ").concat(phone, "</p\n\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n\n        <h3>Work Experience</h3>\n        <p>").concat(experience, "</p>\n\n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n        ");
    // display the genreted resumre
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display is missing.');
    }
});
