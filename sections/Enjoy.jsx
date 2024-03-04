import Image from 'next/image'


const Enjoy = () => {
  return (
    <section className="bg-black w-full mt-4 h-[630px] ">
      <div className="max-container flex justify-around items-center max-xl:flex-col max-xl:py-10 px-40" >
        <div className='flex flex-col gap-4 max-xl:text-center'>
          <h1 className="text-white text-4xl  font-extrabold ">Enjoy on your TV</h1>
          <h3 className=" max-w-xl text-[20px] font-poppins text-gray-100" >Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h3>
        </div>
        <div>

        <div>
          <div className='relative w-[600px] h-[400px] mt-20 '>
            <div className=' absolute z-0 inset-0 w-full  '>
              <Image src="/gif/watch.gif" layout='fill' objectFit='cover' alt="hero image"  className='' style={{ 'maxHeight' : '400px'}} />
            </div>
            <Image src="/images/tv.png" height={400} width={600} alt="devices image"  className='z-10 inset-0' style={{ position: 'absolute', top: 0, left: 0 }} />
          </div>



        </div>

        </div>
      </div>
      


    </section>
  )
}

export default Enjoy