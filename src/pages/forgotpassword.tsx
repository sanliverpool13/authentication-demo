import AuthCard from "../components/layout/authcard";
import Title from "../components/layout/title";
import Explanation from "../components/layout/explanation";
import ResetForm from "../components/forms/resetform";

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
