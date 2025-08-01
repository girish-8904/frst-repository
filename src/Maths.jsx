import React,{useState} from 'react'

function Maths() {
      const [input, setInput] = useState('');
     
     function display(e)
     {
        let temp=e.target.innerText;
        if(temp == "=")
        {
            setInput(eval(input))
        }
        else if(temp == "ac")
        {
            setInput("")
        }
        else if(temp == "c")
        {
           setInput(input.slice[0,input.length-1])
        }
        else
        {
           setInput(input+temp)
        }
        
     }

  return (
   
     <div className='w-[100vw] h-[100vh] bg-blue-200 items-center justify-center flex flex-col '>
        <div className='w-[50vw]  ml-[20%] h-[100vh] '>
            <div className='w-[30vw]  h-[10vh] mt-[30px] bg-gray-400 text-end text-2xl items-center' type="text"   >{input}</div><br />
            <div className='w-[30vw] h-[70vh] bg-white-800 mt-[20px] grid grid-cols-5  '>
             <button onClick={display} className='w-[80px] h-[80px] bg-red-400'>c</button>
             <button onClick={display} className='w-[80px] h-[80px] bg-red-400'>ac</button>
             <button onClick={display} className='w-[80px] h-[80px] bg-red-400'>*</button>
             <button onClick={display} className='w-[80px] h-[80px] bg-red-400'>-</button>
             <button onClick={display} className='w-[80px] h-[80px] bg-red-400'>+</button>
             <button onClick={display} className='w-[80px] h-[80px] bg-red-400'>/</button>
             <button onClick={display} className='w-[80px] h-[80px] bg-red-400'>1</button>
             <button onClick={display} className='w-[80px] h-[80px] bg-red-400'>2</button>
             <button onClick={display} className='w-[80px] h-[80px] bg-red-400'>3</button>
             <button onClick={display} className='w-[80px] h-[80px] bg-red-400'>4</button>
             <button onClick={display} className='w-[80px] h-[80px] bg-red-400'>5</button>
             <button onClick={display} className='w-[80px] h-[80px] bg-red-400'>6</button>
             <button onClick={display} className='w-[80px] h-[80px] bg-red-400'>7</button>
             <button onClick={display} className='w-[80px] h-[80px] bg-red-400'>8</button>
             <button onClick={display} className='w-[80px] h-[80px] bg-red-400'>9</button>
             <button onClick={display} className='w-[80px] h-[80px] bg-red-400'>0</button>
              <button onClick={display} className='w-[80px] h-[80px] bg-red-400'>=</button>




            </div>
        </div>
      
    </div>

    
        
    
  )
}

export default Maths