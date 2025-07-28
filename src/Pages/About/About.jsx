import Navbar from "../../component/Navbar/Navbar";

export default function About() {
  return (
    <>
      <Navbar />

<div className="container w-full bg-[#1ABC9C] px-6 md:px-16 py-20 md:py-[13%]">
  <h2 className="text-white text-center text-[30px] md:text-[40px] font-bold mb-6 md:mb-12">
    ABOUT COMPONENT
  </h2>

  {/* خط النجمة + الخطوط */}
  <div className="text-white text-center flex items-center justify-center font-bold mb-8 md:mb-12">
    <div className="w-[15%] md:w-[6%] h-1 bg-white"></div>
    <div>
      <i className="fa-solid fa-star mx-5 text-lg md:text-xl"></i>
    </div>
    <div className="w-[15%] md:w-[6%] h-1 bg-white"></div>
  </div>

  {/* النصوص مع Grid */}
  <div className="text-white grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-center md:text-left font-bold">
    <p className="md:w-full">
      Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
    </p>
    <p className="md:w-full">
      Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
    </p>
  </div>
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
  );
}
