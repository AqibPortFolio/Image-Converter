import React from 'react'
import metaviz_logo from '../assets/Logo-Metaviz-Pro.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <footer className="bg-white ">
  <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
    <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
      <div>
        <h3 className="mb-6 text-md font-bold text-orange-500 uppercase ">Useful Links</h3>
        <ul>
          <li className="mb-4">
            <Link to="https://metaviz.pro/about-us/" className=" hover:text-orange-500 ">About Us</Link>
          </li>
          <li className="mb-4">
            <Link to="https://metaviz.pro/our-services/" className="hover:text-orange-500">Our Services</Link>
          </li>
          <li className="mb-4">
            <Link to="https://metaviz.pro/testimonials/" className="hover:text-orange-500">Our Testimonials</Link>
          </li>
          <li className="mb-4">
            <Link to="https://metaviz.pro/case-studies/" className="hover:text-orange-500">Case Studies</Link>
          </li>
          <li className="mb-4">
            <Link to="https://metaviz.pro/portfolio/" className="hover:text-orange-500">Portfolio</Link>
          </li>
          <li className="mb-4">
            <Link to="https://metaviz.pro/pricing/" className="hover:text-orange-500">Pricing</Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="mb-6 text-md font-bold text-orange-500 uppercase ">Quick Links</h3>
        <ul>
          <li className="mb-4">
            <Link to="https://metaviz.pro/our-team/" className="hover:text-orange-500">Our Team</Link>
          </li>
          <li className="mb-4">
            <Link to="https://metaviz.pro/our-core-team/" className="hover:text-orange-500">Our Core Team</Link>
          </li>
          <li className="mb-4">
            <Link to="https://metaviz.pro/process/" className="hover:text-orange-500">Process</Link>
          </li>
          <li className="mb-4">
            <Link to="https://metaviz.pro/industry-expertise/" className="hover:text-orange-500">Industry Expertise</Link>
          </li>
          <li className="mb-4">
            <Link to="https://metaviz.pro/open-source-contributions/" className="hover:text-orange-500">Open Source Contributions</Link>
          </li>
          <li className="mb-4">
            <Link to="https://metaviz.pro/test-automation/" className="hover:text-orange-500">Test Automation</Link>
          </li>
          <li className="mb-4">
            <Link to="https://metaviz.pro/cybersecurity/" className="hover:text-orange-500">Cybersecurity</Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="mb-6 text-md font-bold text-orange-500 uppercase ">Our Support</h3>
        <ul>
          <li className="mb-4">
            <Link to="https://metaviz.pro/contact-us/" className="hover:text-orange-500">Contact Us</Link>
          </li>
          <li className="mb-4">
            <Link to="https://metaviz.pro/careers/" className="hover:text-orange-500">Careers</Link>
          </li>
          <li className="mb-4">
            <Link to="https://metaviz.pro/client-portal/" className="hover:text-orange-500">Client Portal</Link>
          </li>
          <li className="mb-4">
            <Link to="https://metaviz.pro/resources/" className="hover:text-orange-500">Resources</Link>
          </li>
          <li className="mb-4">
            <Link to="https://metaviz.pro/social-responsibility/" className="hover:text-orange-500">Social Responsibility</Link>
          </li>
          <li className="mb-4">
            <Link to="https://metaviz.pro/faqs/" className="hover:text-orange-500">FAQs</Link>
          </li>
        </ul>
      </div>
      <div >
        <h3 className="mb-6 text-md font-bold text-orange-500 uppercase ">Contact Us</h3>
        <ul>
          <li className="mb-4">
            <Link to="#" className=" hover:text-orange-500">
            Metaviz Pro</Link>
          </li>
          <li className="mb-4">
            <Link to="#" className="hover:text-orange-500"   onClick={() => window.location = 'mailto:info@metaviz.pro'}>info@metaviz.pro</Link>
          </li>
          <li className="mb-4">
          <Link to="https://www.facebook.com/Metaviz.pro" className="text-gray-500 hover:text-gray-900 ">
         <i className="fa-brands fa-facebook fa-xl" style={{color: '#4b67a1'}} />

          </Link>
          <Link to="https://www.linkedin.com/company/metaviz-tech/" className="text-gray-500 hover:text-gray-900 ">
      <i className="fa-brands fa-linkedin fa-xl ms-2" style={{color: '#1682bb'}} />

          </Link>
          <Link to="https://www.instagram.com/metavizpro?igsh=OGVwMG9wb2RhdmVi">
        <i className="fa-brands fa-instagram fa-xl ms-2 text-black" />

           </Link>
          </li>
        </ul>
      </div>
      
    </div>
  </div>
  <div className='border-t-2 border-gray-300'>
  <div className="text-center mt-4 pb-6">
      <Link to="/" className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 ">
        <img src={metaviz_logo} className="h-12 mr-3 sm:h-12" alt="metavzi Logo" />
        Metaviz Pro
      </Link>
      <span className="block text-sm text-center text-gray-500 ">© 2024-2025 Metaviz Pro™. All Rights Reserved By Metaviz Pro
      </span>
    </div></div>
</footer>

    </div>
  )
}

export default Footer
