import { useState } from 'react'
import './App.css'
import Timer from './components/Timer'


export default function App() {
 const openPopup = () => {
    window.open(
      "/popup.html",
      "PomodoroTimer",
      "width=300,height=250,resizable=no"
    );
  }

  return (
<>
<div className="flex flex-col items-center mt-10">
      <Timer />
      
    </div>
    <button
        onClick={openPopup}
        className="opacity-70 fixed bottom-6 right-6 bg-[#7cc290] text-white px-4 py-2 rounded-lg hover:bg-[#6aa77a] shadow-lg transition"
      >
        Open in small window
      </button>
</>
  )
}