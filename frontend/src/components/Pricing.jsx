import qr from "../assets/qr-code.png";
import socialSecurity from "../assets/socialsecurity.png";

export default function Pricing() {
  return (
    <section className="px-6 py-16 justify-center">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl font-light mb-4">
          A US number, <br />with peace of mind.
        </h2>
        <p className="text-gray-600 mb-10 font-sans">
          Get started in 72 Seconds. <br />Activate from anywhere worldwide.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-16 px-4">
            {/* Box 1 */}
            <div className=" p-6 rounded-xl bg-green-50 shadow-2xl flex flex-col justify-between h-full">
              <div className="bg-white rounded-lg p-6 inline-block">
                <p className="mb-2">Monthly fee</p>
                <h1 className="font-light mb-4 text-2xl">$69</h1>
                <p className="bg-gradient-to-r from-green-50 to-pink-50 mb-2 inline-block font-medium px-2 py-1 text-xs rounded">
                  ✓ All inclusive
                </p>
              </div>
              <div>
                <p className="mt-6 font-medium text-xl">Simple</p>
                <p className="mt-3 font-extralight text-sm">
                  A predictable phone plan <br /> without costly roaming fees.
                </p>
              </div>
            </div>

            {/* Box 2 */}
            <div className=" p-6 rounded-xl shadow-2xl bg-blue-50 flex flex-col justify-between h-full">
              <div className="bg-white rounded-lg p-6 inline-block">
                <img src={qr} className="w-30 h-30 mx-auto" />
              </div>
              <div>
                <h3 className="mt-6 font-medium text-xl">Fast & Easy</h3>
                <p className="mt-3 font-extralight text-sm">
                  Get started in minutes. Just scan <br /> a QR code and you are ready to go.
                </p>
              </div>
            </div>

            {/* Box 3 */}
            <div className=" p-10 rounded-xl shadow-2xl flex bg-pink-50 flex-col justify-between h-full">
              <div className="relative flex justify-center items-center h-40">
                {/* Left behind card */}
                <div className="absolute w-28 h-32 bg-fuchsia-50 rounded-lg flex flex-col items-center justify-center text-xs font-semibold opacity-70 z-0 -translate-x-10">
                  <img src={socialSecurity} alt="social security" className="w-6 h-6 mb-1" />
                  <p>Social Security</p>
                  <p>Number</p>
                  <p className="px-2 py-1 text-green-500 bg-green-50 rounded text-xs font-medium mt-2">
                    ✓ Not needed
                  </p>
                </div>

                {/* Right behind card */}
                <div className="absolute w-28 h-32 bg-fuchsia-50 rounded-lg flex flex-col items-center justify-center text-xs font-semibold opacity-70 z-0 translate-x-10">
                  <img src={socialSecurity} alt="social security" className="w-6 h-6 mb-1" />
                  <p>Social Security</p>
                  <p>Number</p>
                  <p className="px-2 py-1 text-green-500 bg-green-50 rounded text-xs font-medium mt-2">
                    ✓ Not needed
                  </p>
                </div>

                {/* Center visible card */}
                <div className="relative w-32 h-40 bg-white rounded-lg flex flex-col items-center justify-center text-sm font-bold shadow-xl z-10 p-2 text-center">
                  <img src={socialSecurity} alt="social security" className="w-6 h-6 mb-1" />
                  <p>Social Security</p>
                  <p>Number</p>
                  <p className="px-2 py-1 text-green-500 bg-green-50 rounded text-xs font-medium mt-2">
                    ✓ Not needed
                  </p>
                </div>
              </div>

              <div>
                <h3 className="mt-6 font-medium text-2xl">Expat Friendly</h3>
                <p className="mt-3 font-extralight text-sm">
                  No SSN or US bank needed. <br />Activate before arriving in the US.
                </p>
              </div>
            </div>

          </div>
        </div>
    </section>
  );
}
