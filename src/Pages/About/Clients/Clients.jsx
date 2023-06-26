import React from 'react';
import sue from '../../../assets/Clients/squ.png'
import space from '../../../assets/Clients/space.png'
import plad from '../../../assets/Clients/plad.png'
import raz from '../../../assets/Clients/raz.png'
import shopi from '../../../assets/Clients/shopi.png'
import pay from '../../../assets/Clients/pay.png'
import mon from '../../../assets/Clients/mon.png'
import upw from '../../../assets/Clients/up.png'
import slack from '../../../assets/Clients/slack.png'
import trello from '../../../assets/Clients/trello.png'
import netflix from '../../../assets/Clients/netflix.png'
import microsoft from '../../../assets/Clients/microsoft.png'

const Clients = () => {
    return (
        <div className='md:px-24 md:mt-36 mt-10'>
            <h1 className='md:text-5xl text-2xl text-center font-semibold text-[#0F172A]'>Our satisfied clients</h1>
            <div className='grid mt-12 md:grid-cols-4 grid-cols-1 gap-9 px-6'>
                <div className='bg-[#F7F7F7]  flex justify-center items-center h-[170px] w-[286px]'>
                    <img src={raz} alt="" />
                </div>
                <div className='bg-[#F7F7F7] flex justify-center items-center h-[170px] w-[286px]'>
                    <img src={plad} alt="" />
                </div>
                <div className='bg-[#F7F7F7] flex justify-center items-center h-[170px] w-[286px]'>
                    <img src={space} alt="" />
                </div>
                <div className='bg-[#F7F7F7] flex justify-center items-center h-[170px] w-[286px]'>
                    <img src={sue} alt="" />
                </div>
                <div className='bg-[#F7F7F7] flex justify-center items-center h-[170px] w-[286px]'>
                    <img src={upw} alt="" />
                </div>
                <div className='bg-[#F7F7F7] flex justify-center items-center h-[170px] w-[286px]'>
                    <img src={mon} alt="" />
                </div>
                <div className='bg-[#F7F7F7] flex justify-center items-center h-[170px] w-[286px]'>
                    <img src={pay} alt="" />
                </div>
                <div className='bg-[#F7F7F7] flex justify-center items-center h-[170px] w-[286px]'>
                    <img src={shopi} alt="" />
                </div>
                <div className='bg-[#F7F7F7] flex justify-center items-center h-[170px] w-[286px]'>
                    <img src={slack} alt="" />
                </div>
                <div className='bg-[#F7F7F7] flex justify-center items-center h-[170px] w-[286px]'>
                    <img src={trello} alt="" />
                </div>
                <div className='bg-[#F7F7F7] flex justify-center items-center h-[170px] w-[286px]'>
                    <img src={netflix} alt="" />
                </div>
                <div className='bg-[#F7F7F7] flex justify-center items-center h-[170px] w-[286px]'>
                    <img src={microsoft} alt="" />
                </div>
                
            </div>    


        </div>
    );
};

export default Clients;