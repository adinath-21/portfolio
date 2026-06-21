// Anything that touches the page (DOM) lives here.

// Smooth scroll when a nav link is clicked
function setupSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const id = link.getAttribute("href");
      const target = document.querySelector(id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

// Highlight the nav link for the section currently on screen
function setupActiveNav() {
  const sectionIds = ["work", "team", "contact"];
  const navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", function () {
    sectionIds.forEach(function (id) {
      const section = document.getElementById(id);
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const isVisible = rect.top <= 100 && rect.bottom >= 100;

      navLinks.forEach(function (link) {
        if (isVisible && link.getAttribute("href") === "#" + id) {
          link.classList.add("active");
        } else if (link.getAttribute("href") === "#" + id) {
          link.classList.remove("active");
        }
      });
    });
  });
}

// Show a message under the form
function showFeedback(message, isError) {
  const box = document.getElementById("form-feedback");
  box.textContent = message;
  box.style.color = isError ? "red" : "green";
}

function clearFeedback() {
  document.getElementById("form-feedback").textContent = "";
}

// Read current input values from the form
function readForm() {
  return {
    name: document.getElementById("f-name").value.trim(),
    email: document.getElementById("f-email").value.trim(),
    subject: document.getElementById("f-subject").value.trim(),
    message: document.getElementById("f-msg").value.trim()
  };
}

// Clear the input boxes
function clearFormInputs() {
  document.getElementById("f-name").value = "";
  document.getElementById("f-email").value = "";
  document.getElementById("f-subject").value = "";
  document.getElementById("f-msg").value = "";
}

export {
  setupSmoothScroll,
  setupActiveNav,
  showFeedback,
  clearFeedback,
  readForm,
  clearFormInputs
};
