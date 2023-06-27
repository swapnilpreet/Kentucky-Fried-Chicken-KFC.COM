import React from "react";
import redlines from "../../assets/svg/redLine.svg";
import { CareesSlideshow } from "./CareesSlideshow";
import Divider from "../../components/Divider";
const Carees = () => {
  return (
    <div className="bg-gray-100">
      {/* baground img with text */}
      <div
        className="relative overflow-hidden bg-cover bg-no-repeat  text-center h-[600px]"
        style={{
          backgroundImage: `url(https://www.liverpool.ac.uk/media/livacuk/KFC-full-banner.jpg)`,
        }}
      >
        <div
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        >
          <div className="flex h-full items-center justify-center">
            <div className="text-white">
              <h1 className="mb-4 text-8xl font-semibold">
                JOIN OUR KFC FAMILY
              </h1>
              <p
                className="mb-6 text-xl font-semibold"
                style={{ letterSpacing: "2px" }}
              >
                You can start searching for jobs on the map below or scroll to
                learn more about working at KFC.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* black border with labels */}
      <div className="" style={{ letterSpacing: "2px" }}>
        <div className="flex justify-around  p-4 bg-black text-white ">
          <p>EXPLORE KFC CAREERS</p>
          <div className="flex gap-10">
            <p className="underline">Join the Family</p>
            <p>Our Culture</p>
            <p>Restaurant Career Growth</p>
            <p>Corporate Careers</p>
            <p>Search Jobs</p>
          </div>
        </div>
      </div>

      {/* map with floting inputs */}

      <div className="">
        {/* bg image  */}
        <div
          className="relative overflow-hidden bg-cover bg-no-repeat  text-center h-[600px]"
          style={{
            backgroundImage: `url(https://media.gettyimages.com/id/1272742161/photo/fast-food-burger-restaurant.jpg?s=2048x2048&w=gi&k=20&c=jqT66zMAUxGv2FAgritH75LLa0Tev51utGCSuK3-7lo=)`,
          }}
        >
          <div className="absolute bottom-2 left-36 right-0 top-36 h-[400px] w-[400px] overflow-hidden bg-fixed rounded-lg  bg-gray-100">
            <div className="pl-6 flex items-start">
              <img src={redlines} alt="" className="w-20 h-10 " />
            </div>

            <div className="mt-6 h-full p-5">
              <div className="flex flex-col gap-5 items-start">
                <h2>BROWSE KFC OPPORTUNITIES IN YOUR AREA:</h2>

                <select name="" id="" className="w-full h-10 rounded-full p-3">
                  <option value="default">All Positions</option>
                  <option value="">Team Member</option>
                  <option value="">Shift Supervisor</option>
                  <option value="">Restaurant Assistant Manager</option>
                  <option value="">Restaurant General Manager</option>
                </select>

                <input
                  type="text"
                  className="w-[330px] h-6 rounded-full p-2"
                  placeholder="Set your location to find a KFC"
                />
                <button className="focus:outline-none text-white bg-black hover:bg-black focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm  dark:hover:bg-black dark:bg-black border-none w-36 h-10 tracking-wide">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* flotting inputs */}
      </div>

      <div className="ml-[510px] w-[70%]">
        <div className="ml-10 mt-10">
          <p style={{ letterSpacing: "2px" }}>READY TO APPLY</p>
          <h1>CHOOSE A RESTAURANT JOB</h1>
        </div>
        <CareesSlideshow />
      </div>

      <div className="ml-[600px] w-[60%]">
        <div className="flex flex-col gap-8 mt-6 mb-6">
          <p>RESTAURANT</p>
          <h1 className="text-6xl">INTERVIEW PROCESS</h1>
          <p className="text-gray-400 w-[40%]">
            At KFC, we know your time is valuable and want to prepare you for
            what is next! See what happens after you fill out an application for
            one of our Restaurant Opportunities. Note: Most KFC restaurants are
            operated by independent franchisees who have their own hiring and
            benefits guidelines. These requirements may vary by location, and
            you’ll learn more when you meet with the hiring manager.
          </p>
        </div>

        <Divider />

        <div className="mb-10">
          <p className="text-gray-400 mb-3">01</p>
          <h1 className="text-4xl mb-5">APPLICATION</h1>
          <p className="text-gray-400">
            Your application will be reviewed by the restaurant leader.
          </p>
        </div>
        <Divider />

        <div className="mb-10">
          <p className="text-gray-400 mb-3">02</p>
          <h1 className="text-4xl mb-5">SCHEDULING</h1>
          <p className="text-gray-400">
            One of the restaurant leaders will reach out to schedule an
            interview!
          </p>
        </div>
        <Divider />

        <div className="mb-10">
          <p className="text-gray-400 mb-3">03</p>
          <h1 className="text-4xl mb-5">INTERVIEW</h1>
          <p className="text-gray-400">
            You will meet with a restaurant leader to go over your experience
            and learn more about the job opening. Don’t be afraid to ask
            questions!
          </p>
        </div>
        <Divider />
      </div>

      <div className="ml-[500px] w-[70%] mt-10">
        <div className="flex  gap-5">
        <div>
          <img src="https://images.ctfassets.net/9tka4b3550oc/5f3MpBw3YhmwFQ2XrAWtaD/ccce597b56b28b5aa8f6a0b56f940a13/banner-quote-team-member.jpg?q=75&w=580" alt="" />
        </div>
        <div className="flex flex-col items-center justify-center p-5">
          <h1>"I AM EXPERIENCING NEW THINGS, LEARNING NEW SKILLS AND MEETING NEW PEOPLE. AND I’M WORKING AT A GREAT PLACE WITH GREAT PEOPLE."</h1>
          <p>Luis, Team Member, Overland Park, KS</p>
        </div>
        </div>
      </div>

      <div className="ml-[510px] w-[70%] mt-10">
        <div className="flex gap-5">
        <div className="flex flex-col items-center justify-center p-5">
          <h1>"WORKING TOGETHER, WE CAN LIMIT THE SPREAD OF COVID-19 WHILE OFFERING CONVENIENT, AFFORDABLE FOOD IN A LOW CONTACT ENVIRONMENT."</h1>
          <p>David Gibbs, CEO of Yum! Brands</p>
        </div>
        <div>
          <img src="https://images.ctfassets.net/9tka4b3550oc/5IMyL8KmhVGl6fo77t7BT/041fbb0005c5862d06087cf2a456a8d6/banner-quote-safety.jpg?q=75&w=580" alt="" />
        </div>
        </div>
      </div>

      <div className="h-[800px]">
        {/* bg image  */}
        <div
          className="relative overflow-hidden bg-cover bg-no-repeat text-center h-full"
          style={{
            backgroundImage: `url(https://images.ctfassets.net/9tka4b3550oc/51fyOnDnrgeXWqP1B2Zsih/7d9b6da24b0c8ba9e84fcb2342539bda/banner-card-corporate-careers.jpg?q=75&w=1680)`,
          }}
        >
          <div className="absolute bottom-0 right-[450px] top-52 h-[450px] w-[400px] overflow-hidden bg-fixed rounded-lg  bg-gray-100">
            <div className="pl-6 flex items-start">
              <img src={redlines} alt="" className="w-20 h-10 " />
            </div>

            <div className="mt-6 h-full p-10">
              <div className="flex flex-col gap-5 items-start">
                <p className="text-gray-500">EXPLORE</p>
                <h2 className="text-4xl">CORPORATE CAREERS</h2>
                <p  className="text-gray-500 text-left">At our Restaurant Support Center, in Louisville, KY, we support our brand in every aspect of the business! We take great pride in serving our franchises, restaurant teams and guests.</p>
                <p className="text-gray-500 text-left">We invite you to learn more about how you can be your best self, make a difference, and have fun at KFC Corporate.</p>
 
                <button className="focus:outline-none text-white bg-black hover:bg-black focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm dark:bg-black dark:hover:bg-black  border-none w-36 h-10 tracking-wide">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* flotting inputs */}
      </div>

      <div className="h-[300px] flex items-center m-auto w-[50%] ">
           <div className=" text-gray-400 " style={{lineHeight:'25px', letterSpacing:"1px"}}>
                  <p>KFC Corporation is an Equal Opportunity Employer. Applicants for all job openings are welcome and will be considered without regard to race, gender, age, national origin, color, religion, disability, military status, or any other basis protected by applicable federal, state or local law. An offer of employment may be contingent upon a satisfactory background check and proof of employment eligibility. Restaurant-specific positions are available at both corporate and franchised KFC locations. Those applying for a position with a franchisee or licensee of KFC are not applying for to work at KFC Corporation or any of its affiliates. Franchisees and licensees are independent business owners and employers who are responsible for their own employment practices, including setting their own wage and benefit programs.</p>
           </div>
      </div>
    </div>
  );
};

export default Carees;
