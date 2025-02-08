import { FormDataType } from "../types";

export const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) return "Please enter an email";
  if (!emailRegex.test(email)) return "Please enter a valid email address.";
  return "";
};

export const validatePassword = (password: string) => {
  if (!password) return "Please enter a password";
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{10,}$/;
  if (!passwordRegex.test(password)) {
    return "Password must be at least 10 characters long and include uppercase, lowercase, numbers and special characters";
  }

  return "";
};

export const validateLoginEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) return "Please enter your email";
  if (!emailRegex.test(email)) return "Please enter a valid email address.";
  return "";
};

export const validateLoginPassword = (password: string) => {
  if (!password) return "Please enter a valid password";
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{10,}$/;
  if (!passwordRegex.test(password)) {
    return "Password must be at least 10 characters long and include uppercase, lowercase, numbers and special characters";
  }

  return "";
};

export const enableSignUpButton = (
  formData: FormDataType,
  errors: FormDataType,
) => {
  if (!formData.email || !formData.password) {
    return false;
  }

  if (errors.email || errors.password) {
    return false;
  }

  return true;
};

export const evaluatePasswordStrength = (password: string): number => {
  let strength = 0;

  if (password.length >= 10) strength++; // Minimum length
  if (/[A-Z]/.test(password)) strength++; // Uppercase letters
  if (/[a-z]/.test(password)) strength++; // Lowercase letters
  if (/[0-9]/.test(password)) strength++; // Numbers
  if (/[^A-Za-z0-9]/.test(password)) strength++; // Special characters

  if (strength <= 1) return 0; // Too Weak
  if (strength === 2 || strength === 3) return 1; // Medium
  return 2; // Strong
};
