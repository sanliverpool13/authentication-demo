interface TitleProps {
  text: string;
}

const Title = ({ text }: TitleProps) => {
  return <h4 className="text-2xl">{text}</h4>;
};

export default Title;
