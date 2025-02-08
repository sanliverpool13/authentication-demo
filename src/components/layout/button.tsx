interface ButtonProps {
  text: string;
  type: "submit" | "reset" | "button" | undefined;
  enable: boolean;
  loading: boolean;
  loadingText: string;
  shake: boolean;
}

const Button = ({
  text,
  type,
  enable,
  loading,
  loadingText,
  shake,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={` ${shake ? "animate-shake" : ""} py-2.5 flex gap-2 justify-center items-center rounded-md h-10  bg-black text-white text-base hover:opacity-80 cursor-pointer disabled:hover:opacity-100 disabled:cursor-auto`}
      disabled={!enable}
    >
      {loading ? loadingText : text}
      {loading && (
        <div className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
      )}
    </button>
  );
};

export default Button;
