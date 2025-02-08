import React from "react";
import { useState } from "react";
import Label from "./label";
import Input from "./input";
import { FormDataType } from "../types";
import ErrorMessage from "./ErrorMessage";
import Button from "./button";
import {
  evaluatePasswordStrength,
  validateEmail,
  validatePassword,
} from "../helpers/validation";
import { signUp } from "../api/authentication";
import { useNavigate } from "react-router";
import { FiEye, FiEyeOff } from "react-icons/fi";
import PasswordStrength from "./passwordstrength";

const SignupForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [animate, setAnimate] = useState(false);
  const [formData, setFormData] = useState<FormDataType>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<FormDataType>({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [passwordStrength, setPasswordStrength] = useState<number>(0);

  const handleBlur = (field: keyof FormDataType) => {
    const newErrors = { ...errors };

    if (field === "email") {
      newErrors.email = validateEmail(formData.email);
    } else if (field === "password") {
      newErrors.password = validatePassword(formData.password);
    }

    setErrors(newErrors);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { email, password } = formData;

    const newErrors: FormDataType = {
      email: validateEmail(email),
      password: validatePassword(password),
    };

    // Check if there are no errors
    if (newErrors.email || newErrors.password) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 1000);
      setLoading(false);
      setErrors(newErrors);
      return;
    }

    try {
      await signUp(email, password);
      navigate("/registered");
    } catch (error) {
      if (error instanceof Error) {
        setErrors({ ...errors, password: error.message });
      } else {
        setErrors({ ...errors, password: "An unknown error occurred" });
      }
    }
    setLoading(false);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, password: e.target.value });
    // Validate Password errors
    const newErrors = { ...errors };
    newErrors.password = validatePassword(e.target.value);
    setErrors(newErrors);

    setPasswordStrength(evaluatePasswordStrength(e.target.value));
  };

  return (
    <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
      {/* Input Section */}
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          {/* Input Group */}
          <div className="flex w-full">
            <Label text="Email" htmlFor="email" />
          </div>
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
            isPassword={false}
          />
          {errors.email && <ErrorMessage message={errors.email} />}
        </div>
        <div className="flex flex-col gap-2">
          {/* Input Group */}
          <div className="flex w-full">
            <Label text="Password" htmlFor="password" />
          </div>

          <div className="flex items-center w-full border border-border-grey rounded-md focus-within:ring-2 focus-within:ring-blue-500 pointer-events-none">
            <Input
              placeholder=""
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              error={!!errors.password}
              onBlur={() => handleBlur("password")}
              onChange={handlePasswordChange}
              isPassword={true}
            />
            {formData.password.length > 0 && (
              <button
                type="button"
                className="pr-2.5 h-10 pointer-events-auto cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            )}
          </div>

          {formData.password && (
            <PasswordStrength passwordStrength={passwordStrength} />
          )}

          {errors.password && <ErrorMessage message={errors.password} />}
        </div>
      </div>

      <Button
        text="Sign Up"
        type="submit"
        // enable={enableSignUpButton(formData, errors)}
        enable={true}
        loading={loading}
        loadingText="Registering"
        shake={animate}
      />
    </form>
  );
};

export default SignupForm;
