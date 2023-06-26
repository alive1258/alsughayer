import React from 'react';
import conLogo from '../../../assets/image/conLogo.png'
import contact from '../../../assets/image/contact.png'

const ContactusHome = () => {
    return (
        <div className="md:px-28 md:mb-28 mt-10  md:mt-48">
            <div className="relative">
                <div className="bg-[#152F47] py-6 rounded-lg md:h-[506px]">
                    <div className='pt-20 px-6 md:absolute md:pl-28'>
                        <div className='text-center'>
                            <h6 className='text-[#F6FAFF]'>Contact us</h6>
                            <h1 className='text-[#F6FAFF] md:mt-10 font-semibold md:text-5xl text-2xl'>We help you to grow your <br />
                                business faster & easier.</h1>
                            <p className='text-[#F6FAFF] md:mt-10 mt-4'>Reach the right decisions by accessing your stats at a glance. <br />
                                Analyse your performance .</p>
                            <button className="md:mt-12 mt-4 bg-gradient-to-r from-[#d5d6d7] to-[#F6FAFF] delay-200  font-semibold px-5 py-4 rounded-lg">
                               Contact Us
                            </button>

                        </div>
                    </div>
                </div>
                <div className="absolute -top-28 right-24 md:block hidden">                  
                        <img src={conLogo} alt="" />                   
                </div>
                <div className='absolute bottom-[68px] right-24 md:block hidden'>
                    <img src={contact} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ContactusHome;