import React, {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [1000])
  return (
    <div id='Contact' className='p-4 lg:p-20 flex flex-col items-center justify-center'>
      <h1 data-aos='fade-right' className='text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500'>Contact Me</h1>
      <form action="" className='flex flex-col gap-2 lg:w-1/2'>
        <div className='lg:flex gap-6'>
          <input type="text" className='w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 border-glow text-xl text-slate-500' placeholder='Enter Your Full Name' />
          <input type="text" className='w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 border-glow text-xl text-slate-500' placeholder='Enter Your Email' />
        </div>
        <textarea className='w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 border-glow text-xl text-slate-500' placeholder='Enter Your Message...' name="" id="" cols="20" rows="10"></textarea>
        <button
          className='nano-button my-3 shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden border-glow'
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Contact