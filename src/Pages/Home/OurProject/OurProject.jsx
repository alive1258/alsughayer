import React from 'react';
import iphone from '../../../assets/image/iphon.png'
import mock from '../../../assets/image/mock.png'
import anthbord from '../../../assets/image/anthbrod.png'
import tab from '../../../assets/image/tab.png'

const OurProject = () => {
    return (
        <div className='md:pt-44 pt-12 px-6'>
            <div className='text-center'>
                <h5 className='text-lg font-semibold text-[#0F172A]'>Our project</h5>
                <h1 className='md:text-5xl text-2xl mt-4 text-[#0F172A] font-semibold'>Featured projects we
                </h1>
                <h1 className='md:text-5xl text-2xl mt-4 text-[#0F172A] font-semibold'>have completed</h1>
            </div>

            <div className='md:flex md:justify-center md:gap-36 md:mt-12 mt-8 '>
                <div className=''>
                    <div className='bg-[#DCE2EB] flex justify-center items-center md:h-[492px] md:w-[393px] rounded-xl'>
                        <img src={tab} alt="" />

                    </div>
                    <div className='md:pt-8 pt-4'>
                    <h1 className='font-semibold text-2xl mb-2 text-[#152F47]'>Homify: Compiance Support </h1>
                      <p>  Varius amet, integer tellus non eget viverra. Ultrices <br />
                        tellus donec gravida id sed senectus dolor cursus <br />
                        sed.</p>
                    </div>
                    <div className='bg-[#DCE2EB] mt-24 flex justify-center items-center md:h-[492px] md:w-[393px] rounded-xl'>
                        <img src={iphone} alt="" />
                    </div>
                    <div className='md:pt-8 pt-4'>
                    <h1 className='font-semibold text-2xl mb-2 text-[#152F47]'>Cineplex: Business Strategy Support </h1>
                      <p>  Varius amet, integer tellus non eget viverra. Ultrices <br />
                        tellus donec gravida id sed senectus dolor cursus <br />
                        sed.</p>
                    </div>

                </div>
                <div className='md:mt-[128px] mt-6'>
                    <div className='bg-[#DCE2EB] flex justify-center items-center md:h-[492px] md:w-[393px] rounded-xl'>
                        <img src={anthbord} alt="" />

                    </div>
                    <div className='md:pt-8 pt-4'>
                    <h1 className='font-semibold text-2xl mb-2 text-[#152F47]'>Property BD: Marketing Support </h1>
                      <p>  Varius amet, integer tellus non eget viverra. Ultrices <br />
                        tellus donec gravida id sed senectus dolor cursus <br />
                        sed.</p>
                    </div>
                    <div className='bg-[#DCE2EB] mt-24 flex justify-center items-center md:h-[492px] md:w-[393px] rounded-xl'>
                        <img src={mock} alt="" />
                    </div>
                    <div className='md:pt-8 pt-4'>
                    <h1 className='font-semibold text-2xl mb-2 text-[#152F47]'>Bando Apparels: Finance Support </h1>
                      <p>  Varius amet, integer tellus non eget viverra. Ultrices <br />
                        tellus donec gravida id sed senectus dolor cursus <br />
                        sed.</p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default OurProject;