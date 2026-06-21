/* ==========================
AUTO IMAGE SLIDER
========================== */

let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
slides.forEach(slide => {
slide.classList.remove("active");
});

```
slideIndex++;

if (slideIndex > slides.length) {
    slideIndex = 1;
}

slides[slideIndex - 1].classList.add("active");
```

}

if (slides.length > 0) {
showSlides();
setInterval(showSlides, 4000);
}

/* ==========================
MOBILE MENU TOGGLE
========================== */

const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

if (menuBtn && navMenu) {
menuBtn.addEventListener("click", () => {
navMenu.classList.toggle("show");
});
}

/* ==========================
ADMISSION FORM
========================== */
function doPost(e) {
  var sheet = SpreadsheetApp.openById("1-x0OGFfOKi3InuVGC6wNKORUsvyTL1ERTF0Homx7SS8")
                            .getSheetByName("Form Responses 1");

  // Require at least name + email
  if (!e.parameter.name || !e.parameter.email) {
    return ContentService.createTextOutput("Error: Name and Email are required.");
  }

  sheet.appendRow([
    new Date(),                        // Timestamp
    e.parameter.name,                  // Student name
    e.parameter.dob,                   // Date of birth
    e.parameter.grade,                 // Grade
    e.parameter.father_name,           // Father's name
    e.parameter.mother_name,           // Mother's name
    e.parameter.email,                 // Email
    e.parameter.phone,                 // Phone
    e.parameter.gender                 // Gender
  ]);

  return ContentService.createTextOutput("Form submitted successfully!");
}

const admissionForm = document.getElementById("admission-form")

if (admissionForm) {
  admissionForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const formData = {
      name: document.getElementById("name").value,
      dob: document.getElementById("dob").value,
      grade: document.getElementById("grade").value,
      father_name: document.getElementById("father_name").value,
      mother_name: document.getElementById("mother_name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      gender: document.querySelector('input[name="gender"]:checked')?.value
    };function doPost(e) {
  var sheet = SpreadsheetApp.openById("YOUR_SHEET_ID").getSheetByName("Admissions");
  sheet.appendRow([e.parameter.name, e.parameter.email, e.parameter.phone]);
  return ContentService.createTextOutput("Success");


    fetch(WEB_APP_URL("https://script.google.com/macros/s/AKfycbyZIb7h7AWMY3K2O0dKD5T82PJm1D__c0gmJs1zmftN4y4mGC2nI2NL8KjrTsqUuBna-w/exec") {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(formData)
    });

    alert("Admission Application Submitted Successfully!");
    admissionForm.reset();

};}
