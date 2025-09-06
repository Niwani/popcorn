import { useState } from "react";

export default function SignUp({ className = "" }) {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailTest.test(email)) {
      alert(`🎉 Thank you for signing up, ${email}!`);
      setEmail(""); 
    } else {
      alert("⚠️ Please enter a valid email address.");
    }
  };

  return (
    <div className={`relative max-w-md ${className}`}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your e-mail"
        className="bg-white text-black w-full border rounded-full px-4 py-4 pr-32 outline-none"
      />

      <button
        onClick={handleSubmit}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white px-6 py-2 rounded-full hover:bg-sky-700 transition"
      >
        Sign up
      </button>
    </div>
  );
}
