import { useState } from "react";
import Label from "./label";
import Input from "./input";
import Button from "./button";
import RedirectText from "./RedirectText";
import AuthRedirect from "./authredirect";
import ErrorMessage from "./ErrorMessage";
import { validateLoginEmail } from "../helpers/validation";
import { resetpassword } from "../api/authentication";
import { useNavigate } from "react-router";

const ResetForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [animate, setAnimate] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Check for errors
    const newError = validateLoginEmail(email);

    if (newError.length > 0) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 1000);
      setLoading(false);
      setError(newError);
      return;
    }

    try {
      await resetpassword(email);
      navigate("/resetsuccess");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  return (
    <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <Label text="Email" htmlFor="email" />
        <Input
          placeholder="m@example.com"
          type="email"
          id="email"
          name="email"
          value={email}
          error={!!error}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => {}}
          isPassword={false}
        />
        {error && <ErrorMessage message={error} />}
      </div>

      <Button
        text="Continue"
        type="submit"
        enable={true}
        loading={loading}
        loadingText="Setting Up Reset"
        shake={animate}
      />

      <div className="flex justify-center items-center">
        <RedirectText
          text="Return to login"
          to="/"
          underline
          alignRight={false}
        />
      </div>

      <AuthRedirect
        text="Don't have an account?"
        linkText="Sign up"
        linkTo="/register"
      />
    </form>
  );
};

export default ResetForm;
