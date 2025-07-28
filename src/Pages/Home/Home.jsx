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

<footer>
  {/* القسم الرئيسي للـ Footer */}
  <div className="bg-[#2C3E50] text-white text-center py-12 md:py-24 px-4 md:px-32">
    {/* استعمال Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {/* Location */}
      <div>
        <h3 className="font-semibold text-[22px] md:text-[28px]">LOCATION</h3>
        <p>2215 John Daniel Drive</p>
        <p className="pt-2">Clark, MO 65243</p>
      </div>
      {/* Around the Web */}
      <div>
        <h3 className="font-semibold text-[22px] md:text-[28px]">AROUND THE WEB</h3>
        <div className="flex items-center justify-center gap-4 pt-4">
          <i className="fa-brands fa-facebook border border-white rounded-full p-2 text-[18px]"></i>
          <i className="fa-brands fa-twitter border border-white rounded-full p-2 text-[18px]"></i>
          <i className="fa-brands fa-linkedin-in border border-white rounded-full p-2 text-[18px]"></i>
          <i className="fa-solid fa-globe border border-white rounded-full p-2 text-[18px]"></i>
        </div>
      </div>
      {/* About Freelancer */}
      <div>
        <h3 className="font-semibold text-[22px] md:text-[28px]">ABOUT FREELANCER</h3>
        <p className="pt-2 w-full md:w-[90%] text-center mx-auto">
          Freelance is a free to use, licensed Bootstrap theme created by Route
        </p>
      </div>
    </div>
  </div>
  {/* شريط النسخ */}
  <div className="py-4 bg-[#1A252F]">
    <p className="text-center text-white">Copyright © Your Website 2021</p>
  </div>
</footer>

    </>
  ) 
}
 

