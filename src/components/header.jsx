import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Link komponentasini import qilamiz
import rasm from "../assets/logo.png";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-orange-500 p-2 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-x-6">
          <img className="w-24 h-16" src={rasm} alt="Rasm Logo" />
        </div>
        
        <div className="hidden md:flex justify-center flex-grow gap-x-6 text-white font-semibold">
          <Link to="/" className="hover:text-gray-200 transition-colors">Asosiy</Link>
          <Link to="/biz-haqimizda" className="hover:text-gray-200 transition-colors">Biz haqimizda</Link>
          <Link to="/turlar" className="hover:text-gray-200 transition-colors">Turlar</Link>
          <Link to="/mexmonxonalar" className="hover:text-gray-200 transition-colors">Mexmonxonalar</Link>
          <Link to="/aviachipta" className="hover:text-gray-200 transition-colors">Aviachiptalar</Link>
          <Link to="/biz-bilan-boglanish" className="hover:text-gray-200 transition-colors">Biz bilan bog'lanish</Link>
        </div>
        
        <div className="flex items-center gap-x-4">
          <button className="bg-white text-orange-500 px-3 py-1 rounded-md hover:bg-gray-200 transition-colors hidden md:block">UZ</button>
          
          <button className="md:hidden text-white text-2xl" onClick={() => setOpen(!open)}>
            {open ? "✖" : "☰"}
          </button>
        </div>
        
        {open && (
          <div className="flex flex-col text-white font-semibold bg-orange-500 p-4 md:hidden absolute top-16 left-0 w-full shadow-md">
            <Link to="/" className="hover:text-orange-200 transition-colors">Asosiy</Link>
            <Link to="/biz-haqimizda" className="hover:text-orange-200 transition-colors">Biz haqimizda</Link>
            <Link to="/bizning-jamoa" className="hover:text-orange-200 transition-colors">Bizning jamoa</Link>
            <Link to="/turlar" className="hover:text-orange-200 transition-colors">Turlar</Link>
            <Link to="/mexmonxonalar" className="hover:text-orange-200 transition-colors">Mexmonxonalar</Link>
            <Link to="/aviachipta" className="hover:text-orange-200 transition-colors">Aviachiptalar</Link>
            <Link to="/mashxur-shaharlar" className="hover:text-orange-200 transition-colors">Mashhur shaharlar</Link>
            <Link to="/hamkorlarimiz" className="hover:text-orange-200 transition-colors">Hamkorlarimiz</Link>
            <Link to="/biz-bilan-boglanish" className="hover:text-orange-200 transition-colors">Biz bilan bog'lanish</Link>
            <button className="mt-3 bg-white text-orange-500 px-3 py-1 rounded-md hover:bg-gray-200 transition-colors">UZ</button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;
