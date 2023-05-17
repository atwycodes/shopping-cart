import React from "react";
import ThemeSwitcher from "./utils/ThemeSwitcher";

function Header() {
  return (
    <div className="flex items-center justify-between bg-slate-900 p-4 text-slate-900 dark:bg-slate-50 dark:text-slate-900">
      <div className="navbar-primary">FakeStore</div>
      <ul className="flex gap-8 ">
        <li className="navbar-primary">Home</li>
        <li className="navbar-primary">About</li>
        <li className="navbar-primary">Shop</li>
      </ul>
      <div>
        <ThemeSwitcher />
      </div>
    </div>
  );
}

export default Header;
