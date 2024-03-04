import FaqCard from "@/components/FaqCard"
import { faq } from "@/constants"


const Faq = () => {
  return (

    <section className=" w-full h-[800px]  mt-2 bg-black max-lg:py-60">
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


    </section>
  )
}

export default Faq