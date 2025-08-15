// Sample form data
const formData = {
  name: "John Doe",
  email: "john@example.com",
  age: 25,
  termsAccepted: true
};

// Validation rules
const validations = [
  {
    field: "name",
    isValid: value => value.trim().length > 0,
    message: "Name cannot be empty."
  },
  {
    field: "email",
    isValid: value => /\S+@\S+\.\S+/.test(value),
    message: "Invalid email format."
  },
  {
    field: "age",
    isValid: value => Number.isInteger(value) && value > 0,
    message: "Age must be a positive integer."
  },
  {
    field: "termsAccepted",
    isValid: value => value === true,
    message: "You must accept the terms."
  }
];

// ✅ Check if all validations pass (every)
const allValid = validations.every(rule => rule.isValid(formData[rule.field]));
console.log("All valid?", allValid); // true or false

// ❌ Check if there is any failed validation (some)
const hasErrors = validations.some(rule => !rule.isValid(formData[rule.field]));
console.log("Has errors?", hasErrors); // true or false

// Show error messages for failed rules
if (hasErrors) {
  validations
    .filter(rule => !rule.isValid(formData[rule.field]))
    .forEach(rule => console.log("Error:", rule.message));
}
