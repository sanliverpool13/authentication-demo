import { FormDataType } from "../types";

export const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) return "";
  if (!emailRegex.test(email)) return "Please enter a valid email address.";
  return "";
};

export const validatePassword = (password: string) => {
  if (!password) return "";
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
