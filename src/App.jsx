import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Highlights from "./components/Highlights.jsx";
import Model from "./components/Model.jsx";

const App = () => {
  return (
      <main className='bg-black'>
        <Navbar/>
        <Hero/>
        <Highlights/>
        <Model />
      </main>
  )
}

export default App
