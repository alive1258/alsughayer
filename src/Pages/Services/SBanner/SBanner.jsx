import React from 'react';

const SBanner = () => {
    return (
        <div className='bg-[#F6FAFF] flex justify-center h-[370px] pb-10 items-center pt-10'>
            <div className='text-center'>
                <h1 className='text-5xl font-semibold text-[#0F172A]'>Checkout details services <br />
                    that we provide for clients</h1>
                <p className='mt-6'>Varius amet, integer tellus non eget viverra. Ultrices tellus donec gravida id <br />
                    sed senectus dolor cursus sed. Ullamcorper tellus ac cras nec, pretium <br />
                    laoreet duis. </p>

               <div className='flex justify-center pt-6'>
               <button className="ml-6 md:block hidden bg-gradient-to-r from-[#254b6e] to-[#152F47] delay-200 text-white font-semibold px-5 py-4 rounded-lg">
                    Discover More
                </button>
               </div>

            </div>
        </div>
    );
};

export default SBanner;