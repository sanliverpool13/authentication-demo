import Title from "../components/title";
import Explanation from "../components/explanation";
import RedirectText from "../components/RedirectText";
import AuthCard from "../components/authcard";

const LoggedIn = () => {
  return (
    <AuthCard>
      <Title text="Wow you are logged in!" />
      <Explanation text="This is a mock authentication app. Thanks for logging in. To test sign up and login again, please click to log out below." />
      <RedirectText text="Logout" to="/" underline />
    </AuthCard>
  );
};

export default LoggedIn;
