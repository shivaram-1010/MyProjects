import React from 'react'
import '../components-css/Home.css'
// import primelogo from '../components-img/Amazon-Prime-Video.webp'
import Product from './Product'
import mouse from '../components-img/mouse.webp'
import gow  from '../components-img/GOW.jpg'
import monitor from '../components-img/gaming-monitor.jpg'
import camera from '../components-img/camera.jpg'
import graphic from '../components-img/3060ti.webp'
import tv from '../components-img/tv.webp'

const Home = () => {
  return (
    <div className='home'>
        <div className='home_container'>
            {/* <img className='home_img' alt='' src={primelogo}/> */}

            <div className='home_row'>
              <Product title='Razer blade x9' price={4000} image={mouse} rating={5} id='1458456'/>
              <Product title='PlayStation PS5 Console – God of War Ragnarök Bundle' price={54000} image={gow} rating={5} id='8526947' />
            </div>

            <div className='home_row'>
            <Product title='MSI Gaming GeForce RTX 3060 Ti 8GB GDRR6X 256-Bit HDMI/DP Nvlink Torx Fan 4 RGB Ampere Architecture OC Graphics Card (RTX 3060 Ti Ventus 3X 8GD6X OC)' price={30000} image={graphic} rating={5} id='1234567'/>
            <Product title='SAMSUNG Odyssey G7 Series 32-Inch WQHD (2560x1440) Gaming Monitor, 240Hz, Curved, 1ms, HDMI, G-Sync, FreeSync Premium Pro (LC32G75TQSNXZA)' price={24000} image={monitor} rating={5} id='7894561'/>
            <Product title='Canon DSLR Camera [EOS 90D] with 18-135 is USM Lens | Built-in Wi-Fi, Bluetooth, DIGIC 8 Image Processor, 4K Video, Dual Pixel CMOS AF, and 3.0 Inch Vari-Angle Touch LCD' price={65000} image={camera} rating={5} id='7418529'/>

              
            </div>

            <div className='home_row'>
            <Product title='SAMSUNG 85-inch Class QN900A Series – Neo QLED 8K Smart TV with Alexa Built-in (2021 Model) HW-Q950A 11.1.4ch Soundbar with Dolby Atmos/DTS:X Alexa Built' price={120000} image={tv} rating={5} id='753518'/>
            </div>


        </div>
    </div>
  )
}

export default Home