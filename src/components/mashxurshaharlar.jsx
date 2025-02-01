import React from 'react'
import rasm1 from '../assets/samarqand.jpg'
import rasm2 from '../assets/tourturkey.png'
import rasm3 from '../assets/tourdubai.png'
import rasm4 from '../assets/yevropa.png'

function MashxurShaharlar() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900">Mashhur shaharlar</h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          
          <div className="bg-white p-6 rounded-2xl shadow-lg shadow-red-100 transform hover:scale-105 transition duration-300 ease-in-out">
            <img className='rounded-2xl' src={rasm3} alt="Dubai" />
            <h3 className="text-lg font-medium text-gray-900">Dubai</h3>
            <p>Zamonaviy arxitektura va <br />hashamatli savdo markazlari</p>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-3xl font-semibold hover:bg-orange-600 transition">Batafsil ma'limot</button>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg shadow-red-100 transform hover:scale-105 transition duration-300 ease-in-out">
            <img className='rounded-2xl' src={rasm1} alt="Saudiya Arabistoni" />
            <h3 className="text-lg font-medium text-gray-900">Saudiya Arabistoni</h3>
            <p>Umra ziyorati uchun maxsus <br />paketlar</p>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-3xl font-semibold hover:bg-orange-600 transition">Batafsil ma'limot</button>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg shadow-red-100 transform hover:scale-105 transition duration-300 ease-in-out">
            <img className='rounded-2xl' src={rasm2} alt="Istanbul" />
            <h3 className="text-lg font-medium text-gray-900">Istanbul</h3>
            <p>Tarixiy obidalar va zamonaviy <br />madaniyat</p>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-3xl font-semibold hover:bg-orange-600 transition">Batafsil ma'limot</button>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg shadow-red-100 transform hover:scale-105 transition duration-300 ease-in-out">
            <img className='rounded-2xl' src={rasm4} alt="Antalya" />
            <h3 className="text-lg font-medium text-gray-900">Antalya</h3>
            <p>Dam olish va sohil bo'yi kurortlari</p>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-3xl font-semibold hover:bg-orange-600 transition">Batafsil ma'limot</button>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default MashxurShaharlar;
