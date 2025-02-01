import React from 'react'
import rasm1 from '../assets/samarqand.jpg'
import rasm2 from '../assets/tourturkey.png'
import rasm3 from '../assets/tourdubai.png'
import rasm4 from '../assets/yevropa.png'

function turlar() {
  return (
    <section-one>
  <section class="bg-gray-100 py-16">
  <div class="container mx-auto text-center">
    <h2 class="text-4xl font-bold text-gray-900">Turlar</h2>
    <h4>Eng yaxshi sayohat turlari</h4>
   
    <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
     
      <div class="bg-white p-6 rounded-2xl shadow-lg shadow-red-100">
        <img className='rounded-2xl' src={rasm1} alt="" />
        <h3 class="text-lg font-medium text-gray-900">O'zbekiston bo'ylab sayohat</h3>
        <p>O'zbekistonning tarixiy va madaniy <br />shaharlari bo'ylab safar</p>
        <button className='" bg-orange-500 text-white px-6 py-2 rounded-3xl font-semibold hover:bg-orange-600 transition'>Batafsil</button>
      </div>

     
      <div class="bg-white p-6 rounded-2xl shadow-lg shadow-red-100">
      <img className='rounded-2xl' src={rasm2} alt="" />
        <h3 class="text-lg font-medium text-gray-900">Turkiya bo'ylab sayohat</h3>
        <p>Istanbul, Antalya, Kappadokiya - eng <br />mashhur joylar</p>
        <button className='" bg-orange-500 text-white px-6 py-2 rounded-3xl font-semibold hover:bg-orange-600 transition'>Batafsil</button>
      </div>

      
      <div class="bg-white p-6 rounded-2xl shadow-lg shadow-red-100">
      <img className='rounded-2xl' src={rasm3} alt="" />
        <h3 class="text-lg font-medium text-gray-900">Dubai</h3>
        <p>Zamonaviy arxitektura va hashamatli <br />savdo markazlari</p>
        <button className='" bg-orange-500 text-white px-6 py-2 rounded-3xl font-semibold hover:bg-orange-600 transition'>Batafsil</button>
      </div>

      <div class="bg-white p-6 rounded-2xl shadow-lg shadow-red-100">
      <img className='rounded-2xl' src={rasm4} alt="" />
        <h3 class="text-lg font-medium text-gray-900">Yevropa bo'ylab sayohat</h3>
        <p>Fransiya, Italiya, Germaniya, Ispaniya - eng <br />go'zal shaharlar</p>
        <button className='" bg-orange-500 text-white px-6 py-2 rounded-3xl font-semibold hover:bg-orange-600 transition'>Batafsil</button>
      </div>
    </div>
  </div>
</section>
        
    </section-one>
  )
}

export default turlar