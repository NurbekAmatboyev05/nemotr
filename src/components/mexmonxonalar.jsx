import React from 'react'
import rasm1 from '../assets/hayat.jpg'
import rasm2 from '../assets/hilton.jpg'
import rasm3 from '../assets/cityplace.jpg'
function mexmonxonalar() {
  return (
    
    <section class="bg-gray-100 py-16">
    <div class="container mx-auto text-center">
      <h2 class="text-4xl font-bold text-gray-900">Mehmonxonalar</h2>
     
      <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
       
        <div class="bg-white p-6 rounded-2xl shadow-lg shadow-red-100">
          <img className='rounded-2xl h-50 w-120' src={rasm1} alt="" />
          <h3 class="text-lg font-medium text-gray-900">Hyatt Regency Tashkent</h3>
          <p>Navoi ko'chasi 1-uy, Toshkent <br />

Zamonaviy mehmonxona markaz markazida</p>
          <button className='" bg-orange-500 text-white px-6 py-2 rounded-3xl font-semibold hover:bg-orange-600 transition'>Batafsil ma'lumot</button>
        </div>
  
       
        <div class="bg-white p-6 rounded-2xl shadow-lg shadow-red-100">
        <img className='rounded-2xl h-50 w-120' src={rasm2} alt="" />
          <h3 class="text-lg font-medium text-gray-900">Hilton Tashkent City</h3>
          <p>Islom Karimov ko'chasi 2-uy, Toshkent <br />

Biznes mehmonxona shahar markazida</p>
          <button className='" bg-orange-500 text-white px-6 py-2 rounded-3xl font-semibold hover:bg-orange-600 transition'>Batafsil ma'lumot</button>
        </div>
  
        
        <div class="bg-white p-6 rounded-2xl shadow-lg shadow-red-100">
        <img className='rounded-2xl h-50 w-120' src={rasm3} alt="" />
          <h3 class="text-lg font-medium text-gray-900">City Palace Hotel</h3>
          <p>Amir Temur ko'chasi 15-uy, Toshkent <br />

Qulay mehmonxona diqqatga sazovor joylar yaqinida</p>
          <button className='" bg-orange-500 text-white px-6 py-2 rounded-3xl font-semibold hover:bg-orange-600 transition'>Batafsil ma'lumot</button>
        </div>
      </div>
    </div>
  </section>
     
  )
}

export default mexmonxonalar