import Image from 'next/image'
const Nav = () => {
  return (
    <div className="flex justify-center "  >
      <nav className=" absolute flex justify-between  px-18 max-container z-10 mt-6 w-full ">
        <div>
          <Image src="/logo.png" width={150} height={40} alt="loto"  />

        </div>
        <div className='flex justify-center gap-4' >
          <select className='bg-[#141313] h-[32px] w-[140px] text-gray-100 rounded-md text-center tracking-wider '>
            <option value="option1">&#x1F1EC;&#x1F1E7;  English</option>
            <option value="option2">&#x1F1EB;&#x1F1F7;  Français</option>
            <option value="option3">&#x1F1F8;&#x1F1E6;  العربية</option>
          </select>
          <button className='bg-customRed w-20 h-[32px] text-white rounded-md border-black border-2 font-semibold'>Sign in</button>
        </div>
      </nav>
    </div>
  )
}

export default Nav