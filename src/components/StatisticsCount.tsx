import { useEffect, useRef, useState, type FC } from "react";

interface Props {
  end: number;
  duration?: number;
}

const StatisticsCount: FC<Props> = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<number>(0);
  const increment = end / (duration * 60);
  useEffect(() => {
    ref.current = 0;
    setCount(0);

    const interval = setInterval(() => {
      ref.current += increment;
      if (ref.current >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(Math.floor(ref.current));
      }
      return () => clearInterval(interval);
    }, 1000 / 60);
  }, [end, duration, increment]);
  return <div>{count}</div>;
};

export default StatisticsCount;
