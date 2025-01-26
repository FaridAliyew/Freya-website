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


function App() {

  return (
    <>
      <Navbar />
      <Header />
      <Section />
      <SectionTwo />
      <SectionThree />
      <SectionFive />
      <SectionSix />
      <BannerThree/>
      <SectionSeven/>
      {/* <BannerFour/> */}
    </>
  )
}

export default App
