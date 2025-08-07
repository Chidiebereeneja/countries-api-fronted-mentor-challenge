import Card from "../reuseableComponent/Card";
import { useNavigate } from "react-router-dom";
import PElement from "./PElement";
import txtFormatter from "./TxtFormatter";


function RenderCard({obj, screenMode}) { 
    const Navigate = useNavigate()

    function displayCountryTask() {
        localStorage.setItem("country?description", obj.id)
        Navigate(`/country?description=${obj.name}%${obj.id}`)
        
    }

    return (
        <Card styleVariant={`${screenMode ? "bg-miniDMEl-100 text-miniLDMTxtEl-100" : "bg-miniLDMTxtEl-100 text-miniLMTxt-100"} cardContainer rounded-[8px] shadow`}>
            <figure onClick={displayCountryTask} className="h-full w-full cursor-pointer ">
                <img src={obj.flags.png} alt={obj.name} className="rounded-t-[8px] h-[170px] w-full object-cover object-center" />

                <figcaption className="p-3 px-4">
                    <h2 className="font-bold text-[16px] md:text-[19px] mb-1">{txtFormatter(obj?.name)}</h2>
                    <PElement obj={{name: "Populations: ", value: obj.population}}/>
                    <PElement obj={{name: "Region: ", value: obj.region}}/>
                    <PElement obj={{name: "Capital: ", value: obj.capital}}/>
                </figcaption>
            </figure>
        </Card>
    )
} 

export default function Main({data, continentData, searchForCountryData, screenMode}) {
    
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-[95%] max-w-[1200px]">
        {continentData.length === 0 && searchForCountryData.length === 0 && data  && data?.slice(0, 8).map(obj => <RenderCard screenMode={screenMode} obj={obj} key={obj.id}/>) }

        {continentData.length !== 0 && searchForCountryData.length === 0 && continentData.map(obj => <RenderCard screenMode={screenMode} obj={obj} key={obj.id}/>) }

        {searchForCountryData.length !== 0 && searchForCountryData.map(obj => <RenderCard obj={obj} screenMode={screenMode} key={obj.id}/>) }
    </div>
  )
}
