import Image from 'next/image'


const Kids = () => {
  return (
    <section className=" w-full h-[600px]  mt-2 bg-black max-lg:py-60">
    <div className="max-container px-32 flex justify-around items-center max-lg:flex-col  h-[600px] max-lg:mb-20  ">
      <div >
        <Image src="/images/kids.png" height={400} width={500} objectFit='fill' alt="mobilie image" />
      </div>
      <div className='text-center flex flex-col gap-4 max-lg:mt-10' >
        <h1 className='text-white text-4xl max-w-lg lg:text-start font-extrabold  ' >Create profiles for kids</h1>
        <p className='text-gray-200 text-lg text-start max-w-lg ' >Send kids on adventures with their favorite characters in a space made just for them—free with your membership</p>

      </div>

    </div>
  </section>
  )
}

export default Kids