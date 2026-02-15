import  { useEffect, useState } from "react";

const TypingIndicator = () => {
  const [dots, setDots] = useState("...");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => (prev.length === 3 ? "" : prev + "."));
    }, 270);

    return () => clearInterval(interval);
  }, []);

  return <span className=" italic w-20 h-10 text-7xl ">{dots}</span>;
};

export default TypingIndicator;
