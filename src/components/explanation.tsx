import React from "react";

interface ExplanationProps {
  text: string;
}

const Explanation = ({ text }: ExplanationProps) => {
  return <p className="text-base">{text}</p>;
};

export default Explanation;
