import React from "react";
import { Outlet } from "react-router";

const Layout: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* <nav className="w-full flex justify-center p-4">
        <ul className="w-full flex justify-start max-w-4xl">
          <li className="p-4">Login</li>
          <li className="p-4">Register</li>
        </ul>
      </nav> */}
      <main className="w-full flex justify-center flex-grow sm:p-4 px-6">
        <section className="w-full flex justify-center items-center max-w-4xl">
          <Outlet />
        </section>
      </main>
      {/* <footer className="w-full flex justify-center p-4 ">
        <section className="w-full max-w-4xl">
          Made by{" "}
          <a
            href="https://www.sanjarjelet.com/"
            className="underline underline-offset-2 text-border-grey"
          >
            Sanjar Jelet
          </a>
        </section>
      </footer> */}
    </div>
  );
};

export default Layout;
