interface PasswordStrengthProps {
  passwordStrength: number;
}

const PasswordStrength = ({ passwordStrength }: PasswordStrengthProps) => {
  return (
    <div className="flex items-center gap-2 mt-2">
      {/* Too Weak */}
      <div
        className={`w-1/3 h-1 rounded ${
          passwordStrength === 0
            ? "bg-red-500"
            : passwordStrength === 1
              ? "bg-yellow-500"
              : "bg-green-500"
        }`}
        // style={{ width: `${(passwordStrength / 5) * 100}%` }}
      />
      {/* Medium */}
      <div
        className={`w-1/3 h-1 rounded ${
          passwordStrength === 0
            ? "bg-border-grey"
            : passwordStrength === 1
              ? "bg-yellow-500"
              : "bg-green-500"
        }`}
        // style={{ width: `${(passwordStrength / 5) * 100}%` }}
      />
      {/* Strong */}
      <div
        className={`w-1/3 h-1 rounded ${
          passwordStrength < 2 ? "bg-border-grey" : "bg-green-500"
        }`}
        // style={{ width: `${(passwordStrength / 5) * 100}%` }}
      />
    </div>
  );
};

export default PasswordStrength;
