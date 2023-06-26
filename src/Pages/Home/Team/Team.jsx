import React from 'react';
import t11 from '../../../assets/image/t11.png'
import t22 from '../../../assets/image/t22.png'
import t33 from '../../../assets/image/t33.png'
import t44 from '../../../assets/image/t44.png'
import t55 from '../../../assets/image/t55.png'


const Team = () => {
    return (

        <div className="px-6 md:px-28  mt-10 md:mt-36">

        <p className="font-semibold">Meet the team</p>
        <h1 className="md:text-5xl text-2xl mt-4 font-semibold text-[#0F172A]">Profession Expert team</h1>
   
  <div className="md:flex md:gap-4  md:justify-center py-10">

   
  
  <div className="max-w-sm mb-4 flex md:justify-center items-center transform transition duration-500 hover:opacity-100 hover:scale-y-125">
        
  <div className='bg-[#152F47] md:w-[180px] w-full md:mt-8 h-[400px] relative rounded-lg'>
        <img className="md:w-[180px] w-full absolute bottom-0 h-[350px] " src={t22} alt="" />
        </div>
        
        <div className="absolute opacity-0 hover:opacity-100">
          <div className="pt-40 text-bottom">
            <button className="text-center rounded-lg p-2 bg-white learn  text-gray-700 text-sm">
              <p>Data Operator</p>
              <p>Antham </p>
            </button>
          </div>
        </div>
      </div>



      <div className="max-w-sm mb-4 flex justify-center items-center transform transition duration-500 hover:opacity-100 hover:scale-y-125">
        
      <div className='bg-[#152F47] md:w-[180px] w-full mt-8 h-[400px] relative rounded-lg'>
        <img className="md:w-[180px] w-full absolute bottom-0 h-[350px] " src={t11} alt="" />
        </div>
      
      <div className="absolute opacity-0 hover:opacity-100">
        <div className="pt-40 text-bottom">
          <button className="text-center rounded-lg p-2 bg-white learn  text-gray-700 text-sm">
          <p>Manager</p>
              <p>Jack </p>
          </button>
        </div>
      </div>
    </div>

    <div className="max-w-sm mb-4 flex justify-center items-center transform transition duration-500 hover:opacity-100 hover:scale-y-125">
        
    <div className='bg-[#152F47] md:w-[180px] w-full mt-8 h-[400px] relative rounded-lg'>
        <img className="md:w-[180px] w-full absolute bottom-0 h-[350px] " src={t33} alt="" />
        </div>
      
      <div className="absolute opacity-0 hover:opacity-100">
        <div className="pt-40 text-bottom">
          <button className="text-center rounded-lg p-2 bg-white learn text-gray-700 text-sm">
          <p>Manager</p>
              <p>Jack </p>
          </button>
        </div>
      </div>
    </div>

    <div className="max-w-sm mb-4 flex justify-center items-center transform transition duration-500 hover:opacity-100 hover:scale-y-125">
        
    <div className='bg-[#152F47] md:w-[180px] w-full mt-8 h-[400px] relative rounded-lg'>
        <img className="md:w-[180px] w-full absolute bottom-0 h-[350px] " src={t44} alt="" />
        </div>
      
      <div className="absolute opacity-0 hover:opacity-100">
        <div className="pt-40 text-bottom">
          <button className="text-center rounded-lg p-2 bg-white learn text-gray-700 text-sm">
          <p>Manager</p>
              <p>Jack </p>
          </button>
        </div>
      </div>
    </div>

    <div className="max-w-sm mb-4 flex justify-center items-center transform transition duration-500 hover:opacity-100 hover:scale-y-125">
        
    <div className='bg-[#152F47] md:w-[180px] w-full mt-8 h-[400px] relative rounded-lg'>
        <img className="md:w-[180px] w-full absolute bottom-0 h-[350px] " src={t55} alt="" />
        </div>
      
      <div className="absolute opacity-0 hover:opacity-100">
        <div className="pt-40 text-bottom">
          <button className="text-center rounded-lg p-2 bg-white learn text-gray-700 text-sm">
          <p>Manager</p>
              <p>Jack </p>
          </button>
        </div>
      </div>
    </div>

    <div className="max-w-sm mb-4 flex justify-center items-center transform transition duration-500 hover:opacity-100 hover:scale-y-125">
        
    <div className='bg-[#152F47] md:w-[180px] w-full mt-8 h-[400px] relative rounded-lg'>
        <img className="md:w-[180px] w-full absolute bottom-0 h-[350px] " src={t11} alt="" />
        </div>
      
      <div className="absolute opacity-0 hover:opacity-100">
        <div className="pt-40 text-bottom">
          <button className="text-center rounded-lg p-2 bg-white learn text-gray-700  text-sm">
          <p>Manager</p>
              <p>Jack </p>
          </button>
        </div>
      </div>
    </div>



 

  </div>
</div>
    );
};

export default Team;