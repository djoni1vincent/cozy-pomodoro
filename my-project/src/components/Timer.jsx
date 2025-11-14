import { useEffect, useState } from "react";
import bell from "../assets/bell.mp3";
import settings from "../assets/cog.png";
import Modal from './Modal'

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState("work");

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedSeconds = seconds.toString().padStart(2, "0");

  useEffect(() => {
    if (!isActive) return;

    if (timeLeft === 0) {
      const nextMode = mode === "work" ? "break" : "work";
      setMode(nextMode);
      new Audio(bell).play();
      setTimeLeft(nextMode === "work" ? 25 * 60 : 5 * 60);
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((time) => time - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive, timeLeft, mode]);

  useEffect(() => {
    document.body.style.backgroundColor =
      mode === "work" ? "#987caa" : "#85b2f5";
  }, [mode]);


  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(true)
  }


  return (
    <>
      <h2 className="text-purple-200 mt-12 font-black font-mono text-8xl">
        Pomodoro
      </h2>
      <div id="timer" className=" mt-20 md:mt-60 flex flex-col items-center ">
        <p className=" text-8xl md:mb-10  md:text-9xl font-black animate-pulse duration-1000 text-[#f7cdfe] ">
          {minutes}:{formattedSeconds}
        </p>

        <div className="flex justify-center gap-4 ">
          <button
            className="opacity-90 text-xs md:text-xl transition-colors duration-1000 bg-red-400 rounded-lg shadow-lg px-4 py-2 mt-4 md:px-8 md:py-4 text-white font-bold hover:bg-red-500"
            onClick={() => setIsActive(!isActive)}
          >
            {isActive ? "Pause" : "Start"}
          </button>

          <button
            className="opacity-70 text-xs md:text-xl transition-colors duration-300 bg-[#85b2f5] text-[#52302d] shadow-lg px-4 py-2 md:px-8 md:py-4 rounded-lg  hover:bg-[#a7a7df] mt-4"
            onClick={() => setTimeLeft(25 * 60)}
          >
            Reset
          </button>

          <button onClick={toggleModal} className="flex justify-center items-center  mt-4 ">
            <img src={settings} alt="settings" className="w-6 h-6 md:w-10 md:h-10 "/>
          </button>

          {isModalOpen && <Modal setIsModalOpen={setIsModalOpen}/>}
        </div>
      </div>
    </>
  );
}
