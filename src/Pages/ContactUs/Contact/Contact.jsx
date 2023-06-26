import React from 'react';

const Contact = () => {
    return (
        <div className='mb-10 md:mb-24 md:px-28 '>
            <div className='bg-white px-6 md:px-20 py-12 shadow-2xl mb-4 '>
               
                 
                    <div >
                       
                        <div className='md:flex gap-6'>
                            <input type="text" placeholder="First Name" className="input input-bordered bg-white  w-full md:mt-2" />
                            <input type="text" placeholder="Last Name" className="input input-bordered bg-white  w-full md:mt-2 mt-4" />

                        </div>
                        <div className='md:flex gap-6 mt-4'>
                            <input type="text" placeholder="Phone" className="input input-bordered w-full bg-white  md:mt-2" />
                            <input type="text" placeholder="Email" className="input input-bordered w-full bg-white  md:mt-2 mt-4" />

                        </div>
                        <div className='mt-4'>
                            <input type="text" placeholder="Company or organisation" className="input bg-white  input-bordered w-full " />
                        </div>

                        <div className='mt-10'>
                        <textarea className="textarea bg-white  textarea-bordered h-36 w-full" placeholder="Message or description"></textarea>

                        </div>
                        <div className='mt-8 flex justify-end'>
                        <button className="ml-6 md:block hidden bg-gradient-to-r from-[#254b6e] to-[#152F47] delay-200 text-white font-semibold px-5 py-4 rounded-lg">
                        Send Message
                            </button>
                        </div>
                    </div>

                </div>
     
        </div>
    );
};

export default Contact;