import { useState } from 'react'

function App() {
  const [color, setColor] = useState("white")

  return (
  <div className="w-full h-screen" style={{backgroundColor:color}}>
    <div className="w-full h-screen flex items-end justify-center">
      <div className="mb-5 border rounded-xl shadow-lg p-2 bg-white">

        <button className="m-1 border rounded-xl shadow-lg p-2"
        onClick={()=>{setColor("red")}} style={{backgroundColor:"Red", color:"white"}}>Red</button>

        <button className="m-1 border rounded-xl shadow-lg p-2"
        onClick={()=>{setColor("Green")}} style={{backgroundColor:"green", color:"white"}}>Green</button>

        <button className="m-1 border rounded-xl shadow-lg p-2"
        onClick={()=>{setColor("Blue")}} style={{backgroundColor:"blue", color:"white"}}>Blue</button>

        <button className="m-1 border rounded-xl shadow-lg p-2"
        onClick={()=>{setColor("Olive")}} style={{backgroundColor:"olive", color:"white"}}>Olive</button>

        <button className="m-1 border rounded-xl shadow-lg p-2"
        onClick={()=>{setColor("Pink")}} style={{backgroundColor:"pink", color:"white"}}>Pink</button>

        <button className="m-1 border rounded-xl shadow-lg p-2"
        onClick={()=>{setColor("Purple")}} style={{backgroundColor:"Purple", color:"white"}}>Purple</button>

        <button className="m-1 border rounded-xl shadow-lg p-2"
        onClick={()=>{setColor("Yellow")}} style={{backgroundColor:"Yellow", color:"black"}}>Yellow</button>

        <button className="m-1 border rounded-xl shadow-lg p-2"
        onClick={()=>{setColor("White")}} style={{backgroundColor:"White"}}>White</button>

        <button className="m-1 border rounded-xl shadow-lg p-2"
        onClick={()=>{setColor("Black")}} style={{backgroundColor:"Black", color:"white"}}>Black</button>

      </div>
    </div>
  </div>
)
}

export default App
