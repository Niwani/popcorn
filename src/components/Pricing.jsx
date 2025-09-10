import qr from "../assets/qr-code.png";
import socialSecurity from "../assets/socialsecurity.png";

export default function Pricing() {
  return (
    <section className="px-6 py-16 justify-center">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl font-light mb-4 font-serif">
          A US number, <br />with peace of mind.
        </h2>
        <p className="text-gray-600 mb-10 font-sans">
          Get started in 72 Seconds. <br />Activate from anywhere worldwide.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-16 px-4">
            {/* Box 1 */}
            <div className=" p-6 rounded-xl bg-green-50 flex flex-col justify-between h-full">
              <div className="bg-white rounded-lg p-6 inline-block">
                <p className="mb-2 font-serif">Monthly fee</p>
                <h1 className="font-light mb-4 text-2xl">$69</h1>
                <p className="bg-gradient-to-r from-green-50 to-pink-50 mb-2 inline-block font-medium px-2 py-1 text-xs rounded">
                  ✓ All inclusive
                </p>
              </div>
              <div>
                <p className="mt-6 font-medium text-xl font-serif">Simple</p>
                <p className="mt-3 font-extralight font-serif text-sm">
                  A predictable phone plan <br /> without costly roaming fees.
                </p>
              </div>
            </div>

            {/* Box 2 */}
            <div className=" p-6 rounded-xl shadow bg-blue-50 flex flex-col justify-between h-full">
              <div className="bg-white rounded-lg p-6 inline-block">
                <img src={qr} className="w-20 h-20 mx-auto" />
              </div>
              <div>
                <h3 className="mt-6 font-medium text-xl font-serif">Fast & Easy</h3>
                <p className="mt-3 font-extralight font-serif text-sm">
                  Get started in minutes. Just scan <br /> a QR code and you are ready to go.
                </p>
              </div>
            </div>

            {/* Box 3 */}
            <div className=" p-6 rounded-xl shadow bg-pink-100 flex flex-col justify-between h-full">
              <div className="relative flex justify-center items-center h-32">
                {/* Left */}
                <div className="absolute left-3 top-3 w-20 h-24 bg-fuchsia-50 rounded-lg flex flex-col items-center justify-center text-[10px] font-semibold opacity-70 z-0">
                  <img src={socialSecurity} alt="social security" className="w-5 h-5 mb-1" />
                  <p>Social Security</p>
                  <p>Number</p>
                </div>
                {/* Right */}
                <div className="absolute right-3 top-3 w-20 h-24 bg-fuchsia-50 rounded-lg flex flex-col items-center justify-center text-[10px] font-semibold opacity-70 z-0">
                  <img src={socialSecurity} alt="social security" className="w-5 h-5 mb-1" />
                  <p>Social Security</p>
                  <p>Number</p>
                </div>
                {/* Center */}
                <div className="relative w-24 h-28 bg-white rounded-lg flex flex-col items-center justify-center text-xs font-bold shadow-xl z-10 p-2 text-center">
                  <img src={socialSecurity} alt="social security" className="w-5 h-5 mb-1" />
                  <p>Social Security</p>
                  <p>Number</p>
                  <p className="px-2 py-1 text-green-500 bg-green-50 rounded text-[10px] font-medium mt-2">
                    ✓ Not needed
                  </p>
                </div>
              </div>
              <div>
                <h3 className="mt-6 font-medium text-xl font-serif">Expat Friendly</h3>
                <p className="mt-3 font-extralight font-serif text-sm">
                  No SSN or US bank needed. <br />Activate before arriving in the US.
                </p>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
