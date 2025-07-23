
export default function txtFormatter(str) {
    console.log(str.split(" ").length);
    
  const formatTxt = str.split(" ").length >= 3 ?`${str.split(" ").slice(0, 3).join(" ")}...` : str

  return formatTxt
}
