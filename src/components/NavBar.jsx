import { useEffect } from 'react';
import styles from './NavBar.module.css';
export default function NavBar({screenMode, onScreenMode}) {

  function onScreenModeTask() {
    onScreenMode({type: "screenMode", payload: !screenMode})
    localStorage.setItem("mode", JSON.stringify(screenMode))
  }


  useEffect(() => {
    const modeStatus = JSON.parse(localStorage.getItem("mode"))
    onScreenMode({type: "screenMode", payload: !modeStatus})
  }, [onScreenMode])


  // display: flex;
  //   align-items: center;
  //   gap: 5px;
  //   width: fit-content;
  //   background-color: transparent;
  //   border: transparent;
  //   font-size: 16px;
  //   font-weight: 500;
  //   cursor: pointer;
  

  return (
    <header className={`${!screenMode ? "bg-miniLMBg-100 text-miniLMTxt-100" : "bg-miniDMEl-100 text-white"} h-[40px] w-full flex justify-center shadow`}>
        <nav className={styles["nav-container"]}>
            <h1 className={`${!screenMode ? "bg-miniLMBg-100 text-miniLMTxt-100" : "bg-miniDMBg-100 text-white"} text-[13px] md:text-[18px]`}>Where in the world?</h1>

            <button onClick={onScreenModeTask} className="flex items-center gap-[5px] w-fit bg-transparent text-[12px] md:text-[16px] font-medium cursor-pointer ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-[12px] md-h-[14px] w-[12px] md-w-[14px]">
                <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" />
                </svg>

                Dark Mode
            </button>
        </nav>
    </header>
  )
}
