import { link1, link2 , link3 ,link4 } from "@/constants"
import Link from 'next/link'

const Footer = () => {
  return (
    <section className="bg-black flex flex-col  ">
      <div className=" max-container flex justify-around w-full mt-32 mb-20 flex-wrap" >
        <div className="flex flex-col gap-4 ">
          {(link1).map((item ) => 
            <div key={item.id}>
              <Link href={item.href}>
                <p className="text-gray-200 ">{item.label}</p>
              </Link>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-4 ">
          {(link2).map((item ) => 
            <div key={item.id}>
              <Link href={item.href}>
                <p className="text-gray-200 ">{item.label}</p>
              </Link>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-4 ">
          {(link3).map((item ) => 
            <div key={item.id}>
              <Link href={item.href}>
                <p className="text-gray-200 ">{item.label}</p>
              </Link>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-4 ">
          {(link4).map((item ) => 
            <div key={item.id}>
              <Link href={item.href}>
                <p className="text-gray-200 ">{item.label}</p>
              </Link>
            </div>
          )}
        </div>


      </div>
      <div className="max-container flex items-start w-full flex-col gap-6 mt-10 mb-10 px-24 ">
        <select className='bg-[#141313] h-[32px] w-[140px] text-gray-100 rounded-md text-center tracking-wider '>
          <option value="option1">&#x1F1EC;&#x1F1E7;  English</option>
          <option value="option2">&#x1F1EB;&#x1F1F7;  Français</option>
          <option value="option3">&#x1F1F8;&#x1F1E6;  العربية</option>
        </select>
        <p className="text-lg text-gray-300" >Netflix Morocco</p>
      </div>

    </section>
  )
}

export default Footer