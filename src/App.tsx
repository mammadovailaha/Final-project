import "./App.css";
import Header from "./layout/Header";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import AppRouter from "./router/AppRouter";
import { ChatButton } from "./components/ChatBot/ChatButton";
import { useState } from "react";
import ChatModal from "./components/ChatBot/ChatModal";

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  return (
    <div className={ `${"App"} bg-background`}>
      <Header />
     <div className="w-full h-18 lg:h-22"> <Navbar /></div>
      <AppRouter />
      <Footer />
       <div className="fixed z-[1001]">
        <ChatButton
         isOpen={isChatOpen} 
        onClick={() => setIsChatOpen(!isChatOpen)} />
        {isChatOpen && (
          <ChatModal/>
        )}
      </div>
    </div>
  );
}

export default App;
