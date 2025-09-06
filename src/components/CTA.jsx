import phone from "../assets/phone.png";
import SignUp from "./SignUp";

export default function CTA() {
  return (
    <section className="relative rounded-xl mt-10 flex flex-col md:flex-row justify-between items-center px-6 py-20 gap-10 overflow-hidden">
      
      <div className="bg-sky-100 p-6 rounded-2xl shadow-md w-full md:w-170 relative z-0">
        <h2 className="text-3xl font-medium mb-6">
          Get connected <br /> in 72 seconds
        </h2>
        <div>
          <ol className=" list-inside w-100 text-gray-700 space-y-2">
            <li className="bg-sky-50 p-4 rounded-xl shadow flex">
              <p className="flex rounded-full w-9 h-3 p-3 bg-white ">1</p>
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
          </ol>
          <div className="justify-self-end mr-35 -mt-4 -rotate-10">
            <p className="inline-block px-2 py-1 rounded-xl bg-gradient-to-r  from-white via-green-50 to-pink-50 ">Yes it's that easy ✓</p>
          </div>
        </div>
       
      </div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <img
          src={phone}
          alt="Phone"
          className="w-[450px] h-auto drop-shadow-2xl"
        />
      </div>

      <div className="text-end bg-black text-white p-8 rounded-2xl shadow-md w-full md:w-200 h-120 relative z-0">
        <div className="mt-10">
          <h3 className="text-3xl font-semibold mb-4 font-sans">One plan, <br />one price.</h3>
          <div>
            <p className="text-7xl  mb-6">$69</p>
            <p className="-mt-5">per month</p>
          </div>
          <SignUp className="relative max-w-md mx-auto mt-20 justify-self-end mr-1" />
        </div>
      </div>
    </section>
  );
}
