import { NavLink } from "react-router-dom";
import cinema from "../assets/cinema.png";

export default function Navbar() {
  const links = [
    { name: "Home", path: "/" },
    { name: "Manifesto", path: "/manifesto" },
    { name: "Research", path: "/research" },
    { name: "Careers", path: "/careers" },
  ];

  return (
    <nav className="flex justify-between px-7 py-4 bg-white font-serif">
      <div className="flex items-center space-x-4 ml-20">
        <NavLink to="/" className="flex items-center gap-2">
          <img src={cinema} alt="Logo" className="size-8" />
          <span className="font-bold text-lg font-serif">Popcorn</span>
        </NavLink>

        <ul className="flex gap-6 ml-10">
          {links.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `cursor-pointer transition ${
                    isActive
                      ? "text-blue-600 font-semibold underline underline-offset-4"
                      : "text-gray-600 hover:text-gray-900"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <button className="bg-black text-white px-5 py-3 rounded-full mr-20 hover:bg-pink-700 cursor-pointer fill">
        Sign up
      </button>
    </nav>
  );
}

  

