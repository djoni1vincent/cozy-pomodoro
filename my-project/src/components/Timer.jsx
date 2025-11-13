import { useEffect, useState } from "react";

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState(1 * 10);
  const [isActive, setIsActive] = useState(false);
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedSeconds = seconds.toString().padStart(2, "0");

  useEffect(() => {
    if (!isActive) return;
    if (timeLeft === 0) {
      setIsActive(false);
      return;
    }
    const interval = setInterval(() => {
      setTimeLeft((time) => time - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  return (
    <>
      <h2 className="mt-12 font-black font-mono text-6xl ">Pomodoro</h2>
      <div className="mt-80 flex flex-col items-center">
        {" "}
        <p className="font-mono text-9xl ">
          {minutes}:{formattedSeconds}
        </p>
        <button
          className="bg-red-400 rounded-md px-8 py-4 mt-10 text-white font-bold text-2xl hover:bg-red-500 transition-colors"
          onClick={() => setIsActive(!isActive)}
        >
          {isActive ? "Pause" : "Start"}
            </button>
            <button className="mt-2" onClick={() => setTimeLeft(1 * 10)}>Reset</button>

        

      </div>
    </>
  );
}
