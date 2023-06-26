import React from 'react';
import teamever from '../../../assets/image/teamever.png'
import ceo from '../../../assets/image/ceo.png'
import bannerBg from '../../../assets/image/bannerBg.png'
import './Banner.css'


const Banner = () => {
    return (
        <div className='md:pl-24 px-6 h-[650px] bg-[#F6FAFF]'>
          

      <div className='grid md:grid-cols-2'>
      <div className="md:pt-[87px] pt-14">
                <div className='flex '>

                    <div className='relative px-6 md:block hidden'>
                        <div class="border-l-4 border-[#5C748C] h-[320px]"></div>
                        <div className='absolute left-0  h-12 w-12 rounded-full shadow-lg flex justify-center items-center'>
                            <div className='h-2 w-2 rounded-full bg-[#5C748C]'></div>
                        </div>
                    </div>
                    <div className='md:pl-4'>
                        <div className="flex gap-4">
                            <div className="">
                                <img
                                    className=" "
                                    src={teamever}
                                    alt=""
                                />
        
                            </div>
                            <div>
                                <h3 className="md:text-2xl text-lg font-semibold">Best Supportive Team Ever</h3>
                            </div>
                        </div>

                        <div className="space-y-10 pt-8">
                            <h1 className="md:text-6xl text-2xl text-[#152F47] font-bold">
                            Create Success Story <br /> With <span className='text-[#5C748C]'>Alsughayer</span>
                            </h1>
                            <p>
                                Choose Alsughayer & Partners to get perfect strategic <br />
                                Consultancy for your business success.
                            </p>
                            <button className="bg-gradient-to-r from-[#254b6e] to-[#152F47] delay-200 text-white font-semibold px-5 py-4 rounded-lg">
                                Book a Consultation
                            </button>
                        </div></div>
                </div>

              <div className='md:pl-16'>
              <div className="pt-16 ">
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
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor <br />
                        incididunt ut labore et dolore magna aliqua Utenimad minim veniam.
                    </p>
                </div>
                <div className="pt-6  flex gap-2">
                    <div>
                        <img className="h-[50px] w-[50px] rounded-full" src={ceo} alt="" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-[#0F172A]">Khabib Ali</h3>
                        <p>CEO, Supreme World.</p>
                    </div>

                </div>
                <div className="flex gap-2  items-center pt-2">
                    <div className="h-3 w-3 rounded-full bg-[#657790]"></div>
                    <div className="w-12 h-2 bg-[#657790] rounded-lg"></div>
                    <div className="h-3 w-3 rounded-full bg-[#657790]"></div>
                    <div className="h-3 w-3 rounded-full bg-[#657790]"></div>
                </div>
              </div>

            </div>

        <div className='md:block hidden'>

            <img src={bannerBg} alt="" />
        </div>
      </div>
        </div>
    );
};

export default Banner;