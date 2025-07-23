
export default function DropDownSearch({data, onSelect, screenMode}) {
  return (
    <select onChange={onSelect} name="continent" className={`${screenMode ? "bg-miniDMEl-100 text-miniLDMTxtEl-100" : "bg-miniLDMTxtEl-100 text-miniLMTxt-100"} shadow px-2 outline-none border-none rounded-[4px] text-[12px] md:text-[16px]`} id="continent">
        <option value="Filter by region">Filter by region</option>
        {data && data.map(item => <option key={item} value={item}>{item}</option> )}
    </select>
  )
}
