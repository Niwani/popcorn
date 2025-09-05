import chat from "../assets/chat.png";
import location from "../assets/location.png";
import cancel from "../assets/cancel.png";

export default function Features() {
  const features = [
    { text: "Unlimited talk and text globally", image: chat, id: 1 },
    { text: "Unlimited data in 150+ Countries", image: location, id: 2 },
    { text: "Cancel anytime", image: cancel, id: 3 },
  ];

  return (
    <section className="grid md:grid-cols-3 gap-3 px-6 py-12 text-center">
      {features.map((f) => (
        <div key={f.id} className="flex flex-col items-center space-y-2">
          
          {/* Background wrapper */}
          <div className="flex items-center justify-center w-14 h-14 bg-gray-100 rounded-full shadow-sm">
            <img src={f.image} alt={f.text} className="w-7 h-7" />
          </div>

          <p className="font-medium text-sm md:text-base">{f.text}</p>
        </div>
      ))}
    </section>
  );
}
