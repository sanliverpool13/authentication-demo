import React from "react";
import { useState } from "react";
import Label from "./label";
import Input from "./input";
import { FormDataType } from "../types";
import ErrorMessage from "./ErrorMessage";
import Button from "./button";
import {
  enableSignUpButton,
  validateEmail,
  validatePassword,
} from "../helpers/validation";

const SignupForm = () => {
  const [formData, setFormData] = useState<FormDataType>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<FormDataType>({
    email: "",
    password: "",
  });

  const handleBlur = (field: keyof FormDataType) => {
    const newErrors = { ...errors };

    if (field === "email") {
      newErrors.email = validateEmail(formData.email);
    } else if (field === "password") {
      newErrors.password = validatePassword(formData.password);
    }

    setErrors(newErrors);
  };

  const handleSubmit = (e: React.FormEvent) => {
    console.log("handle submit");
    e.preventDefault();

    const newErrors: FormDataType = {
      email: validateEmail(formData.email),
      password: "",
    };

    setErrors(newErrors);

    // Check if there are no errors
    if (!newErrors.email && !newErrors.password) {
      console.log("Form submitted successfully:", formData);
    }
  };

  return (
    <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
      {/* Input Section */}
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          {/* Input Group */}
          <Label text="Email" htmlFor="email" />
          <Input
            placeholder="m@example.com"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            error={!!errors.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            onBlur={() => handleBlur("email")}
          />
          {errors.email && <ErrorMessage message={errors.email} />}
        </div>
        <div className="flex flex-col gap-2">
          {/* Input Group */}
          <Label text="Password" htmlFor="password" />
          <Input
            placeholder=""
            type="password"
            id="password"
            name="password"
            value={formData.password}
            error={!!errors.password}
            onBlur={() => handleBlur("password")}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          {errors.password && <ErrorMessage message={errors.password} />}
        </div>
      </div>

      <Button
        text="Sign Up"
        type="submit"
        enable={enableSignUpButton(formData, errors)}
      />
    </form>
  );
};

export default SignupForm;
