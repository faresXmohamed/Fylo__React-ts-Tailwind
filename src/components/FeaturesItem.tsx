type FeaturesType = {
  icon: string;
  title: string;
  description: string;
};

const FeaturesItem = ({ icon, title, description }:FeaturesType) => {
  return (
        <div className="flex-center flex-col text-center">
          <div className="icon">
            <img className="object-contain w-[50px] h-[50px] md:w-[80px] md:h-[80px]" src={icon} alt={title} />
          </div>
          <div className="text w-[100%] sm:w-[80%]">
            <h2 className="font-bold text-[14px] md:text-[20px] my-[10px]">{title}</h2>
            <p className="text-[10px] md:text-[14px]">{description}</p>
          </div>
        </div>
  )
}

export default FeaturesItem