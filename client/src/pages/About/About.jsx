import React from 'react'
import redlines from "../../assets/svg/redLine.svg";
import Divider from '../../components/Divider';

const About = () => {
  return (
    <div>

    {/* image with text */}
        <div>
            <div className='w-[60%] m-auto tb:w-full'>
                <div>
                    <img src={redlines} className='w-20 h-10 ml-20' alt="" />
                </div>
                <div className=' flex items-center justify-between tb:flex-col gap-10'>
                    <div className='tb:p-10'>
                        <h1 className='text-8xl'>IF YOU LIKE FRIED CHICKEN, THIS IS WHY</h1>
                    </div>
                    <div className='h-[450px]'>
                        <img src="https://images.ctfassets.net/9tka4b3550oc/2MBv3A7EZ95fODNjqOslhy/dc0288979cf0089a47d995152f4db2ee/hero-about.jpg?w=640" className='h-full' alt="" />
                    </div>
                </div>
            </div>
        </div>

        {/* Big Divs with all contains */}

    <div className='bg-gray-100 '>
            <div className=' w-[60%] p-0 m-auto tb:w-[90%] p-10'>
                <div className='w-[30%] flex gap-10 mt-5 tb:w-full '>
                    <p>ABOUT_KFC</p>
                    <Divider/>
                </div>
                <p className='items-start text-left w-[30%] mt-5 text-gray-400 tb:w-full' style={{letterSpacing:'1px',lineHeight:'25px'}}>We make fried chicken—heck, we practically invented it. If they ever make a food hall of fame, our chicken is gonna be a first-ballot inductee.</p>
            </div>

                {/* red banner */}
       
        <div className=' w-[70%] m-auto tb:w-full mb:w-full'>
                   
            <div className='bg-red-600 '>
            <div className='w-20 h-10 ml-[600px] tb:ml-[350px]'>
                                <svg
                            viewBox="0 0 42 20"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                        >
                <path d="M0 0h8v20H0z" fill="white"></path>
                <path d="M16 0h8v20h-8z" fill="white"></path>
                <path d="M32 0h8v20h-8z" fill="white"></path>
              </svg>
                    </div>

                <div className='flex h-[590px] tb:h-[350px] '>
                <div className='h-full'>
                    <img src="https://images.ctfassets.net/9tka4b3550oc/1FQSRLVXt2Q1lvXXkOyW6U/f306561ef7bfc5ab7c84a739a46d3629/Food_09.png?q=75&w=960" className='h-full' alt="" />
                </div>
                <div className='text-white flex flex-col mt-10 gap-10 tb:gap-5 mb:gap-0' style={{letterSpacing:'2px'}}>
                    <p>OUR FOOD</p>
                    <h1 className='text-8xl tb:text-4xl'>WE MAKE IT THE HARD WAY</h1>
                    <p>See what goes into making our world famous fried chicken.</p>
                    <button className="focus:outline-none text-white bg-black hover:bg-black focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm dark:hover:bg-black dark:bg-black border-none w-36 h-10 tracking-wide">Learn More</button>
                </div>
                </div>
            </div>
        </div>

        <div className=' h-[600px] w-full'>
            <div className='w-[70%]   m-auto flex gap-10 tb:flex-col-reverse w-[90%] p-5'>
                <div className=' h-[600px] w-[50%] tb:w-full'>
                  <img src="https://images.ctfassets.net/9tka4b3550oc/2Qk8bdug8e1FNxFt4nMuGv/bf7736702d142e7fd42076f889fd206b/about-story-narrow.png?w=640" className='h-full w-full tb:w-full' alt="" />
                </div>
                  <div className='flex flex-col gap-10 w-[40%] mt-20 tb:w-full '>
                    <h1 className='text-5xl'>THE MAN, THE MYTH, THE LEGEND</h1>
                    <div className='flex gap-5'>
                    <p>IN_THE_BEGINNING</p>
                    <Divider/>
                    </div>
                    <p className='text-gray-400' style={{letterSpacing:'1px',lineHeight:'25px'}}>It all began with the man, the myth, the legend himself. In 1930, in a humble service station in Corbin, Kentucky, 40-year old Harland Sanders began feeding hungry travellers. Sanders spent the next nine years (now that's dedication) perfecting his secret blend of 11 herbs and spices, as well as the basic cooking technique we still use today. There are now over 24,000 KFC outlets in more than 145 countries and territories around the world.</p>
                  </div>
            </div>
        </div>

        
        <div className='mt-[0px]  h-[600px] tb:h-full mt-[500px]'>
            <div className='w-[70%] p-0  m-auto flex gap-10 tb:flex-col-reverse'>
                  <div className='flex flex-col gap-10 w-[40%] mt-20 tb:w-full'>
                    <Divider/>
                    <p className='text-gray-400' style={{letterSpacing:'1px',lineHeight:'25px'}}>Times change but values don’t. And just like the Colonel, we know that nothing beats the value of hard work. It’s what goes into every good old fashioned meal we make. It’s also why, after more than 90 years, folks all over the world keep coming back for more.</p>
                  </div>
                  <div className=' h-[600px] w-[50%] tb:w-full '>
                  <img src="https://images.ctfassets.net/9tka4b3550oc/1IxE5CuLFOBjNz6Q4BDVkl/dd3e7b3417b874b76777c3ef40edb6f6/3_2_Framed_Colonel.jpg?w=1280" className='h-full w-full ' alt="" />
                </div>
            </div>
        </div>


    </div>
        
     
    </div>
  )
}

export default About