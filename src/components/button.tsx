interface ButtonProps {
  text: string;
  type: "submit" | "reset" | "button" | undefined;
  enable: boolean;
}

const Button = ({ text, type, enable }: ButtonProps) => {
  return (
    <button
      type={type}
      className="py-2.5 flex justify-center items-center rounded-md h-10  bg-black text-white text-base hover:opacity-80 cursor-pointer disabled:hover:opacity-100 disabled:cursor-auto"
      disabled={!enable}
    >
      {text}
    </button>
  );
};

export default Button;
