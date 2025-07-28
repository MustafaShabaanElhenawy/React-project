import { useState } from "react";
import { Link, NavLink } from "react-router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-[#2C3E50]">
        <div className="container py-7 flex items-center justify-between">
          <h1 className="text-white text-[32px] font-bold">
            <Link to="/">START FRAMEWORK</Link>
          </h1>
          {/* القائمة للـ large screens */}
          <ul className="lg:flex hidden gap-10 text-white font-bold">
            <li>
              <NavLink to="/About">ABOUT</NavLink>
            </li>
            <li>
              <NavLink to="/Portfolio">PORTFOLIO</NavLink>
            </li>
            <li>
              <NavLink to="/Contact">CONTACT</NavLink>
            </li>
          </ul>
          {/* ايقونة البارز للشاشات الصغيرة */}
          <div className="lg:hidden text-3xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>

        {/* القائمة المنسدلة للشاشات الصغيرة */}
        {isOpen && (
          <ul className="lg:hidden flex flex-col gap-5 text-white font-bold px-7 pb-5">
            <li>
              <NavLink to="/About" onClick={() => setIsOpen(false)}>ABOUT</NavLink>
            </li>
            <li>
              <NavLink to="/Portfolio" onClick={() => setIsOpen(false)}>PORTFOLIO</NavLink>
            </li>
            <li>
              <NavLink to="/Contact" onClick={() => setIsOpen(false)}>CONTACT</NavLink>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
}
