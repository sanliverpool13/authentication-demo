import Title from "../components/layout/title";
import Explanation from "../components/layout/explanation";
import RedirectText from "../components/layout/RedirectText";
import AuthCard from "../components/layout/authcard";

const LoggedIn = () => {
  return (
    <AuthCard>
      <Title text="Wow you are logged in!" />
      <Explanation text="This is a mock authentication app. Thanks for logging in. To test sign up and login again, please click to log out below." />
      <RedirectText text="Logout" to="/" underline alignRight={false} />
    </AuthCard>
  );
};

export default LoggedIn;
