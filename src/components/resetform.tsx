import Label from "./label";
import Input from "./input";
import Button from "./button";
import RedirectText from "./RedirectText";
import AuthRedirect from "./authredirect";

const ResetForm = () => {
  return (
    <form className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <Label text="Email" htmlFor="email" />
        <Input
          placeholder="m@example.com"
          type="email"
          id="email"
          name="email"
          value={""}
          error={false}
          onChange={(e) => console.log(e)}
          onBlur={() => console.log("log")}
        />
      </div>

      <Button text="Continue" type="submit" enable={true} />

      <div className="flex justify-center items-center">
        <RedirectText text="Return to login" to="/" underline />
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
