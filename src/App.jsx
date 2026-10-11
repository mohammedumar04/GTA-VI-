import React, { useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'

function App () {

  const [showContent,setShowContent] = useState(false)

  useGSAP(()=>{
    const tl = gsap.timeline()

    tl.to(".vi-mask-group",{
      rotate: 25,
      duration: 2,
      ease: "power4.easeInOut",
      transformOrigin: "50% 50%",
    })
    .to(".vi-mask-group",{
      scale: 10,
      duration: 2,
      delay: -1.9,
      ease: "power4.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function (){
        if(this.progress() >= 0.9){
          document.querySelector(".svg").remove()
          setShowContent(true)
          this.kill()
        }
      }
    })
  })
  
  useGSAP(()=>{

    if(!showContent) return

    gsap.to(".main",{
      scale: 1,
      duration: 2,
      delay: "-0.8",
      rotate: 0,
      ease: "Expo.easeInOut"
    })
    gsap.to(".sky",{
      scale: 1.2,
      duration: 2,
      delay: "-0.6",
      rotate: 0,
      ease: "Expo.easeInOut"
    })
    gsap.to(".bg",{
      scale: 1.1,
      duration: 2,
      delay: "-0.6",
      rotate: 0,
      ease: "Expo.easeInOut"
    })
    gsap.to(".text",{
      scale: 1,
      duration: 2,
      delay: "-0.6",
      rotate: 0,
      ease: "Expo.easeInOut"
    })
    gsap.to(".character",{
      scale:0.9,
      duration: 2,
      x: "-50%",
      bottom:"-65%",
      delay: "-0.8",
      rotate: 0,
      ease: "Expo.easeInOut"
    })
    gsap.to(".logo-18",{
      delay:-0.1,
      duration:1.5,
      bottom: 210,
      ease: "Expo.easeInOut",
    })
    gsap.to(".logo-top",{
      delay:-0.1,
      duration:1.5,
      y:1,
      ease: "Expo.easeInOut",
    })
    gsap.to(".btmbar",{
      delay:-0.1,
      duration:1.5,
      y:1,
      ease: "Expo.easeInOut",
    })


    const main = document.querySelector('.main')
    
    main?.addEventListener("mousemove", (e)=>{
      const xMove = (e.clientX/window.innerWidth-0.5)*40
      
      gsap.to(".main .text",{
        x: `${xMove * 0.6}`
      })
      gsap.to(".sky",{
        x: xMove,
      })
      gsap.to(".bg",{
        x: xMove*1.7,
      })
    })
  },[showContent])


  return (
    <>
       <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (<div className='main w-full rotate-[-10deg] scale-[1.7]'>
        <div className='landing relative overflow-hidden w-full h-screen bg-black ' >
          <div className='navbar absolute top-0 left-0 z-[10] w-full py-6 px-6'>
            <div className='logo-top flex -translate-y-20 gap-5'>
              <div className='lines flex flex-col gap-1'>
                <div className='line w-8 h-1 bg-white'></div>
                <div className='line w-4 h-1 bg-white'></div>
                <div className='line w-2 h-1 bg-white'></div>
              </div>
              <div className='text-xl -mt-[5px] leading-none text-white'>Rockstar</div>
            </div>
          </div>
          <div className='imagesdiv relative w-full h-screen overflow-hidden' >
            <img className='sky scale-[1.5] rotate-[-20deg] absolute top-0 left-0 w-full h-full object-cover' src="./sky.png" alt="" />
            <img className='bg scale-[1.8] rotate-[-3deg] absolute top-0 left-0 w-full h-full object-cover' src='./bg.png'  alt="" />
            <div className='text text-white absolute flex flex-col gap-2 top-4 left-1/2 -translate-x-1/9 scale-[1.2] rotate:[-10deg]'>
              <h1 className='text-[9rem] leading-none -ml-60 '>grand</h1>
              <h1 className='text-[9rem] leading-none -ml-20 '>theft</h1>
              <h1 className='text-[9rem] leading-none -ml-60 '>auto</h1>
              </div>
            <img className='character absolute -bottom-[90%] z-[10] x-[-50%] left-1/2 -translate-x-1/2 rotate-[-20deg] scale-[3]  ' src='./girlbg.png'  alt="" />
            <div>
            <img className='logo-18 absolute bottom-10 left-228 -translate-x-1/2 h-[90px] z-[9]' src='./logo18.png'  alt="" />
            </div>
          </div>
          
          <div className='btmbar translate-y-12 absolute z-[11] text-white bottom-0 left-0 w-full py-6 px-6 bg-gradient-to-t from-black to-transparent'>
            <div className='flex gap-4 items-center'>
              <i className=" text-[1rem] ri-arrow-down-line"></i>
              <h3 className='text-[1rem] font-[Helvatica_Now_Display]'>Scroll Down</h3>
            </div>
            <img className='absolute  top-1/2 left-1/2 h-[3rem] -scale-[-1] -translate-y-1/2 -translate-x-1/2 ' src="./ps5.png" alt="" />
          </div>
        </div>
        <div className='w-full  h-screen flex justify-center items-center bg-black'>
          <div className='cntr w-full h-[80%] flex gap-10'>
            <div className='px-10 limg relative w-1/2 h-full'>
              <img className='absolute h-[45rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src="./imag.png" alt="" />
            </div>
            <div className='ml-30 rg py-10 text-white w-1/2'>
              <h1 className='text-6xl mb-2'>Still runnning</h1>
              <h1 className='text-6xl mb-10'>not hunting</h1>
              <p className='text-xl mb-2 font-[Helvatica_Now_Display] w-[55%]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis ab at quod quidem provident amet animi corporis quo, magnam quisquam.</p>
              <p className='text-xl mb-5 font-[Helvatica_Now_Display] w-[55%]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis?</p>
              <p className='text-xl font-[Helvatica_Now_Display] w-[55%]'>amet consectetur adipisicing elit. Corporis?</p>
              <button className='text-3xl bg-yellow-500 text-black px-8 py-4 mt-10'>Download Now</button>
            </div>
          </div>
        </div>
      </div>) }
    </>
  )
}

export default App