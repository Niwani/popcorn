import qr from "../assets/qr-code.png";
import socialSecurity from "../assets/socialsecurity.png"

export default function Pricing() {
    return (
      <section className="text-center px-6 py-16">
        <h2 className="text-5xl font-light mb-4 font-serif">
          A US number, <br />with peace of mind.
        </h2>
        <p className="text-gray-600 mb-10 font-sans">
          Get started in 72 Seconds. <br />Activate from anywhere worldwide.
        </p>
  
        <div className="grid md:grid-cols-3 gap-6 justify-center mt-10">
          <div className="border p-6 rounded-xl shadow bg-green-50">
                <div className="bg-white rounded-lg p-20 inline-block mt-10">
                    <p className="mb-2 -mt-4 font-serif">Monthly fee</p>
                    <h1 className="font-light mb-4 text-5xl">$69</h1>
                    <p className="bg-gradient-to-r from-green-50 to-pink-50 mb-2 inline-block font-medium">✓ All inclusive</p>
                </div>
                <p className="mt-10 font-medium text-3xl font-serif">Simple</p>
                <p className="mt-3 font-extralight font-serif text-s">A predictable phone plan <br /> without costly roaming fees.</p>
          </div>

          <div className="border p-6 rounded-xl shadow bg-blue-50">
                <div className="bg-white rounded-lg p-10 inline-block mt-10">
                    <img src={qr} className="w-50 h-50" />
                </div>
                <h3 className="mt-6 font-medium text-3xl font-serif">Fast & Easy</h3>
                <p className="mt-3 font-extralight font-serif text-s">Get started in minutes. Just scan <br /> a QR code and you are ready to go.</p>
          </div>

          <div className="border p-6 rounded-xl shadow bg-pink-100">
            <div className="relative rounded-lg overflow-hidden flex justify-center items-center mt-10">
              <div className="absolute left-4 top-10 w-50 h-50 bg-fuchsia-50 rounded-lg items-center justify-center text-base font-semibold  opacity-70 z-0">
              <img src={socialSecurity} alt="social security" className="mx-auto w-8 h-8 mb-2" />
              <p className="mt-4">Social Security <br /> Number</p>
                <p className="px-2 py-1 text-green-500 bg-green-50 rounded text-sm font-medium mt-5">
                  ✓ Not needed
                </p>
              </div>
              <div className="absolute right-4 top-10 w-50 h-50 bg-fuchsia-50 rounded-lg items-center justify-center text-base font-semibold opacity-70 z-0">
              <img src={socialSecurity} alt="social security" className="mx-auto w-8 h-8 mb-2" />
              <p className="mt-4">Social Security <br /> Number</p>
                <p className="px-2 py-1 text-green-500 bg-green-50 rounded text-sm font-medium mt-5">
                  ✓ Not needed
                </p>
              </div>
              <div className="relative w-50 h-70 bg-white rounded-lg flex flex-col items-center justify-center text-lg font-bold shadow-xl z-10 p-4 text-center">
                <img src={socialSecurity} alt="social security" className="w-8 h-8 mb-2 -mt-5" />
                <p className="mt-4">Social Security <br /> Number</p>
                <p className="px-2 py-1 text-green-500 bg-green-50 rounded text-sm font-medium mt-5">
                  ✓ Not needed
                </p>
              </div>
          </div>

          {/* Card footer like others */}
          <h3 className="mt-6 font-medium text-3xl font-serif">Expat Friendly</h3>
          <p className="mt-3 font-extralight font-serif text-sm">
            No SSN or US bank needed. <br />Activate before arriving in the US.
          </p>
        </div>

        </div>
      </section>
    );
  }
  