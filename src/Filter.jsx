import React,{useState} from 'react'

const Filter=()=> {
      const [a,setVal] = useState([
            {
                name:"Nagaraj",
                age:15,
            },
            {
                name:"pradeep",
                age:18,
            },
            {
                name:"harish",
                age:22,
            }
        ])
        function Clickhandler(){

          setVal( a.filter((task)=>task.age >=18)
        )
        
        
        }

  return (
    <div>
     {
        a.map((task)=>
            <div>
                <p>{task.name}</p>
                <p>{task.age}</p>
            </div>
        )
        

        
     }
     <button className='h-[40px] w-[40px] bg-amber-200 , ' onClick={Clickhandler}>ok</button>
    </div>
 
  )
   
}

export default Filter