import AuthCard from "../components/authcard";
import Title from "../components/title";
import LoginForm from "../components/loginform";
import AuthRedirect from "../components/authredirect";

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
