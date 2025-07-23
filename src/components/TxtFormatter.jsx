
export default function txtFormatter(str) {
    
  const formatTxt = str.split(" ").length >= 3 ?`${str.split(" ").slice(0, 3).join(" ")}...` : str

  return formatTxt
}
