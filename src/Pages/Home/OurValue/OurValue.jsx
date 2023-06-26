import React from 'react';
import value3 from '../../../assets/image/value3.png'
import value2 from '../../../assets/image/value2.png'
import value1 from '../../../assets/image/value1.png'
import value01 from '../../../assets/image/value01.png'
import value02 from '../../../assets/image/value02.png'
import value03 from '../../../assets/image/value03.png'
import value04 from '../../../assets/image/value04.png'

const OurValue = () => {
    return (
        <div className='md:pt-36 pt-4 Md:pl-28 md:pr-20 px-6'>
            <div className='grid md:grid-cols-2 gap-20'>
                <div className='mt-28 md:relative md:block hidden'>
                    <div className='md:absolute '>
                    <img src={value3} alt="" />
                    </div>
                    <div className='absolute -top-16 right-20 shadow-xl rounded-lg'>
                        <img src={value2} alt="" />
                    </div>
                    <div className='absolute bottom-[70px] -left-2'>
                    <img src={value1} alt="" />
                    </div>
                </div>
                <div>
                    <h5 className='text-lg font-semibold text-[#152F47]'>Our Value</h5>
                    <h1 className='text-[#0F172A] md:text-5xl text-2xl pt-4 font-semibold'>Things That Added <br />
                        Our Value</h1>
                    <p className='pt-8'>Reach the right decisions by accessing your stats at a glance. Analyse your <br />
                        performance and gain flexibility with our intuitive dashboard to achieve</p>

                    <div className='grid md:grid-cols-2 gap-8 pt-10'>
                      
                      <div>

                      <div className='border rounded-xl border-[#DCE2EB] h-40'>
                           <div className='relative'>
                            <div className=' pt-4 pl-4'>
                                <img src={value01} alt="" />
                            </div>
                            <div className='absolute top-10 left-10'>
                            <h1 className='text-[#0F172A] font-semibold text-2xl'>Research</h1>
                            <p className='pt-2'>Research on the business to get <br />
                                core of the problem</p>
                            </div>                            
                           </div>
                        </div>
                        <div className='border rounded-xl mt-7 border-[#DCE2EB] h-40'>
                           <div className='relative'>
                            <div className=' pt-4 pl-4'>
                                <img src={value03} alt="" />
                            </div>
                            <div className='absolute top-10 left-10'>
                            <h1 className='text-[#0F172A] font-semibold text-2xl'>Targeting</h1>
                            <p className='pt-2'>Research on the business to get <br />
                                core of the problem</p>
                            </div>                            
                           </div>
                        </div>

                      </div>

                 <div className='pt-6'>
                 <div className='border rounded-xl border-[#DCE2EB] h-40'>
                           <div className='relative'>
                            <div className=' pt-4 pl-4'>
                                <img src={value02} alt="" />
                            </div>
                            <div className='absolute top-10 left-10'>
                            <h1 className='text-[#0F172A] font-semibold text-2xl'>Data Collection</h1>
                            <p className='pt-2'>Research on the business to get <br />
                                core of the problem</p>
                            </div>                            
                           </div>
                        </div>

               

                        <div className='border rounded-xl mt-7 border-[#DCE2EB] h-40'>
                           <div className='relative'>
                            <div className=' pt-4 pl-4'>
                                <img src={value04} alt="" />
                            </div>
                            <div className='absolute top-10 left-10'>
                            <h1 className='text-[#0F172A] font-semibold text-2xl'>Problem Solution</h1>
                            <p className='pt-2'>Research on the business to get <br />
                                core of the problem</p>
                            </div>                            
                           </div>
                        </div>
                 </div>
                     
                    </div>

                </div>

            </div>

        </div>
    );
};

export default OurValue;