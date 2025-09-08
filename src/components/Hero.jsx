import twoPhones from "../assets/two-phones.png"
import SignUp from "./SignUp";

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
      <div className="relative z-10">
        <SignUp className="justify-center inline-block" />
      </div>
      
      

      <div className="flex justify-center mt-10">
  <div className="relative inline-block mx-auto">
    <div className="absolute inset-0 h-full w-full rounded-lg"></div>
    <img
      src={twoPhones}
      alt="Phone mockups"
      className="w-[500px] h-[600px] opacity-90 block rounded-lg relative"
    />
  </div>
</div>

    </section>
  );
}
