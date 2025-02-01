import React from 'react'

function asosiy() {
  return (
    <div className="bg-orange-500 text-white text-center py-20">
      <h1 className="text-4xl font-bold">Sayohatingizni biz bilan boshlang</h1>
      <p className="text-lg mt-2">Nemo Travel - huzur uchun yo'l</p>

      <div className="bg-white text-black rounded-3xl shadow-md mt-6 px-6 py-4 inline-flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          
          <div>
            <p className="text-sm">Mamnun mijozlar</p>
            <p className="font-bold">45000+</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <div>
            <p className="text-sm">Mamlakatlar</p>
            <p className="font-bold">30+</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <div>
            <p className="text-sm">Tajriba</p>
            <p className="font-bold">5+ yil</p>
          </div>
        </div>

        <button className="bg-orange-500 text-white px-6 py-2 rounded-3xl font-semibold hover:bg-orange-600 transition">
          Batafsil ma'lumot
        </button>
      </div>
    </div>
  );
  
}

export default asosiy