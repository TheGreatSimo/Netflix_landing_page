import Image from 'next/image'


const Hero = () => {
  return (
    <section className="relative flex justify-center items-center h-screen  h-[700px]">
      <div className=' absolute z-0 inset-0 w-full  '>
        <Image src="/images/hero.jpeg" layout='fill' objectFit='cover' alt="hero image"  className='darkened-image' style={{ 'maxHeight' : '700px'}} />
      </div>

      <div className='absolute inset-0 flex flex-col justify-start mt-72 items-center gap-6  text-white  '>
        <h1 className='text-5xl font-bold text-center '>Unlimited movies, TV shows, and more</h1>
        <p className='text-2xl font-poppins text-gray-100 text-center ' >Watch anywhere. Cancel anytime.</p>
        <p className='text-xl font-poppins text-gray-100 text-center' >Ready to watch? Enter your email to create or restart your membership.</p>


        <div className='flex justify-center gap-2'>
          <input type="text" placeholder='Email Address' className='w-[400px] h-[55px] bg-transparent rouned-lg placeholder:text-center text-center text-white text-lg'  />
          <button className='bg-customRed w-[200px] rounded-md h-[55px]  text-white text-2xl font-bold  '>Get Started ˃ </button>
        </div>
      </div>


    </section>
  )
}

export default Hero