import Image from 'next/image'


const Watch = () => {
  return (
    <section className=" w-full h-[600px] bg-black mt-2">
    <div className="max-container px-32 flex justify-between items-center max-lg:flex-col  h-[600px]">
      <div className="flex flex-col gap-4 max-lg:text-center max-lg:mt-10">
        <h1 className="text-4xl font-extrabold text-white " > Watch everywhere</h1>
        <h3 className="text-xl font-normal max-w-2xl max-lg:mt-10 text-gray-100 " >Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h3>
      </div>

      <div className="relative w-[600px] h-[500px]">
        <div className='absolute z-0 inset-0 w-full'>
          <Image src="/gif/watch.gif" layout='fill' objectFit='cover' alt="gif image" style={{ maxWidth: '50%', maxHeight: '50%', margin: 'auto', top: '20%', left: '50%', transform: 'translate(-50%, -50%)' }} />
        </div>
        <div className='absolute z-1 inset-0'>
          <Image src="/images/devices.png" height={500} width={600} objectFit='fill' alt="tv image" />
        </div>
      </div>



    </div>

  </section>
  )
}

export default Watch