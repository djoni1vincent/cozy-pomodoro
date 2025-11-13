import { useEffect, useState } from "react";
import bell from "../assets/bell.mp3";

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedSeconds = seconds.toString().padStart(2, "0");
  const [mode, setMode] = useState("work", "break");

  useEffect(() => {
    if (!isActive) return;
    if (timeLeft === 0) {
      setMode(mode === "work" ? "break" : "work");
      new Audio(bell).play();
      setTimeLeft(mode === "work" ? 5 * 60 : 25 * 60);
      return;
    }
    const interval = setInterval(() => {
      setTimeLeft((time) => time - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  useEffect(() => {
    document.body.style.backgroundColor =
      mode === "work" ? "#987caa" : "#85b2f5";
  }, [mode]);

  return (
    <>
      <h2 className="mt-12 font-black font-mono text-6xl ">Pomodoro</h2>
      <div className="[#FFF5E1] mt-80 flex flex-col items-center">
        {" "}
        <p className="font-mono text-9xl font-black animate-pulse duration-1000 text-[#f7cdfe] ">
          {minutes}:{formattedSeconds}
        </p>
        <button
          className="transition-colors duration-300 bg-red-400 rounded-lg shadow-lg px-8 py-4 mt-4 text-white font-bold text-2xl hover:bg-red-500"
          onClick={() => setIsActive(!isActive)}
        >
          {isActive ? "Pause" : "Start"}
        </button>
        <button
          className=" transition-colors duration-300 mt-4 bg-[#85b2f5] text-[#52302d] px-4 py-2 rounded-lg shadow hover:bg-[#a7a7df]"
          onClick={() => setTimeLeft(1 * 3)}
        >
          Reset
        </button>
      </div>
    </>
  );
}
