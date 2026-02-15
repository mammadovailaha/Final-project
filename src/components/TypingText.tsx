import React, { useEffect, useState } from "react";


interface Props {
  text: string;
  speed?: number;
  className?: string;
}

const TypingText: React.FC<Props> = ({ text, speed = 100, className = "" }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    setDisplayedText(""); // reset when text changes
    let index = 0;
    let displayText:string=""
    const interval = setInterval(() => {
      if (index >= text.length) {
        clearInterval(interval);
        return;
      }
      displayText=displayText+text.charAt(index)
      setDisplayedText(displayText);
      index++;
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <p className={className}>{displayedText}</p>;
};

export default TypingText;
