import { useState } from 'react'
import Header from './component/Header'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Navbar />
      <Content />
      <Card />
      <Footer />
    </>
  )
}

export default App
