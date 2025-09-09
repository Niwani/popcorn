import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu } from "lucide-react"; // hamburger icon
import cinema from "../assets/cinema.png";

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Manifesto", path: "/manifesto" },
    { name: "Research", path: "/research" },
    { name: "Careers", path: "/careers" },
  ];

  return (
    <nav className="px-4 py-4 bg-white font-serif">
      <div className="flex justify-between items-center max-w-[1200px] mx-auto">
        {/* Left side: Logo */}
        <Link className="flex items-center space-x-2" to="/">
          <img src={cinema} className="size-8" alt="Popcorn logo" />
          <div className="font-bold text-lg font-serif">Popcorn</div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-6 mr-6">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`cursor-pointer transition 
                  ${
                    location.pathname === link.path
                      ? "text-blue-600 font-semibold underline underline-offset-4"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Sign up button (desktop) */}
        <button className="hidden md:block bg-black text-white px-5 py-3 rounded-full whitespace-nowrap hover:bg-sky-700">
          Sign up
        </button>

        {/* Hamburger (mobile only) */}
        <button
          className="md:hidden text-gray-700 hover:text-black"
          onClick={() => setOpen(!open)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out 
        ${open ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-4"}`}
      >
        <div className="mt-4 space-y-4 px-4">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block ${
                location.pathname === link.path
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700 hover:text-gray-900"
              }`}
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button className="w-full bg-black text-white px-5 py-3 rounded-full hover:bg-sky-700">
            Sign up
          </button>
        </div>
      </div>

    </nav>
  );
}
