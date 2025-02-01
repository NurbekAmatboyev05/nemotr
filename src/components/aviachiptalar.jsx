import React from 'react';

function Aviachiptalar() {
  return (
    <div><h2 className='text-6xl bg-clip-text ml-5'>Aviachiptalar</h2>

    <div className="bg-white py-12">
        
      <div className="container mx-auto px-6">
        
        <div className="flex  space-x-6 mb-8">
          <button className="bg-white text-gray-800 py-2 px-6 rounded-full border border-gray-300 hover:bg-gray-100">Borish</button>
          <button className="bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-400">Qaytish</button>
        </div>
        
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <input type="text" placeholder="Qayerdan" className="border border-gray-300 p-4 rounded-lg" />
          <input type="text" placeholder="Qayerga" className="border border-gray-300 p-4 rounded-lg" />
          <input type="date" placeholder="Jo'nash sanasi" className="border border-gray-300 p-4 rounded-lg" />
          <input type="number" placeholder="Yo'lovchilar soni" className="border border-gray-300 p-4 rounded-lg" />
        </div>

        {/* Qidirish tugmasi */}
        <div className="flex justify-center">
        <button className="bg-orange-500 text-white py-3 px-12 rounded-full hover:bg-orange-400 w-full">
            Qidirish
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Aviachiptalar;
