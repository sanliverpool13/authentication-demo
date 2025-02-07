import { useState } from "react";
import Label from "./label";
import Input from "./input";
import { FormDataType } from "../types";
import ErrorMessage from "./ErrorMessage";
import RedirectText from "./RedirectText";
import Button from "./button";
import {
  validateLoginEmail,
  validateLoginPassword,
} from "../helpers/validation";

const LoginForm = () => {
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
      newErrors.email = validateLoginEmail(formData.email);
    } else if (field === "password") {
      newErrors.password = validateLoginPassword(formData.password);
    }

    setErrors(newErrors);
  };

  const handleSubmit = (e: React.FormEvent) => {
    console.log("handle login submit");
    e.preventDefault();

    const newErrors = {
      ...errors,
      email: validateLoginEmail(formData.email),
      password: validateLoginPassword(formData.password),
    };

    console.log("new errors", newErrors);

    setErrors(newErrors);

    if (newErrors.email || newErrors.password) {
      return;
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
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            onBlur={() => handleBlur("email")}
            error={!!errors.email}
          />
          {errors.email && <ErrorMessage message={errors.email} />}
        </div>
        <div className="flex flex-col gap-2">
          {/* Input Group */}
          <div className="flex justify-between gap-4">
            <Label text="Password" htmlFor="password" />
            <RedirectText
              text="Forgot my password?"
              to="/reset"
              underline={false}
            />
          </div>
          <Input
            placeholder=""
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            onBlur={() => handleBlur("password")}
            error={!!errors.password}
          />
          {errors.password && <ErrorMessage message={errors.password} />}
        </div>
      </div>

      <Button text="Login" type="submit" enable={true} />
    </form>
  );
};

export default LoginForm;
