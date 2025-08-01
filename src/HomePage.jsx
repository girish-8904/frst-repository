import React from 'react';
import { IoHome, IoLogoBuffer } from "react-icons/io5";
import { FcAbout, FcGallery } from "react-icons/fc";
import { LuTableProperties } from "react-icons/lu";
import { VscSymbolProperty } from "react-icons/vsc";
import { MdContactPhone } from "react-icons/md";


function HomePage() {
  return (
    
    <div className="h-[100vh] w-[100vw]" style={{
    backgroundImage: `url("/Background.jpeg")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }}>
      
    
      <div className='h-[10vh]  flex justify-end gap-50 items-center pr-20 backdrop-blur-5xl    ' >
        <div className='flex w-[40vw] items-center pl-10 hover:scale-110 transiction'>
          <IoLogoBuffer size={60} />
        </div>

        <IoHome size={150} className='hover:scale-150 transition' />
        <FcAbout size={150} className='hover:scale-150 transition' />
        <LuTableProperties size={150} className='hover:scale-150 transition' />
        <VscSymbolProperty size={150} className='hover:scale-150 transition' />
        <FcGallery size={150} className='hover:scale-150 transition' />
        <MdContactPhone size={150} className='hover:scale-150 transition' />
      </div>

    
      <div className='h-[65vh]'></div>

      
      <div className='flex justify-between items-center px-8'>
        <div className='h-[20vh] w-[20vw] pl-8 text-4xl font-bold text-black drop-shadow-lg hover:scale-105 transication '>
          A New Standard Of Modern Living
        </div>
        <div className='h-[20vh] w-[20vw] pl-8 text-center text-4xl font-bold text-white drop-shadow-lg'>
          Quebec, Canada
        </div>
      </div>

    </div>
  );
}

export default HomePage;
