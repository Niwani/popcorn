import phone from "../assets/phone.png";
import SignUp from "./SignUp";

export default function CTA() {
  return (
    <section className="relative rounded-xl mt-10 px-6 py-20 overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        
        <div className="bg-sky-100 p-6 rounded-2xl shadow-md w-full md:w-1/2 relative z-0">
          <h2 className="text-3xl font-medium mb-6">
            Get connected <br /> in 72 seconds
          </h2>
          <ol className="list-inside w-72 text-gray-700 space-y-2 mx-auto md:mx-0">
            <li className="bg-sky-50 p-4 rounded-xl shadow flex">
              <p className="flex rounded-full w-9 h-9 p-3 bg-white">1</p>
              <p className="mt-2 ml-4">Sign up</p>
            </li>
            <li className="bg-sky-50 p-4 rounded-xl shadow flex">
              <p className="flex rounded-full w-9 h-9 p-3 bg-white">2</p>
              <p className="mt-2 ml-4">Install eSim</p>
            </li>
            <li className="bg-sky-50 p-4 rounded-xl shadow flex">
              <p className="flex rounded-full w-9 h-9 p-3 bg-white">3</p>
              <p className="mt-2 ml-4">You're online!</p>
            </li>
            <div className="justify-self-end -mr-5 -mt-5 -rotate-10">
              <p className="inline-block px-2 py-1 rounded-xl bg-gradient-to-r from-white via-green-50 to-pink-50">
                Yes, it's that easy ✓
              </p>
            </div>
          </ol>
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block">
          <img
            src={phone}
            alt="Phone"
            className="w-[380px] h-auto drop-shadow-2xl"
          />
        </div>

        <div className="text-end bg-black text-white p-8 rounded-2xl shadow-md w-full md:w-1/2 h-auto relative z-0">
          <div className="mt-10">
            <h3 className="text-3xl font-semibold mb-4 font-sans">
              One plan, <br /> one price.
            </h3>
            <div>
              <p className="text-6xl mb-4">$69</p>
              <p className="-mt-2">per month</p>
            </div>
            <SignUp className="relative mt-12 w-fit ml-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
