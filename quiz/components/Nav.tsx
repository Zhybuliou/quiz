import Link from "next/link";
import React from "react";
import ToggleMode from "./ToggleMode";

const Nav = () => {
  return (
    <nav className="flex flex-col items-center border-b py-5 bg-secondary">
      <div className="flex justify-between max-w-6xl w-full">
        <div className="flex items-center gap-5">
          <h1 className="text-3xl">QUIZ</h1>
        </div>
        <div className="flex items-center gap-5">
          <Link href="/">login</Link>
          <ToggleMode />
        </div>
      </div>
    </nav>
  );
};

export default Nav;