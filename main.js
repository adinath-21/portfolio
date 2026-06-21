// Connects state.js, render.js and api.js together.

import { setField, getFormData, clearFormData } from "./state.js";
import {
  setupSmoothScroll,
  setupActiveNav,
  showFeedback,
  clearFeedback,
  readForm,
  clearFormInputs
} from "./render.js";
import { validateForm, sendForm } from "./api.js";

function setupContactForm() {
  const sendBtn = document.getElementById("send-btn");

  sendBtn.addEventListener("click", async function () {
    clearFeedback();

    const values = readForm();
    setField("name", values.name);
    setField("email", values.email);
    setField("subject", values.subject);
    setField("message", values.message);

    const data = getFormData();
    const error = validateForm(data);

    if (error) {
      showFeedback(error, true);
      return;
    }

    const success = await sendForm(data);

    if (success) {
      showFeedback("Message sent!", false);
      clearFormData();
      clearFormInputs();
    } else {
      showFeedback("Something went wrong. Try again.", true);
    }
  });
}

// Run everything once the page loads
document.addEventListener("DOMContentLoaded", function () {
  setupSmoothScroll();
  setupActiveNav();
  setupContactForm();
});
