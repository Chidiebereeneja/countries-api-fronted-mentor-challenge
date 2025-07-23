import { useNavigate } from 'react-router-dom';

export default function BackBtn({screenMode}) {
  const Navigate = useNavigate();

  function backBtnTask() {
    Navigate("/")
  }

  return (
    <button onClick={backBtnTask} className={`${screenMode ? "bg-miniDMEl-100 text-miniLDMTxtEl-100" : "bg-miniLDMTxtEl-100 text-miniLMTxt-100"}  flex items-center justify-center gap-3 shadow px-4 py-[8px] cursor-pointer`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-[14px] w-[14px] self-center">
        <path fillRule="evenodd" d="M7.28 7.72a.75.75 0 0 1 0 1.06l-2.47 2.47H21a.75.75 0 0 1 0 1.5H4.81l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
      </svg>
      <span className="text-[14px]">Back</span>
    </button>
  )
}

