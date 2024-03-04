"use client"

import FaqCard from "@/components/FaqCard"
import { faq } from "@/constants"


const Faq = () => {
  const handleClick = () => {
    alert("no back end yet")
  }
  return (

    <section className=" w-full h-[1000px]  mt-2 bg-black max-lg:py-60">
      <div className="max-container px-32  flex flex-col justify-center items-center pt-20">
        <h1 className="text-center text-white text-4xl  mb-10 mt-10 " >Frequently Asked Questions</h1>
      </div>
      <div className="flex flex-col gap-2 items-center mt-4" >
        {faq.map((item) => 
          <div key={item.id} className="" >
            <FaqCard question={item.question} answer={item.answer} />

          </div>
        )}
      </div>
      <div className=" flex flex-col gap-8 mt-16 "  >
        <p className='text-2xl font-poppins text-gray-100 text-center' >Ready to watch? Enter your email to create or restart your membership.</p>
        <div className='flex justify-center gap-2'>
          <input type="text" placeholder='Email Address' className='w-[500px] h-[55px] bg-transparent rouned-lg placeholder:text-center text-center text-white text-lg'  />
          <button className='bg-customRed w-[240px] rounded-md h-[55px]  text-white text-2xl font-bold  ' onClick={handleClick} >Get Started ˃ </button>
        </div>
      </div>


    </section>
  )
}

export default Faq