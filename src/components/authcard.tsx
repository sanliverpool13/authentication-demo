import React from "react";

interface AuthCardProps {
  children: React.ReactNode;
}

const AuthCard: React.FC<AuthCardProps> = ({ children }) => {
  return (
    <div className="flex justify-center items-center px-8 py-20 border border-border-grey rounded-xl sm:w-auto  w-full">
      <div className="flex flex-col gap-10 sm:w-[402px] w-full">{children}</div>
    </div>
  );
};

export default AuthCard;
