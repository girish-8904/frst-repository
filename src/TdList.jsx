import React,{useRef,useState} from 'react'
import Td from './Tdlist1.jsx'
const TdList=() => {

    const [a,setVal] = useState([
        {
            name:"Nagaraj",
            state:false
        }
    ])
    const ab = useRef("text")
    function Clickhandler(){
        let name1 = ab.current.value;
        setVal([...a,{
            name:name1
        }])
    }
  return (
    <div className='bg-amber-400'>

    <div className='bg-blue-500 h-20 w-200 ml-150 text-6xl flex items-center justify-center gap-5'>To-Do List</div>

    <div className='flex gap-2'>
   
       <input className='bg-amber-50 h-20 w-150 flex mt-20 ml-150 text-5xl'htmlFor="text" ref={ab} type="text" />

       <button className='bg-orange-500 h-20 w-20 flex ml-05 mt-20 text-6xl justify-center' onClick={Clickhandler}>+</button>
    </div>
    <div className='h-screen w-300 bg-amber-400 ml-80 overflow-y-scroll'>
        {
            a.map(e=>{
                return<>
                    <Td txt={e}/>
                </>
            })
        }
    </div>
      
    </div>
  )
}


  


export default TdList