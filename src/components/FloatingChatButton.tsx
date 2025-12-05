import { Link, useLocation } from "react-router-dom";
import chatbotIcon from "@/assets/chatbot-icon.jpg";

export function FloatingChatButton() {
  const location = useLocation();
  
  // Don't show on chatbot page
  if (location.pathname === "/chatbot") {
    return null;
  }

  return (
    <Link
      to="/chatbot"
      className="fixed bottom-6 right-6 z-50 w-20 h-20 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 overflow-hidden border-2 border-primary"
    >
      <img
        src={chatbotIcon}
        alt="Ask AI Chatbot"
        className="w-full h-full object-cover"
      />
    </Link>
  );
}
