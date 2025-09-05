import colouredPopcorn from "../assets/colouredCinema.png"

export default function Footer() {
    return (
      <footer className="bg-black text-white px-8 py-12">
        <div>
          <div className="grid md:grid-cols-4 gap-3">
          <div >
            <img src={colouredPopcorn} className="size-8" />
          </div>
            <div>
                <h4 className="font-bold mb-3">The Good</h4>
                <ul className="space-y-1">
                  <li className="hover:underline">Home</li>
                  <li className="hover:underline">Manifesto</li>
                  <li className="hover:underline">Research</li>
                  <li className="hover:underline">Careers</li>
                </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">The Boring</h4>
              <ul className="space-y-1">
                <li className="hover:underline">Terms</li>
                <li className="hover:underline">Privacy</li>
                <li className="hover:underline">Play by the Rules</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">The Cool</h4>
              <ul className="space-y-1">
                <li className="hover:underline">Twitter (X)</li>
                <li className="hover:underline">Instagram</li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-center mt-10 text-white text-9xl font-medium">Popcorn</p>
      </footer>
    );
  }
  