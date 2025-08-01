import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './HomePage'
import Card from './Card'
import Lastpage from './Lastpage'
import EvenOrOdd from './EvenOrOdd'
import Maths from './Maths.jsx'
import Tdlist from './TdList.jsx'
import Filter from'./Filter.jsx'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Tdlist/> */}
    <Filter/>
    
   
     
    {/* <HomePage />
    <Card/>
    <Lastpage/> */}
   
    {/* <EvenOrOdd/> */}
    </>
  )
}

export default App
