import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function ErrorPage({screenMode}) {
    const Navigate = useNavigate()


    function onHomeBtn() {
        Navigate("/")
    }

    useEffect(() => {
        document.body.style.backgroundColor = screenMode ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 99%)"
        document.getElementById("root").style.color = screenMode ? "hsl(0, 0%, 99%)" : "hsl(207, 26%, 17%)"
    }, [screenMode])

  return (
    <div className={`flex items-center justify-center flex-col gap-2 h-screen`}>
        <h1 className="font-bold text-[56px]">404</h1>
        <p className="text-[24px]">Page Not Found</p>
        <button onClick={onHomeBtn} className={`${screenMode ? "bg-miniDMEl-100 text-miniLDMTxtEl-100" : "bg-miniLDMTxtEl-100 text-miniLMTxt-100"} shadow h-[40px] w-[120px] cursor-pointer rounded font-medium`}>Home Page</button>
    </div>
  )
}
