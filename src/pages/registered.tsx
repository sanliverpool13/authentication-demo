import Title from "../components/layout/title";
import Explanation from "../components/layout/explanation";
import RedirectText from "../components/layout/RedirectText";
import AuthCard from "../components/layout/authcard";

const Registered = () => {
  return (
    <AuthCard>
      <Title text="Congrats you are registered!" />
      <Explanation text="This is a mock authentication app. Thanks for registering. If it was a real app you would be asked to verify your email right now. To test sign up and login again, please click to log out below." />
      <RedirectText
        text="Return To Login"
        to="/"
        underline
        alignRight={false}
      />
    </AuthCard>
  );
};

export default Registered;
