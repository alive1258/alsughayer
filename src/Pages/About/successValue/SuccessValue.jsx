import React from 'react';

import elogo1 from '../../../assets/image/elogo1.png'
import exist from '../../../assets/image/exist.png'

const SuccessValue = () => {
    return (


        <div className='pt-10'>
            <div className='md:flex  md:px-24 px-6 md:justify-between  items-center'>
                <div className='mb-4'>
                    <h1 className='text-[#152F47] font-semibold text-5xl'>100+</h1>
                    <p className='pt-2'>Projects Completed</p>
                </div>
                <div className='border-r h-16 md:block hidden border-[#DCE2EB]'></div>

                <div className='mb-4'>
                    <h1 className='text-[#152F47] font-semibold text-5xl'>4+</h1>
                    <p className='pt-2'>Award Winner</p>
                </div>
                <div className='border-r h-16 md:block hidden border-[#DCE2EB]'></div>
                <div className='mb-4'>
                    <h1 className='text-[#152F47] font-semibold text-5xl'>200+</h1>
                    <p className='pt-2'>Satisfied Clients</p>
                </div>
                <div className='border-r h-16 md:block hidden border-[#DCE2EB]'></div>



                <div className='mb-4'>
                    <h1 className='text-[#152F47] font-semibold text-5xl'>300+</h1>
                    <p className='pt-2'>Good Testimonials</p>
                </div>


            </div>


            <div className='mt-36 grid md:grid-cols-2 items-center px-6 md:px-[72px]'>
                <div className='bg-[#F7F7F7] md:block hidden relative h-[642px] w-[382px]'>
                    <div className='absolute  top-20 -right-24'>
                        <img src={exist} alt="" />
                    </div>
                    <div className='absolute bottom-20 -right-24'>
                        <img  src={elogo1} alt="" />
                    </div>

                </div>
                <div>
                    <h1 className='text-[#0F172A] md:text-5xl text-2xl font-semibold'>Why do we exist</h1>
                    <p className='pt-9'>
                        Nec non, et sed semper suspendisse. Sapien, ridiculus euismod varius faucibus feugiat et
                        dignissim porta id. Facilisi neque nec id nunc massa. Nisl nibh faucibus nunc vel. Vulputate
                        pellentesque fringilla orci praesent vel cursus dui. Imperdiet euismod tempus, massa
                        rutrum. Gravida augue purus non, cursus quam cum ultricies. Pellentesque blandit sit ut
                        magna enim.  </p>
                    <p className='pt-8'>
                        Tellus aliquet a faucibus et eget elementum faucibus. Duis scelerisque diam non
                        ullamcorper. Sed quis netus et fames elementum. Pellentesque quisque tristique
                        consectetur risus adipiscing. Facilisi et a congue nam phasellus tristique orci morbi
                        fermentum. Egestas egestas netus diam turpis sodales eget.
                    </p>

                </div>
            </div>

        </div>

    );
};

export default SuccessValue;