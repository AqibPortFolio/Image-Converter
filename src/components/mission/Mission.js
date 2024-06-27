import React from 'react';
import { Link } from 'react-router-dom';

const Mission = () => {
    return (
        <section id="services" className="p-8 border-b-2">
            <h2 className="text-3xl font-bold mb-6 text-center"> Stargardt Disease Affected Children</h2>
            <div className="flex flex-wrap justify-around">
                <div className="bg-white shadow-lg p-6 rounded-lg mb-6 w-80">
                    <h3 className="text-xl font-semibold mb-2 text-center">Stargardt Disease</h3>
                    <p className="text-gray-700">Stargardt Disease, the most common inheritable macular dystrophy, affects young individuals due to mutations in the ABCA4 gene, leading to progressive vision loss. Current educational options, primarily using Braille, are inadequate for children with Stargardt Disease who struggle with small fonts.</p>
                    <p>
          <Link to="#" className="text-sky-500 transition-all duration-300 group-hover:text-white">Read the docs
            →
          </Link>
        </p>
                </div>
                <div className="bg-white shadow-lg p-6 rounded-lg mb-6 w-80">
                    <h3 className="text-xl font-semibold mb-2 text-center">Solutions</h3>
                    <p className="text-gray-700">To address this gap, we propose a specialized device. This device will scan entire book pages at once and convert the text into audio format. This innovation aims to provide accessible education through an oral learning approach, supported by textbooks with larger fonts to reduce eye strain.</p>
                    <p>
          <Link to="#" className="text-sky-500 transition-all duration-300 group-hover:text-white">Read the docs
            →
          </Link>
        </p>
                </div>
                <div className="bg-white shadow-lg p-6 rounded-lg mb-6 w-80">
                    <h3 className="text-xl font-semibold mb-2 text-center">Our Mission</h3>
                       <p className="text-gray-700">Our mission is to provide a reliable and effective educational solution for children affected by Stargardt Disease. We aim to establish web-based educational platforms equipped with our specialized device, enabling these children to access quality education online.</p>
                       <p>
          <Link to="#" className="text-sky-500 transition-all duration-300 group-hover:text-white">Read the docs
            →
          </Link>
        </p>
                </div>



                
            </div>
        </section>
    );
};

export default Mission;
