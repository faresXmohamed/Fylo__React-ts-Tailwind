
type Props = {
    description: string;
    image: string;
    name: string;
    education: string;
}

const Person = ({ description, image, name, education }: Props) => {
  return (
    <div className="flex flex-col items-start text-start gap-[15px] p-[10px] bg-[#1c2230] rounded-[10px] shadow-[8px_8px_1px_8px_#1c202c]">
      <p className="text-[9px] sm:text-[12px]">{description}</p>
      <div className="img-container flex-center gap-[10px]">
        <div className="flex-center">
        <img src={image} alt={name} className="sm:max-w-[50px] max-w-[30px] rounded-full object-contain" />
        </div>
        <div className="flex flex-col items-start gap-[5px] mt-[10px]">
            <h3 className="font-bold text-[12px] sm:text-[16px]">{name}</h3>
            <p className="text-[9px] sm:text-[12px]">{education}</p>
        </div>
      </div>
    </div>
  )
}

export default Person