import Title from "../components/layout/title";
import Explanation from "../components/layout/explanation";
import RedirectText from "../components/layout/RedirectText";
import AuthCard from "../components/layout/authcard";

const ResetSuccess = () => {
  return (
    <AuthCard>
      <Title text="Check your email" />
      <Explanation text="This is a mock authentication app. In the real world, if the email matches an email in the system, then we would have sent you an email containing further instructions on how to reset the password." />
      <RedirectText
        text="Go Back To Login"
        to="/"
        underline
        alignRight={false}
      />
    </AuthCard>
  );
};

export default ResetSuccess;
