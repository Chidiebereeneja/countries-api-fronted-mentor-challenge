
export default function PElement({obj}) {
  return (
    <p className="text-[13px] md:text-[16px] gap-1">
      <strong className="font-medium">{obj.name}</strong>
      <span className=" font-light">{obj.value}</span>
    </p>
  )
}
