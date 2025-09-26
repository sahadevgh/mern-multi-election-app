import React from "react";
import { Moon, Vote } from "lucide-react";
import { Link } from "react-router-dom";

const menuItems = [
  { name: "Elections", link: "/elections" },
  { name: "Results", link: "/results" },
  { name: "Logout", link: "/logout" },
];
function Header() {
  return (
    <div className="w-full py-6 bg-blue-700 dark:bg-blue-900 shadow-xl border-b-4 border-blue-500">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div>
          <h1 className="flex items-center gap-1 text-white dark:text-white font-bold cursor-pointer">
            TRANSVOTE
            <Vote />
          </h1>
        </div>
        <div className="flex items-center gap-8">
          <ul className="flex items-center space-x-8 text-white dark:text-white">
            {menuItems.map((item, index) => (
              <li className="hover:text-yellow-400 hover:font-bold hover:underline" key={index}>
                <Link to={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
          <Moon className="text-white cursor-pointer"/>
        </div>
      </div>
    </div>
  );
}

export default Header;
