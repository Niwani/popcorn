import { Link, useLocation } from "react-router-dom";
import cinema from "../assets/cinema.png";

export default function Navbar() {
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Manifesto", path: "/manifesto" },
    { name: "Research", path: "/research" },
    { name: "Careers", path: "/careers" },
  ];

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white font-serif">
     
      <Link className="flex items-center space-x-2" to="/">
        <img src={cinema} className="size-8" alt="Popcorn logo" />
        <div className="font-bold text-lg font-serif">Popcorn</div>
      </Link>

    
      <ul className="flex gap-6 mr-10">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              to={link.path}
              className={`cursor-pointer transition 
                ${location.pathname === link.path
                  ? "text-blue-600 font-semibold underline underline-offset-4"
                  : "text-gray-600 hover:text-gray-900"}`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>


      <button className="bg-black text-white px-5 py-3 rounded-full whitespace-nowrap hover:bg-sky-700">
        Sign up
      </button>
    </nav>
  );
}
