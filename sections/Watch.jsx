import Image from 'next/image'


const Watch = () => {
  return (
    <section className=" w-full h-[600px] bg-black mt-2">
    <div className="max-container px-32 flex justify-between items-center max-lg:flex-col  h-[600px]">
      <div className="flex flex-col gap-4 max-lg:text-center max-lg:mt-10">
        <h1 className="text-4xl font-extrabold text-white " > Watch everywhere</h1>
        <h3 className="text-xl font-normal max-w-2xl max-lg:mt-10 text-gray-100 " >Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h3>
      </div>
      <div className="relative w-[750px] h-[550px] flex justify-center items-center">
        <div className=' absolute z-0 inset-0 w-full flex justify-center items-center  '>
          <Image src="/gif/watch.gif" layout='fill' objectFit='cover' alt="gif image"  className='' style={{ 'maxHeight' : '250px' }} />
        </div>
        <Image src="/images/devices.png" height={750} width={550} objectFit='fill' alt="tv image" className=' absolute z-1 inset-0' />

      </div>

    </div>

  </section>
  )
}

export default Watch