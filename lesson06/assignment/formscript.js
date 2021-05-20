// Based on the Bootstrap docs: https://getbootstrap.com/docs/5.0/forms/validation/#custom-styles

// Form variables
let fname = document.contactForm.firstName;
let lname = document.contactForm.lastName;
let email = document.contactForm.email;
let pnum = document.contactForm.phoneNum;
let time = document.contactForm.timezone;
let msg = document.contactForm.textboxbody;

// Disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');

        // If the form has something invalid, use Alert to alert the user to fix and try again
        if (fname.value.length <= 0 || lname.value.length <= 0 || email.value.length <= 0 || pnum.value.length <= 0 || time.value.length <= 0 || msg.value.length <= 0) {
          alert('Please fix the missing requirement(s) and try again.');
        }
        // To check the checkboxes
      }, false);
    })
})()
