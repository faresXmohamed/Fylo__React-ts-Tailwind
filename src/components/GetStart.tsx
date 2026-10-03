

const GetStart = () => {
  return (
    <section className="container">
        <div className="text-center relative h-[150px]">
            <div className="flex flex-col gap-[10px] bg-[#1e293b] rounded-2xl py-[30px] px-[10px] sm:max-w-[700px] w-full absolute left-[50%] translate-x-[-50%] top-[50px] sm:h-[200px]">
                <h1 className="font-bold text-[16px] sm:text-[25px]">Get early access today</h1>
                <p className="text-[10px] sm:text-[15px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita animi deleniti consequuntur id enim dignissimos.</p>
                <div className="flex-center flex-col sm:flex-row gap-[20px] ">
                    <input type="email" placeholder="email@example.com" className="bg-amber-50 rounded-[30px] p-[8px] outline-0 placeholder:text-[#a9a9a9] w-[100%] sm:w-[70%] text-[10px] sm:text-[14px] " />
                    <button className="btn p-[8px] rounded-[30px] text-[10px] sm:text-[14px]">Get Started For Free</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default GetStart