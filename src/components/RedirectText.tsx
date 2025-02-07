import { Link } from "react-router";

interface LinkProps {
  text: string;
  to: string;
  underline: boolean;
}

const RedirectText = ({ text, to, underline }: LinkProps) => {
  return (
    <Link
      to={to}
      className={`${underline ? "underline underline-offset-4" : ""}  hover:opacity-70`}
    >
      {text}
    </Link>
  );
};

export default RedirectText;
