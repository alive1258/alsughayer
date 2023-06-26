import React from 'react';
import aboutbn from '../../../assets/image/aboutbn.png'

const AboutBanner = () => {
    return (
        <div className='md:px-24 px-6 pt-16  bg-[#F6FAFF]'>
            <div className='md:flex justify-between'>
                <h1 className='md:text-5xl mb-4 text-2xl font-semibold'>Get to know us more <br />
                    and why we exist</h1>
                <p>Varius amet, integer tellus non eget viverra. Ultrices tellus donec <br />
                    gravida id sed senectus dolor cursus sed. Ullamcorper tellus ac <br />
                    cras nec, pretium laoreet duis. </p>
            </div>
            <div className='md:pt-20 pt-6 md:mb-20'>
                <img src={aboutbn} alt="" />

               
            </div>
           



        </div>
    );
};

export default AboutBanner;