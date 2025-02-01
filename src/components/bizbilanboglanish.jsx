import React from 'react'

function bizbilanboglanish() {
  return (
    <section className="bg-gray-100 py-16">
    <div className="container mx-auto px-6 lg:flex justify-between">
      
      
      <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Biz bilan bog'lanish</h2>
        
        <form className="space-y-6">
          <div className="flex flex-col">
            <label className="text-lg font-medium text-gray-700" htmlFor="name">Ismingiz</label>
            <input type="text" id="name" placeholder="Ismingizni kiriting" className="p-4 border border-gray-300 rounded-lg mt-2" />
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-medium text-gray-700" htmlFor="email">Email manzilingiz</label>
            <input type="email" id="email" placeholder="Email manzilingizni kiriting" className="p-4 border border-gray-300 rounded-lg mt-2" />
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-medium text-gray-700" htmlFor="phone">Telefon raqamingiz</label>
            <input type="tel" id="phone" placeholder="Telefon raqamingizni kiriting" className="p-4 border border-gray-300 rounded-lg mt-2" />
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-medium text-gray-700" htmlFor="subject">Mavzu</label>
            <input type="text" id="subject" placeholder="Mavzuni kiriting" className="p-4 border border-gray-300 rounded-lg mt-2" />
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-medium text-gray-700" htmlFor="message">Xabaringiz</label>
            <textarea id="message" placeholder="Xabarni yozing" className="p-4 border border-gray-300 rounded-lg mt-2" rows="4"></textarea>
          </div>
          <button type="submit" className="bg-black text-white py-3 px-6 rounded-lg mt-4 hover:bg-gray-800 transition duration-300">Yuborish</button>
        </form>
      </div>

      
      <div className="lg:w-1/2 lg:pl-16">
        <h3 className="text-3xl font-bold text-gray-900 mb-6">Aloqa ma'lumotlari</h3>
        <p className="text-lg text-gray-700 mb-4">Manzil: Toshkent shahri, Muqimiy ko'chasi 44-A uy</p>
        <p className="text-lg text-gray-700 mb-4">Tel: +998 95 150 00 00</p>
        <p className="text-lg text-gray-700 mb-4">Email: <a href="mailto:info@nemoavia.uz" className="text-blue-500">info@nemoavia.uz</a></p>
        <p className="text-lg text-gray-700 mb-6">Ish vaqti: Du-Sha 24 soat</p>
        
       
        <div className="mb-6">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">Xaritada joylashuv</h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.5045397029737!2d69.28934521483693!3d41.306235079301174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aefde4fce299bb%3A0x107775f4fd4f81!2z0JzQstCw0LrQsNC70ZbQ!5e0!3m2!1suz!2s!4v1676480522367!5m2!1suz!2s"
            width="100%" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  </section>
  )
}

export default bizbilanboglanish