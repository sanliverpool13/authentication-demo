import { fields } from "./types";

interface PasswordInputProps {
  fields: fields;
}

const PasswordInput = ({ fields }: PasswordInputProps) => (
  <input
    {...fields}
    className={`w-full rounded-md p-2.5 h-10 text-base focus:outline-none pointer-events-auto`}
  />
);

export default PasswordInput;
