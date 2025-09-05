import { Link } from "react-router-dom";

import cinema from "../assets/cinema.png"

export default function Navbar() {
    return (
      <nav className="flex justify-between px-6 py-4 bg-white font-serif ">
        <div className="flex items-center space-x-4 ml-20">
            <div className="flex">
              <Link className="flex" to="/">
                <img src={cinema} className="size-8" />
                <div className="font-bold text-lg flex font-serif">Popcorn</div>
              </Link>
            </div>
            <ul className="flex gap-6 text-gray-700 list-none space-x-2 mr-100">
            <li className="underline"><Link to="/">Home</Link></li>
            <li className="hover:underline"><Link to="/manifesto">Manifesto</Link></li>
            <li className="hover:underline"><Link to="/research">Research</Link></li>
            <li className="hover:underline"><Link to="/careers">Careers</Link></li>
            </ul>
        </div>
        <button className="bg-black text-white px-4 py-2 rounded-full mr-29 hover:bg-sky-700">Sign up</button>
      </nav>
    );
  }
  