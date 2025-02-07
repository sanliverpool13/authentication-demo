import AuthCard from "../components/authcard";
import AuthRedirect from "../components/authredirect";
import SignupForm from "../components/signupform";
import Title from "../components/title";

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
