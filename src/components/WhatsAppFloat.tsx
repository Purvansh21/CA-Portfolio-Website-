import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/919819313251?text=Hello,%20I'd%20like%20to%20consult%20with%20CA%20Deepesh%20Sawant", "_blank");
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-8 left-8 z-40 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-card hover:shadow-glow transition-all duration-300 hover:scale-110 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </button>
  );
};

export default WhatsAppFloat;