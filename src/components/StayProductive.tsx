import srcImg from '../assets/images/illustration-stay-productive.png'
import arrow from '../assets/images/icon-arrow.svg'
const StayProductive = () => {
  return (
    <section className="mt-[80px]">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-[30px] mx-auto justify-center items-center">
            <div className='img-container flex-center'>
                <img src={srcImg} alt="Stay Productive" className=' object-contain w-[300px] md:w-full ' />
            </div>
            <div className='text-container flex flex-col gap-[20px] text-center md:text-left'>
                <h3 className='text-[20px] sm:text-[24px] font-bold'>Stay productive,<br/> wherever you are</h3>
                <p className='text-[9px] sm:text-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus consectetur ea id debitis veniam earum magni, praesentium iste alias. A eum temporibus tempore laudantium adipisci ab doloremque quo quia repellat!</p>
                <p className='text-[9px] sm:text-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus consectetur ea id debitis veniam earum magni, praesentium iste alias. A eum temporibus tempore laudantium adipisci ab doloremque quo quia repellat!</p>
                <div className='flex justify-center md:justify-start'>
                    <button className='transition-all duration-200 pb-[3px] text-[var(--colorText2)] border-b border-b-[#baf1ff] flex items-center hover:text-[#baf1ff] hover:border-b-[var(--colorText2)]'>See how it works <img src={arrow} alt="→" className='inline-block ml-[10px] w-[22px] animate-move-right' /></button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default StayProductive