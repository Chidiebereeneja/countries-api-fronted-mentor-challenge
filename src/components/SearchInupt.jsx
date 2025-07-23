
export default function SearchInupt({ screenMode, onSearCh}) {
  
  return (
    <div className={`${screenMode ? "bg-miniDMEl-100 text-miniLDMTxtEl-100" : "bg-miniLDMTxtEl-100 text-miniLMTxt-100"} flex items-center rounded-[4px] shadow bg-miniLDMTxtEl-100 w-fit h-[35px]`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`${screenMode ? "bg-miniDMEl-100 text-miniLDMTxtEl-100" : "bg-miniLDMTxtEl-100 text-miniLMTxt-100"} h-full w-full p-[10px]`}>
        <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
        </svg>

        <input className={`${screenMode ? "bg-miniDMEl-100 text-miniLDMTxtEl-100" : "bg-miniLDMTxtEl-100 text-miniLMTxt-100"} h-full outline-none text-[12px] md:text-[16px] md:px-1`} placeholder="Search for a country..." type="text" onChange={onSearCh} />
    </div>
  )
}
