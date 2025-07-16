import React, { useState } from "react";
import { TbSend } from "react-icons/tb";
import { v4 as uuidv4 } from "uuid";
import TypingIndicator from "./TypingIndicator";

interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
}

const ChatModal = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isBotTyping, setIsBotTyping] = useState(false);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    const userMessage: Message = {
      id: uuidv4(),
      sender: "user",
      text: inputValue.trim(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsBotTyping(true);
    setTimeout(() => {
      const botMessage: Message = {
        id: uuidv4(),
        sender: "bot",
        text: "Salam, sizə nece komək edə bilərik?",
      };
      setIsBotTyping(false);
      setMessages((prev) => [...prev, botMessage]);
    }, 2000);
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };
  return (
    <div
      className="fixed z-40 bottom-22 right-10 md:bottom-26 md:right-24 w-66  md:w-110 h-80 md:h-[480px] bg-gray-100 rounded-2xl shadow-2xl  border border-gray-200 animate-fade-in flex flex-col items-center justify-between pt-5 pb-2.5"
    >
      <div className="flex flex-col gap-2 w-[90%] overflow-y-auto h-full">
        {messages.map((msg) => (
          <div
            style={{ padding: "5px 15px 5px 15px" }}
            key={msg.id}
            className={`max-w-[80%]  h-auto min-h-8 md:min-h-10 rounded-2xl md:rounded-3xl text-xs md:text-sm flex justify-center items-center
        ${
          msg.sender === "user"
            ? "bg-[#576d4ff2] text-white self-end rounded-br-none"
            : "bg-gray-200 text-[#303d2cf2] self-start rounded-bl-none"
        }`}
          >
            {msg.text}
          </div>
        ))}
          {isBotTyping && (
    <div className="max-w-[75%] rounded-lg text-sm text-[#576d4ff2] self-start rounded-bl-none italic">
      <TypingIndicator />
    </div>
  )}
      </div>
      <div className="w-[95%] bg-gray-200 rounded-lg md:rounded-2xl shadow h-8 md:h-12 flex justify-center items-center border border-gray-200 hover:border-[#576d4ff2]">
        <input
          type="text"
          name="message"
          id="message"
          placeholder="Mesaj yazın"
          className="w-[85%] outline-none border-none placeholder:text-xs md:placeholder:text-sm   "
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button
          onClick={handleSendMessage}
          className="outline-none border-none bg-transparent"
        >
          <TbSend className="text-2xl md:text-4xl text-[#576d4ff2]" />
        </button>
      </div>
    </div>
  );
};

export default ChatModal;
