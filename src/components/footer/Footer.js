import React from 'react'
import metaviz_logo from '../assets/Logo-Metaviz-Pro.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <footer className="bg-white dark:bg-gray-800">
  <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
    <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
      <div>
        <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h3>
        <ul className="text-gray-500 dark:text-gray-400">
          <li className="mb-4">
            <Link href="#" className=" hover:underline">About</Link>
          </li>
          <li className="mb-4">
            <Link href="#" className="hover:underline">Careers</Link>
          </li>
          <li className="mb-4">
            <Link href="#" className="hover:underline">Brand Center</Link>
          </li>
          <li className="mb-4">
            <Link href="#" className="hover:underline">Blog</Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Help center</h3>
        <ul className="text-gray-500 dark:text-gray-400">
          <li className="mb-4">
            <Link href="#" className="hover:underline">Discord Server</Link>
          </li>
          <li className="mb-4">
            <Link href="#" className="hover:underline">Twitter</Link>
          </li>
          <li className="mb-4">
            <Link href="#" className="hover:underline">Facebook</Link>
          </li>
          <li className="mb-4">
            <Link href="#" className="hover:underline">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h3>
        <ul className="text-gray-500 dark:text-gray-400">
          <li className="mb-4">
            <Link href="#" className="hover:underline">Privacy Policy</Link>
          </li>
          <li className="mb-4">
            <Link href="#" className="hover:underline">Licensing</Link>
          </li>
          <li className="mb-4">
            <Link href="#" className="hover:underline">Terms</Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h3>
        <ul className="text-gray-500 dark:text-gray-400">
          <li className="mb-4">
            <Link href="#" className=" hover:underline">About</Link>
          </li>
          <li className="mb-4">
            <Link href="#" className="hover:underline">Careers</Link>
          </li>
          <li className="mb-4">
            <Link href="#" className="hover:underline">Brand Center</Link>
          </li>
          <li className="mb-4">
            <Link href="#" className="hover:underline">Blog</Link>
          </li>
        </ul>
      </div>
      
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div className="text-center">
      <Link href="#" className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white">
        <img src={metaviz_logo} className="h-12 mr-3 sm:h-12" alt="metavzi Logo" />
        Metaviz AI ChatBot
      </Link>
      <span className="block text-sm text-center text-gray-500 dark:text-gray-400">© 2024-2025 Metaviz™. All Rights Reserved By Metaviz Pro
      </span>
      <ul className="flex justify-center mt-5 space-x-5">
        <li>
          <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
          <i className="fa-brands fa-facebook fa-lg" />

          </Link>
        </li>
        <li>
          <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
        <i className="fa-brands fa-instagram fa-lg" />

           </Link>
        </li>
        <li>
          <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
          <i className="fa-brands fa-twitter fa-lg" />

            </Link>
        </li>
        <li>
          <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
         <i className="fa-brands fa-github" />

                </Link>
        </li>
       
      </ul>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer
