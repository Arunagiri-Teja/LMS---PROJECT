document.addEventListener("DOMContentLoaded", () => {
  const checkbox = document.getElementById("acceptCheckbox");
  const continueBtn = document.getElementById("continueBtn");
  const termsContent = document.getElementById("termsContent");

  // Enable or disable the continue button based on checkbox
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      continueBtn.classList.add("active");
      continueBtn.removeAttribute("disabled");
    } else {
      continueBtn.classList.remove("active");
      continueBtn.setAttribute("disabled", true);
    }
  });

  // Optional: Add scroll styling if needed
  termsContent.addEventListener("scroll", () => {
    if (termsContent.scrollTop > 20) {
      termsContent.classList.add("scrolled");
    } else {
      termsContent.classList.remove("scrolled");
    }
  });
});



