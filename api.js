// Checks the form and sends it.

// Regex check for a valid-looking email
function isValidEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

// Returns an error message, or "" if everything is fine
function validateForm(data) {
  if (!data.name) return "Please enter your name.";
  if (!data.email) return "Please enter your email.";
  if (!isValidEmail(data.email)) return "Email looks invalid.";
  if (!data.message) return "Please write a message.";
  return "";
}

// Pretend to send the form (replace with real fetch later)
async function sendForm(data) {
  return true;
}

export { isValidEmail, validateForm, sendForm };
