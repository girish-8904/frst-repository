import React from 'react'

const Tdlist1 = ({txt}) => {
  return (
    <div className=' h-20 flex flex-col justify-center items-center gap-6'>

        
        <div className='bg-amber-500 w-200 h-15 flex'>
            <input className='w-[2rem]'type="checkbox" />
            <h1 className='text-4xl ml-20 '>{txt.name}</h1>
            <div className='text-4xl ml-120'>X</div>
            
            
        </div>


        </div>
    )
}

export default Tdlist1