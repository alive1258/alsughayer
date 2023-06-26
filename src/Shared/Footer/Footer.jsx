import React from 'react';

import bglogo from "../../assets/image/bglogo.png";
import sss from "../../assets/image/sss.png";
import dis from "../../assets/image/dis.png";
import you from "../../assets/image/you.png";
import tw from "../../assets/image/tw.png";

const Footer = () => {
    return (
        <div className='md:mt-36 mt-10 bg-[#152F47] md:h-[420px] '>
            <div className="md:px-28 px-6 md:pt-20 py-6">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-10  pb-8">
                    <div>
                        <div className=''>
                            <img src={bglogo} alt="" />
                        </div>
                        <div className="pt-6">
                            <p className='text-[#DCE2EB]'>
                                Alsughayer & Partners is a management consulting <br />
                                company that focus on strategy, marketing, <br />
                                organization growth, operations effectiveness, human <br />
                                resources, corporate finance, mergers & acquisitions and <br />
                                governance, risk, and compliance
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="grid md:grid-cols-3 grid-cols-2 md:pt-6 gap-4">
                            <div>
                                <p className="text-lg pb-6 text-white">Quick Links</p>
                                <div className='text-[#DCE2EB]'>
                                    <p>Home</p>
                                    <p>About</p>
                                    <p>Service</p>
                                    <p>Solution</p>
                                    <p>Team</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-lg pb-6 text-white">About us</p>
                                <div className='text-[#DCE2EB]'>
                                    <p>Our Vision</p>
                                    <p>Our Team</p>
                                    <p>Our Works</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-lg pb-6 text-white">Help</p>
                                <div className='text-[#DCE2EB]'>
                                    <p>Privacy Policy</p>
                                    <p>Terms & Conditions</p>
                                    <p>Contact us</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-10 pb-4 md:flex justify-between mx-auto max-w-7xl">
                    <div>
                        <p className="text-white">
                            © Copyright 2023, All Rights Reserved by Masarat Digital
                        </p>
                    </div>
                    <div className='md:pt-1 pt-4'>
                        <div className="flex items-center gap-4">
                            <p className="text-white">Follow us on:</p>

                            <div className='h-9 w-9 rounded-lg bg-[#F6FAFf] flex justify-center items-center'>
                                <img className='h-4 w-4' src={sss} alt="" />
                            </div>
                            <div className='h-9 w-9 rounded-lg bg-[#F6FAFf] flex justify-center items-center'>
                                <img className='h-4 w-4' src={tw} alt="" />
                            </div>
                            <div className='h-9 w-9 rounded-lg bg-[#F6FAFf] flex justify-center items-center'>
                                <img className='h-4 w-4' src={dis} alt="" />
                            </div>
                            <div className='h-9 w-9 rounded-lg bg-[#F6FAFf] flex justify-center items-center'>
                                <img className='h-4 w-4' src={you} alt="" />
                            </div>




                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;