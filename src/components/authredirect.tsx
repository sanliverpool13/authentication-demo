import RedirectText from "./RedirectText";

interface AuthRedirectProps {
  text: string;
  linkText: string;
  linkTo: string;
}

const AuthRedirect = ({ text, linkText, linkTo }: AuthRedirectProps) => {
  return (
    <div className="flex justify-center items-center">
      <p className="text-base font-normal">
        {text} <RedirectText text={linkText} to={linkTo} underline={true} />
      </p>
    </div>
  );
};

export default AuthRedirect;
