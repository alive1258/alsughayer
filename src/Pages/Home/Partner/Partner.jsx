import React from 'react';
import bitcoin from '../../../assets/image/bitcoyen.png'
import visa from '../../../assets/image/visha.png'
import litecoin from '../../../assets/image/v2.png'
import binance from '../../../assets/image/binance.png'
import entham from '../../../assets/image/entharam.png'

const Partner = () => {
    return (
     
             <div className='md:pt-[167px] pt-14 pb-4 px-6'>
           <div className='md:text-center pb-4'>
            <p>Over 1,700+ trusted partner around the world</p>
           </div>
           <div className='md:flex  mt-2 md:justify-center md:gap-28 items-center'>
           <div className='mb-6'>
                <img src={bitcoin} alt="" />
            </div>
            <div className='mb-6'>
            <img src={visa} alt="" />
            </div>
            <div className='flex mb-6'>
                <img src={litecoin} alt="" />
                <p className='text-2xl'>litecoin</p>
            </div>
            <div className='mb-6'>
                <img src={binance} alt="" />
            </div>
            <div>
                <img src={entham} alt="" />
            </div>
           </div>
    
        </div>
    );
};

export default Partner;