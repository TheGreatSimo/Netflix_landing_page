import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative flex justify-center items-center h-screen">
      <div className="absolute inset-0 z-0 bg-black">
        <Image src="/images/hero.jpeg" layout="fill" objectFit="cover" alt="hero image" className='darkened-image' />
      </div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white gap-6">
        <h1 className='text-5xl'> Unlimited movies, TV shows, and more </h1>
        <p className='text-gray-100 text-2xl' >Watch anywhere. Cancel anytime.</p>
        <p className='text-gray-100 text-xl' >Ready to watch? Enter your email to create or restart your membership.</p>

        <div className='flex justify-center gap-2 h-[60px] mt-2 '>
          <input type="email" placeholder='Email address' className='w-[370px] rounded-lg bg-transparent border-2 border-gray-900 placeholder:text-center text-white text-xl text-center' ></input>
          <button className='w-[200px] bg-customRed text-white text-2xl font-bold cursor-pointer ' >Get started  </button>

        </div>
      </div>
    </section>
  );
}

export default Hero;
