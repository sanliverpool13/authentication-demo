import { Link } from "react-router";

interface LinkProps {
  text: string;
  to: string;
  underline: boolean;
  alignRight: boolean;
}

const RedirectText = ({ text, to, underline, alignRight }: LinkProps) => {
  return (
    <Link
      to={to}
      className={`w-full ${alignRight ? "text-right" : "text-center"} ${underline ? "underline underline-offset-4" : ""}  hover:opacity-70`}
    >
      {text}
    </Link>
  );
};

export default RedirectText;
