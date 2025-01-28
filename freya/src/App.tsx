import Header from './components/Header'
import Navbar from './components/Navbar'
import './App.css'
import './styles/style.css'
import Section from './components/Section'
import SectionTwo from './components/SectionTwo'
import SectionThree from './components/SectionThree'
import SectionFive from './components/SectionFive'
import SectionSix from './components/SectionSix'
import BannerThree from './components/BannerThree'
import SectionSeven from './components/SectionSeven'
import BannerFour from './components/BannerFour'
import SectionEight from './components/SectionEight'
import SectionNine from './components/SectionNine'
import Footer from './components/Footer'
import { Route, Routes } from "react-router-dom";
import About from './pages/About'

function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={
          <>
            <Header />
            <Section />
            <SectionTwo />
            <SectionThree />
            <SectionFive />
            <SectionSix />
            <BannerThree />
            <SectionSeven />
            <BannerFour />
            <SectionEight />
          </>
        } />

        <Route path='/about' element={
          <About/>
        }/>



        
      </Routes>


      <SectionNine />
      <Footer />
    </>
  )
}

export default App
