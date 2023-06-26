import React from 'react';
import fame from "../../../assets/image/fame.png";
import v2 from "../../../assets/image/v2.png";
import s1 from "../../../assets/image/s1.png";
import s2 from "../../../assets/image/s2.png";
import s3 from "../../../assets/image/s3.png";
import s4 from "../../../assets/image/s4.png";
import s5 from "../../../assets/image/s5.png";
import s6 from "../../../assets/image/s6.png";
import v3 from "../../../assets/image/v3.png";
import group from "../../../assets/image/group.png";
import { HiArrowRight } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { BsGraphUpArrow } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import './Services.css'

const Services = () => {
    return (
        <div className='servicesBg'>
              <div className="md:pt-[150px] pt-10 pb-12 md:px-24">
      <div className="text-center">
        <h6 className="text-[#152F47] md:text-lg font-semibold">
        Our Services 
        </h6>
        <h1 className="text-[#0F172A] text-xl md:text-5xl font-bold">
        What You Can Get From Us
        </h1>
      </div>
      {/* <div className="pt-8 mt-4 "> */}
      <div className="bgcard pt-8 mt-4 ">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-20 px-6">
          <div className="rounded-lg border border-[#0F172A] hover:bg-[#FFFFFF] hover:border-[#ffffff] py-10 overflow-hidden bg-[#F6F6F6] transition duration-200 ease-in-out  opacity-100">
          <div className="pl-8 ">
              <img src={s1} alt="" />
            </div>
            <div className="pl-8 pt-16">
              <h2 className="text-[#0F172A] text-2xl font-bold">
              Purpose & Strategy
              </h2>
              <p className="pt-4">
                Lorem ipsum dolor sit amet,
                <br />
                consectetur adipiscing elit, sed <br />
                doeiusmod tempor incididunt{" "}
              </p>
              <div className="flex gap-4 items-center pt-6">
                <div>
                  <h2 className="text-[#1A3D37] text-lg font-semibold">
                    Read More
                  </h2>
                </div>
                <div>
                  <HiArrowRight className="" />
                </div>
              </div>
            </div>
          </div>

         
           
          <div className="rounded-lg py-10 shadow-md overflow-hidden border border-[#0F172A]  hover:border-[#ffffff] bg-[#F6F6F6]  transition duration-200 ease-in-out hover:bg-white opacity-100">
          <div className="pl-8 ">
          <img src={s6} alt="" />
            </div>
            <div className="pl-8 pt-16">
              <h2 className="text-[#0F172A] text-2xl font-bold">
              Organisational Growth
              </h2>
              <p className="pt-4">
                Lorem ipsum dolor sit amet,
                <br />
                consectetur adipiscing elit, sed <br />
                doeiusmod tempor incididunt{" "}
              </p>
              <div className="flex gap-4 items-center pt-6">
                <div>
                  <h2 className="text-[#1A3D37] text-lg font-semibold">
                    Read More
                  </h2>
                </div>
                <div>
                  <HiArrowRight className="" />
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg py-10 shadow-md overflow-hidden border border-[#0F172A]  hover:border-[#ffffff] bg-[#F6F6F6] transition duration-200 ease-in-out hover:bg-white opacity-100">
          <div className="pl-8 ">
              <img src={s2} alt="" />
            </div>
            <div className="pl-8 pt-16">
              <h2 className="text-[#0F172A] text-2xl font-bold">
              Marketing
              </h2>
              <p className="pt-4">
                Lorem ipsum dolor sit amet,
                <br />
                consectetur adipiscing elit, sed <br />
                doeiusmod tempor incididunt{" "}
              </p>
              <div className="flex gap-4 items-center pt-6">
                <div>
                  <h2 className="text-[#1A3D37] text-lg font-semibold">
                    Read More
                  </h2>
                </div>
                <div>
                  <HiArrowRight className="" />
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg py-10 shadow-md overflow-hidden bg-[#F6F6F6] border border-[#0F172A]  hover:border-[#ffffff] transition duration-200 ease-in-out hover:bg-white opacity-100">
          <div className="pl-8 ">
              <img src={s5} alt="" />
            </div>
            <div className="pl-8 pt-16">
              <h2 className="text-[#0F172A] text-2xl font-bold">
              Human Resources
              </h2>
              <p className="pt-4">
                Lorem ipsum dolor sit amet,
                <br />
                consectetur adipiscing elit, sed <br />
                doeiusmod tempor incididunt{" "}
              </p>
              <div className="flex gap-4 items-center pt-6">
                <div>
                  <h2 className="text-[#1A3D37] text-lg font-semibold">
                    Read More
                  </h2>
                </div>
                <div>
                  <HiArrowRight className="" />
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg py-10 shadow-md overflow-hidden bg-[#F6F6F6] border border-[#0F172A]  hover:border-[#ffffff] transition duration-200 ease-in-out hover:bg-white opacity-100">
          <div className="pl-8 ">
              <img src={s4} alt="" />
            </div>
            <div className="pl-8 pt-16">
              <h2 className="text-[#0F172A] text-2xl font-bold">
              Corporate Finance
              </h2>
              <p className="pt-4">
                Lorem ipsum dolor sit amet,
                <br />
                consectetur adipiscing elit, sed <br />
                doeiusmod tempor incididunt{" "}
              </p>
              <div className="flex gap-4 items-center pt-6">
                <div>
                  <h2 className="text-[#1A3D37] text-lg font-semibold">
                    Read More
                  </h2>
                </div>
                <div>
                  <HiArrowRight className="" />
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg py-10 shadow-md overflow-hidden bg-[#F6F6F6] border border-[#0F172A]  hover:border-[#ffffff] transition duration-200 ease-in-out hover:bg-white opacity-100">
          <div className="pl-8 ">
              <img src={s3} alt="" />
            </div>
            <div className="pl-8 pt-16">
              <h2 className="text-[#0F172A] text-2xl font-bold">
              Compliance
              </h2>
              <p className="pt-4">
                Lorem ipsum dolor sit amet,
                <br />
                consectetur adipiscing elit, sed <br />
                doeiusmod tempor incididunt{" "}
              </p>
              <div className="flex gap-4 items-center pt-6">
                <div>
                  <h2 className="text-[#1A3D37] text-lg font-semibold">
                    Read More
                  </h2>
                </div>
                <div>
                  <HiArrowRight className="" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className='flex justify-end pt-6 pr-4 gap-4'>
        <div className='bg-[#D7D7D7] h-12 w-12 rounded-full flex justify-center items-center'>
        <IoIosArrowBack/>
       
        </div>
        <div className='bg-[#D7D7D7] h-12 w-12 rounded-full flex justify-center items-center'>
        <IoIosArrowForward/>
        </div>
           
          
    </div>

    </div>

        </div>
    );
};

export default Services;