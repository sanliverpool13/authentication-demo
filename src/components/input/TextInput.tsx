import { fields } from "./types";

interface TextInputProps {
  fields: fields;
  error: boolean;
}

const TextInput = ({ fields, error }: TextInputProps) => (
  <input
    {...fields}
    className={`w-full border ${error ? "border-error-light" : "border-border-grey"} rounded-md p-2.5 h-10 text-base`}
  />
);

export default TextInput;
