
export default function BorderCountries({borderCountries, screenMode, onBorderCountry}) {
  return (
    borderCountries && borderCountries?.map(obj => <button onClick={onBorderCountry} className={`${screenMode ? "bg-miniDMEl-100 text-miniLDMTxtEl-100" : "bg-miniLDMTxtEl-100 text-miniLMTxt-100"} shadow py-3 px-3 text-[11px] md:text-[13px] leading-[100%] h-fit cursor-pointer`} key={obj.id} id={obj.id}>{obj.name}</button>)
  )
}