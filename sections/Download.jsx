import Image from 'next/image'


const Download = () => {
  return (
    <section className=" w-full h-[600px]  mt-2 bg-black max-lg:py-60">
      <div className="max-container px-32 flex justify-around items-center max-lg:flex-col  h-[600px] max-lg:mb-20  ">
        <div >
          <Image src="/images/mobile.jpeg" height={400} width={500} objectFit='fill' alt="mobilie image" />
        </div>
        <div className='text-center flex flex-col gap-4 max-lg:mt-10' >
          <h1 className='text-white text-3xl max-w-lg lg:text-start ' >Download your shows to watch offline</h1>
          <p className='text-gray-200 text-lg ' >Save your favorites easily and always have something to watch</p>

        </div>

      </div>
    </section>
  )
}

export default Download