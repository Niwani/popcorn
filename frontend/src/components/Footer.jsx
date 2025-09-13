import colouredPopcorn from "../assets/colouredCinema.png";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-8 py-12">
      {/* Logo Section */}
      <div className="justify-start mb-10 hidden md:block">
        <img src={colouredPopcorn} alt="Popcorn Logo" className="w-14 h-14" />
      </div>

      {/* Links Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
        <div>
          <h4 className="font-bold mb-3">The Good</h4>
          <ul className="space-y-1">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">Manifesto</li>
            <li className="hover:underline cursor-pointer">Research</li>
            <li className="hover:underline cursor-pointer">Careers</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-3">The Boring</h4>
          <ul className="space-y-1">
            <li className="hover:underline cursor-pointer">Terms</li>
            <li className="hover:underline cursor-pointer">Privacy</li>
            <li className="hover:underline cursor-pointer">Play by the Rules</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-3">The Cool</h4>
          <ul className="space-y-1">
            <li className="hover:underline cursor-pointer">Twitter (X)</li>
            <li className="hover:underline cursor-pointer">Instagram</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-3">Contact</h4>
          <ul className="space-y-1">
            <li className="hover:underline cursor-pointer">Email Us</li>
            <li className="hover:underline cursor-pointer">Support</li>
          </ul>
        </div>
      </div>

      {/* Branding */}
      <p className="text-center mt-12 text-white text-4xl md:text-6xl font-medium">
        Popcorn
      </p>
    </footer>
  );
}
