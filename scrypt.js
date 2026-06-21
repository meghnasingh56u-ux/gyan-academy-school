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

const admissionForm = document.getElementById("admission-form");

if (admissionForm) {
admissionForm.addEventListener("submit", function (e) {
e.preventDefault();
const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzZEqtjLZKjoXRd8yrr5pu54EhZMk6-J9VH4B651uNZxGeVfq413EAgKzIVbZ7Mc6AHkQ/exec";

// Create form data to send const formData = new FormData(admissionForm);
const admissionForm = document.getElementById("admission-form");
function doPost(e) {
  fetch("1-x0OGFfOKi3InuVGC6wNKORUsvyTL1ERTF0Homx7SS8"){
    method: "Post", 
    body: formData,
        mode: "no-cors" // Prevents CORS errors on submission})
      .then(() => {
          alert("Form Submitted Successfully!")
              admissionForm.reset();})
        .catch(error => {
            console.error("Error!",
                          error.massage);
            alert("Something went wrong. Please try again.");
        });
  });
}
        .getSheetByName("Admissions");

  sheet.appendRow([
    new Date(),
    e.parameter.name,
    e.parameter.dob,
    e.parameter.grade,
    e.parameter.mother_name,
    e.parameter.father_name,
    e.parameter.email,
    e.parameter.phone,
    e.parameter.gender
  ]);

  return ContentService.createTextOutput("Form submitted successfully!");
}

if (admissionForm) {
  admissionForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const formData = {
      name: document.getElementById("name").value,
      dob: document.getElementById("dob").value,
      grade: document.getElementById("grade").value,
      mother_name: document.getElementById("mother_name").value,
      father_name: document.getElementById("father_name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      gender: document.querySelector('input[name="gender"]:checked')?.value
    };function doPost(e) {
  var sheet = SpreadsheetApp.openById("YOUR_SHEET_ID").getSheetByName("Admissions");
  sheet.appendRow([e.parameter.name, e.parameter.email, e.parameter.phone]);
  return ContentService.createTextOutput("Success");


    fetch(WEB_APP_URL, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(formData)
    });

    alert("Admission Application Submitted Successfully!");
    admissionForm.reset();

};}
