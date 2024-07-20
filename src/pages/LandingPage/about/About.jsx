import React from 'react';
import Breadcrumb from '../../../components/breadcrumb/Breadcrumb';
import Aboutimage from '../../../assets/img/About.png';
import CardAbout from './CardAbout/CardAbout';
import Delivery from './Delivery/Delivery';
import Author from './Author/Author';
import Services from '../../../assets/img/Services1.png';
import Dollar from '../../../assets/img/Dollar.png';
import Money from '../../../assets/img/Money.png';
import Euro from '../../../assets/img/Euro.png';
import Img1 from '../../.././assets/img/MyImage.png'
import Img2 from '../../../assets/img/Img2.png';
import Img3 from '../../../assets/img/Img3.png';
import IconTwitter from '../../../assets/img/Icon-Twitter.png';
import IconInstagram from '../../../assets/img/icon-instagram.png';
import IconLinkedin from '../../../assets/img/Icon-Linkedin.png';
import Box from '../../../assets/img/Box.png';
import Car from '../../../assets/img/Car.png';
import Mark from '../../../assets/img/Mark.png';





const About = () => {
  return (
    <main>
      <div className='container'>
        <div className='container flex flex-row items-center gap-'>
          <p className='mt-20 2 text-gray-400'>Home / </p>
          <Breadcrumb />
        </div>
        <div className='flex flex-row items-center gap-4 justify-center mt-[50px] ml-[30px]'>
            <div className='flex flex-col'>
              <h1 className='text-[54px] font-semibold mb-6'>Our Story</h1>
              <p className='text-[16px] break-words'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p><br />
              <p className='text-[16px]'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
            </div>
            <div>
              <img src={Aboutimage}  alt="" className=''/>
            </div>
        </div>
        <div className='flex flex-row justify-between '>
          <CardAbout Services={Services} heading= '10k' text='Sallers active our site'/>
          <CardAbout Services={Dollar} heading= '33k' text='Monthly product sales' highlight/>
          <CardAbout Services={Money} heading= '45.5kk' text='Customer active in our site '/>
          <CardAbout Services={Euro} heading= '25k' text='Annual gross sale in our site'/>
        </div>
        <div className='flex flex-row justify-between'>
            <Author MyImage={Img1} Heading='Tom Cruise' text='Founder & chairman' twitter={IconTwitter} instagram={IconInstagram} linkedin={IconLinkedin}  />
            <Author MyImage={Img2} Heading='Emma Watson' text='Managing Director' twitter={IconTwitter} instagram={IconInstagram} linkedin={IconLinkedin}  />
            <Author MyImage={Img3} Heading='Will Smith' text='Product Designer' twitter={IconTwitter} instagram={IconInstagram} linkedin={IconLinkedin}  />
        </div>
        <div className='flex flex-row items-center justify-center gap-[65px] mt-[6rem] mb-[6rem]'>
          <Delivery Image={Box} Heading='Free And Fast Delivery' text='Free delivery for all orders over $140' />
          <Delivery Image={Car} Heading='24/7 Customer Service' text='Friendly 24/7 customer support' />
          <Delivery Image={Mark} Heading='Money Back Guarantee' text='We return money within 30days' />
        </div>
      </div>
    </main>
  )
}

export default About;