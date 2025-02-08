import AuthCard from "../components/layout/authcard";
import Title from "../components/layout/title";
import LoginForm from "../components/forms/loginform";
import AuthRedirect from "../components/layout/authredirect";

const Login = () => {
  return (
    <AuthCard>
      <Title text="Sign in to your account" />
      <LoginForm />
      <AuthRedirect
        text="Don't have an account?"
        linkTo="/register"
        linkText="Sign Up"
      />
    </AuthCard>
  );
};

export default Login;
