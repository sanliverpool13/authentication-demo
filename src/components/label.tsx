interface LabelProps {
  text: string;
  htmlFor: string;
}

const Label = ({ text, htmlFor }: LabelProps) => {
  return (
    <label htmlFor={htmlFor} className="text-base ">
      {text}
    </label>
  );
};

export default Label;
