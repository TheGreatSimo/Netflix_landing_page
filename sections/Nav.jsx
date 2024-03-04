import Image from 'next/image'


const Nav = () => {
  return (
    <section className=' max-container flex justify-center '>
      <div className='absolute w-full z-10 flex justify-between max-container mt-6  px-10  ' >
          <div className='shadow-3xl' >
            <Image src="/logo.png" width={140} height={40} alt="logo" />
          </div>
          <div className='flex justify-center gap-4'>
            <select className='bg-[#141313] text-gray-200 text-lg rounded-lg px-8 py-1 font-poppins tracking-wider h-[35px] ' >
              <option value="option1"> English </option>
              <option value="option2">Français</option>
              <option value="option3">العربية</option>
            </select>
            <button className='w-[76px] h-[35px] bg-customRed text-gray-200 rounded-md  border-[1px] border-black font-semibold cursor-pointer '>Sign in</button>
          </div>
      </div>
    </section>
  )
}

export default Nav
