import { useEffect, useState } from "react";

type Props = {
  size?: number;
};

const SuspensiveDots = ({ size = 2 }: Props = {}) => {
  const [visibleDots, setVisibleDots] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleDots((prev) => (prev === 3 ? 0 : prev + 1));
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center gap-1">
      <div
        style={{ height: `${size}em`, width: `${size}em` }}
        className={`bg-black dark:bg-gray-300 rounded-full duration-300 delay-[0ms] ${
          visibleDots >= 1 ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
      ></div>
      <div
        style={{ height: `${size}em`, width: `${size}em` }}
        className={`bg-black dark:bg-gray-300 rounded-full duration-300 delay-[150ms] ${
          visibleDots >= 2 ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
      ></div>
      <div
        style={{ height: `${size}em`, width: `${size}em` }}
        className={`bg-black dark:bg-gray-300 rounded-full duration-300 delay-[300ms] ${
          visibleDots >= 3 ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
      ></div>
    </div>
  );
};

export default SuspensiveDots;
