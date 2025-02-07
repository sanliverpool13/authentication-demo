import AuthCard from "../components/authcard";
import Title from "../components/title";
import Explanation from "../components/explanation";
import ResetForm from "../components/resetform";

const ForgotPassword = () => {
  return (
    <AuthCard>
      <Title text="Reset your password" />
      <Explanation text="Enter the email address associated with your account and we'll send you a link to reset your password" />
      <ResetForm />
    </AuthCard>
  );
};

export default ForgotPassword;
