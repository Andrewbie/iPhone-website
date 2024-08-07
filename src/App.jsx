import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Modell from './components/Modell'
import Navbar from './components/Navbar'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <main className='bg-black'>
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Modell/>
      </main>
    </>
  )
}

export default App
