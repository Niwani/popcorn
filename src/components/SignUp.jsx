import { useState } from "react";

export default function SignUp({ className = "" }) {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Validate email format first
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("⚠️ Please enter a valid email address.");
      return;
    }

    try {
      // ✅ Send to your backend route
      const res = await fetch("https://popcorn-lmpz.onrender.com/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        alert(`🎉 ${data.message}`);
        setEmail(""); // clear input after success
      } else {
        alert(`⚠️ Error: ${data.error}`);
        setEmail("")
      }
    } catch (error) {
      alert("⚠️ Could not connect to the server. Make sure Node.js is running.");
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`relative max-w-md ${className} z-20`}
    >
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your e-mail"
        className="bg-white text-black w-full border rounded-full px-4 py-4 pr-32 outline-none"
      />

      <button
        type="submit"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white px-6 py-2 rounded-full whitespace-nowrap hover:bg-sky-700 transition"
      >
        Sign up
      </button>
    </form>
  );
}
