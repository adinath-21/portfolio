// Stores the contact form values in one place (object + properties).

let formData = {
  name: "",
  email: "",
  subject: "",
  message: ""
};

// Update one field
function setField(key, value) {
  formData[key] = value;
}

// Get all current values
function getFormData() {
  return formData;
}

// Reset back to empty
function clearFormData() {
  formData = { name: "", email: "", subject: "", message: "" };
}

export { setField, getFormData, clearFormData };
