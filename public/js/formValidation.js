/*
  form er moddhe ei vabe valid-feedback and invalid-feedback div gulo add korte hobe
  jemon:
  first form a class="needs-validation" dite hobe 
  then novalidate dite hobe form tag e
  example:
  <form class="needs-validation" novalidate>
    ...
  </form>
  then prottek input field er pore ei vabe div gulo add korte hobe
  jemon:
  <div class="valid-feedback">Title Looks good!</div>
  <div class="invalid-feedback">Please provide a valid Title.</div>
*/

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false,
    );
  });
})();
