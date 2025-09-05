import stock from "../assets/stock.jpg"

export default function Hero() {
  return (
    <section className="text-center px-6 py-16">
      <p className="bg-gradient-to-r from-green-50 to-pink-50 inline-block px-4 py-2 rounded-full mb-4 text-sm font-serif">
        Hey! We launched our Alpha!
      </p>
      <h1 className="text-4xl md:text-5xl font-medium mb-4">
        One global plan. <br /> No hassle.
      </h1>
      <p className="text-gray-600 mb-6 font-serif">
        Enjoy unlimited global service for $69/mo. <br />
        No roaming fees, or headaches.
      </p>
      <div className="justify-center gap-2 border px-4 py-2 rounded-full inline-block">
        <input
          type="email"
          placeholder="Enter your e-mail"
          className=""
        />
        <button className="bg-black text-white px-6 py-2 rounded-full">
          Sign up
        </button>
      </div>

      <div className="flex justify-center mt-10">
  <div className="relative inline-block mx-auto">
    <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-orange-300 via-pink-300 to-green-500 rounded-lg"></div>
    <img
      src={stock}
      alt="Phone mockups"
      className="w-[650px] h-[450px] opacity-90 block rounded-lg relative"
    />
  </div>
</div>

    </section>
  );
}
