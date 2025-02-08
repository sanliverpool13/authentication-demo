import AuthCard from "../components/layout/authcard";
import AuthRedirect from "../components/layout/authredirect";
import SignupForm from "../components/forms/signupform";
import Title from "../components/layout/title";

const Register = () => {
  return (
    <AuthCard>
      <Title text="Create your account" />
      <SignupForm />
      <AuthRedirect
        text="Already have an account?"
        linkText="Login"
        linkTo="/"
      />
    </AuthCard>
  );
};

export default Register;
