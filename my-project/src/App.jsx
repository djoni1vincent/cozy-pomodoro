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
</>
  )
}