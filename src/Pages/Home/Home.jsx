import Navbar from "../../component/Navbar/Navbar";
import x from "../../assets/images/img-boy.png"

export default function Home() {
  return (
    <>
    <Navbar/>

  <div className="container w-full h-screen bg-[#1ABC9C]">
   <img src={x} alt="boy photo" className="w-80 mx-auto pt-19" />
    <h2 className="text-white text-center  text-[40px] font-bold">START FRAMEWORK</h2>
    <div className="text-white text-center py-3 flex items-center justify-center font-bold  ">
    <div className="w-[6%] h-1 bg-white "></div>
     <div><i className="fa-solid fa-star mx-5  "></i></div>
     <div className="w-[6%] h-1 bg-white "></div>
    </div>
    <p className="text-white text-center">Graphic Artist - Web Designer - Illustrator</p>
  </div>

  <div className="  bg-[#2C3E50] text-center text-white flex items-center justify-around  py-24 ">

  <div className="ml-36"> 
     <h3 className="font-semibold text-[28px] " >LOCATION</h3>
    <p>2215 John Daniel Drive</p>
    <p className="pt-2"  >Clark, MO 65243</p>
    </div>

<div className="ml-20">
  <h3 className="font-semibold text-[28px]">AROUND THE WEB</h3>
<div className="flex items-center justify-center gap-2 pt-4  ">
  <i class="fa-brands fa-facebook border-1 text-[16px] border-white  rounded-full p-2  "></i>
  <i class="fa-brands fa-twitter  border-1 text-[16px] border-white  rounded-full p-2"></i>
  <i class="fa-brands fa-linkedin-in border-1 text-[16px] border-white  rounded-full p-2"></i>
  <i class="fa-solid fa-globe border-1 text-[16px] border-white  rounded-full p-2"></i>
</div> 
</div>

<div>
  <h3 className="font-semibold text-[28px]">ABOUT FREELANCER</h3>
  <p className="pt-2 w-[90%] text-center">Freelance is a free to use, licensed Bootstrap theme created by Route</p>
</div>

  </div>

<div className="py-7 bg-[#1A252F]">
  <p className="text-center text-white">Copyright © Your Website 2021</p>
</div>

    </>
  ) 
}
 

