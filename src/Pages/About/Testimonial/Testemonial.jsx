import React from 'react';
import ceo from '../../../assets/image/ceo.png'

const Testemonial = () => {
    return (
        <div className="md:mt-36 mt-10 md:mb-4 md:mx-24">
      
        <div className="grid md:grid-cols-2 grid-cols-1  px-6 md:px-24 md:gap-8 bg-[#F6F7FB] rounded-lg md:rounded-[64px] md:h-[600px]">
          <div className='flex items-center'>
          <div>
          <p>Testimonial</p>
            <h1 className="text-[#0F172A] mt-4 text-2xl md:text-5xl font-semibold">
              Latest Project We Have Delivered
            </h1>
          </div>
          </div>
  
          <div>
        <div id="content flex ">
        <div className="md:pt-40">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                // checked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <p className='pt-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do
eiusmod tempor incididunt ut labore et dolore <br /> magna aliqua
Utenimad minim veniam.
              </p>
  
              <div className="pt-10 flex gap-2">
              <div>
                <img className="h-[50px] w-[50px] rounded-full" src={ceo} alt="" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#0F172A]">Sulli Kiri</h3>
                <p>CEO, Supreme World.</p>
              </div>
            </div>
            <div>
       
        </div>
           
            </div>
  
        </div>
            <div className="md:mt-28 mt-4 py-4">
              <div className="flex gap-4  justify-start transform -top-12 left-0">
                <a  className="btn btn-outline h-12 w-12 rounded-full">
                  ❮
                </a>
                <a  className="btn btn-outline h-12 w-12 rounded-full">
                  ❯
                </a>
              </div>
            </div>
         
  
  
          </div>
        </div>
      </div>
    );
};

export default Testemonial;