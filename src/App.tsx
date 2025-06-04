import {Layout} from './components/Layout';
import { AboutUs } from './components/sections/AboutUs';
import { Brands } from './components/sections/Brands';
import { Hero } from './components/sections/Hero';
import { Pricing } from './components/sections/Pricing';
import { Services } from './components/sections/Services';
import { CallToAction } from './components/sections/CallToAction';

function App() {

  return (
  <Layout title="EriLabs">
    <Hero/>
    <Brands/>
    <Services/>
    <AboutUs/>
    <Pricing/>
    <CallToAction/>
  </Layout>
  )
}

export default App
