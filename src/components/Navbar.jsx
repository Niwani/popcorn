export default function Navbar() {
    return (
      <nav className="flex justify-between px-6 py-4 bg-white font-serif ">
        <div className="flex items-center space-x-4 ml-100">
            <div className="flex">
                <img src="/cinema.png" className="size-8" />
                <div className="font-bold text-lg flex font-serif">Popcorn</div>
            </div>
            <ul className="flex gap-6 text-gray-700 list-none space-x-2 mr-100">
            <li className="underline">Home</li>
            <li className="hover:underline">Manifesto</li>
            <li className="hover:underline">Research</li>
            <li className="hover:underline">Careers</li>
            </ul>
        </div>
        <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-sky-700">Sign up</button>
      </nav>
    );
  }
  