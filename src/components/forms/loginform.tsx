import { useState } from "react";
import TextInput from "../input/TextInput";
import Label from "../input/label";
import { FormDataType } from "../../types";
import ErrorMessage from "../input/ErrorMessage";
import RedirectText from "../layout/RedirectText";
import Button from "../layout/button";
import { validateLoginEmail } from "../../helpers/validation";
import { FiEye, FiEyeOff } from "react-icons/fi";
import PasswordInput from "../input/PasswordInput";
import { login } from "../../api/authentication";
import { useNavigate } from "react-router";

const LoginForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [animate, setAnimate] = useState(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();
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
    }

    setErrors(newErrors);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const newErrors = {
      ...errors,
      email: validateLoginEmail(formData.email),
    };

    if (newErrors.email) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 1000);
      setLoading(false);
      setErrors(newErrors);
      return;
    }

    const { email, password } = formData;
    try {
      await login(email, password);

      navigate("/loggedin");
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
          <TextInput
            fields={{
              placeholder: "m@example.com",
              type: "email",
              id: "email",
              name: "email",
              value: formData.email,
              onChange: (e) =>
                setFormData({ ...formData, email: e.target.value }),
              onBlur: () => handleBlur("email"),
            }}
            error={!!errors.email}
          />
          {errors.email && <ErrorMessage message={errors.email} />}
        </div>
        <div className="flex flex-col gap-2">
          {/* Input Group */}
          <div className="flex justify-between gap-4">
            <div className="flex w-full">
              <Label text="Password" htmlFor="password" />
            </div>
            <RedirectText
              text="Forgot my password?"
              to="/reset"
              underline={false}
              alignRight={true}
            />
          </div>
          <div className="flex items-center w-full border border-border-grey rounded-md focus-within:ring-2 focus-within:ring-blue-500 pointer-events-none">
            <PasswordInput
              fields={{
                placeholder: "",
                type: showPassword ? "text" : "password",
                id: "password",
                name: "password",
                value: formData.password,
                onBlur: () => handleBlur("password"),
                onChange: handlePasswordChange,
              }}
              // error={!!errors.password}
              // isLogin={false}
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
          {errors.password && <ErrorMessage message={errors.password} />}
        </div>
      </div>

      <Button
        text="Login"
        type="submit"
        enable={true}
        loading={loading}
        loadingText="Logging In"
        shake={animate}
      />
    </form>
  );
};

export default LoginForm;
