import BorderCountries from "./BorderCountries"
import PElement from "./PElement"

// const PElement = function({obj}) {
//   return (
//     <p className="text-[14px] md:text-[16px] gap-1">
//       <strong className="font-medium text-[16px]">{obj.name}</strong>
//       <span className="text-[16px] font-normal">{obj.value}</span>
//     </p>
//   )
// }

export default function RenderCard({country, borderCountries, screenMode, onBorderCountry}) {
  return (
    <div className="flex self-center flex-col md:flex-row gap-9 md:gap-20 w-[90%] max-w-[1200px] ">
        <figure className="w-[100%] md:w-[450px] h-[300px]">
          <img src={country?.flags?.png} alt={`${country?.name}-flag`} className="w-full h-full shadow "/>
        </figure>

        <div className="flex w-[100%] md:w-[60%] flex-col gap-2">
          <h1 className="font-bold text-[22px]">{country?.name}</h1>

          <div className="flex items-start md:justify-between w-full gap-10">
            <div className="flex flex-col gap-1">
              <PElement obj={{name: "Native Name: ", value: country?.nativeName}}/>
              <PElement obj={{name: "Population: ", value: country?.population}}/>
              <PElement obj={{name: "Region: ", value: country?.region}}/>
              <PElement obj={{name: "Sub Region: ", value: country?.subregion}}/>
              <PElement obj={{name: "Capital: ", value: country?.capital}}/>
            </div>
            <div className="flex flex-col gap-1">
              <PElement obj={{name: "Top Level Domain: ", value: country?.topLevelDomain}}/>
              <PElement obj={{name: "Currencies: ", value: country?.currencies?.at(0).name}}/>
              <PElement obj={{name: "Languages: ", value: String(country?.languages?.map(obj => ` ${obj.name}`))}}/>
            </div>
          </div>

          <div className="flex gap-2  w-full">
            <p className="font-medium text-[13px] md:text-[16px]" >Border Countries:</p>
            <div className="flex flex-wrap gap-[10px]">
              {<BorderCountries onBorderCountry={onBorderCountry} borderCountries={borderCountries} screenMode={screenMode}/>}
            </div>
          </div>
        </div>
       </div>
  )
}
