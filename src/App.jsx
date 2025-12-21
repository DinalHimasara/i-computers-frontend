import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './components/productCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    
  <>
    <ProductCard name ="Phone" image="https://picsum.photos/id/3/200/300" price= "42,000.00"/>
    <ProductCard name ="laptop" image="https://picsum.photos/id/0/200/300" price= "1000,000.00"/>
    <ProductCard name ="Watch" image="https://picsum.photos/id/5/200/300" price= "10,000"/>

  </>
)


}

export default App
