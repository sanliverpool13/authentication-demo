interface ErrorProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorProps) => {
  return <p className="text-error-light text-base">{message}</p>;
};

export default ErrorMessage;
