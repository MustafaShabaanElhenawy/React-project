import { Link ,NavLink} from "react-router";
export default function Navbar() {
  return (
   <>
   <nav className="  bg-[#2C3E50] ">
    <div className="container py-7 flex items-center justify-between  ">
<h1 className="text-white  text-[32px]  font-bold ">
    <Link to="/">START FRAMEWORK</Link>
</h1>
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
<div className="lg:hidden text-3xl ">
    <i className="fa-solid fa-bars "></i>
</div>
    </div>
   </nav>
   </>
  )
}
