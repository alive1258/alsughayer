import React from 'react';
import t1 from '../../../assets/image/t1.png'
import t2 from '../../../assets/image/t2.png'
import t3 from '../../../assets/image/t3.png'

const TeamDo = () => {
    return (
        <div className='md:mt-36 pt-10 px-6 md:px-28'>
        <div className='text-center'>
            <h5 className='text-semibold'>Detail Service</h5>
            <h1 className='text-[#0F172A] text-2xl md:text-5xl font-semibold'>What Our Team Do</h1>
        </div>

        <div className='mt-16 mb-8'>
            <div className='border flex border-[#E5EAF1] rounded-3xl'>
                <div className='md:flex md:justify-between px-6 py-6 md:px-24 md:py-10 gap-6'>

                    <div className='md:border-r md:pr-14 border-[#E5EAF1]'>
                        <div className='flex justify-center items-center bg-[#e2e6ea] h-16 w-16 rounded-full'>
                        <img className='' src={t3} alt="" />
                        </div>
                        <p className='text-[#0F172A] text-2xl pt-16 font-normal'>Planning</p>
                        <p className='pt-3'>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt</p>
                       
                    </div>

                    <div className='md:border-r md:px-14 border-[#E5EAF1]'>
                    <div className='flex justify-center items-center bg-[#e2e6ea] h-16 w-16 rounded-full'>
                        <img className='' src={t2} alt="" />
                        </div>
                        <p className='text-[#0F172A] text-2xl font-normal pt-16'>Validation</p>
                        <p className='pt-3'>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt</p>
                      
                    </div>

                    <div className='md:pl-14'>
                    <div className='flex justify-center items-center bg-[#e2e6ea] h-16 w-16 rounded-full'>
                        <img className='' src={t1} alt="" />
                        </div>
                        <p className='text-[#0F172A] text-2xl pt-16 font-normal'>Decition</p>
                        <p className='pt-3'>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt</p>

                    </div>
                </div>

            </div>
        </div>
    </div>

    );
};

export default TeamDo;