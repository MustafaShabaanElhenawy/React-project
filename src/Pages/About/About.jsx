import Navbar from "../../component/Navbar/Navbar";

export default function About() {
  return (
    <>
      <Navbar />

      <div className="container w-full  bg-[#1ABC9C]">
        <h2 className="text-white text-center  text-[40px] font-bold pt-[13%]">
          ABOUT COMPONENT
        </h2>
        <div className="text-white text-center py-3 flex items-center justify-center font-bold  ">
          <div className="w-[6%] h-1 bg-white "></div>
          <div>
            <i className="fa-solid fa-star mx-5  "></i>
          </div>
          <div className="w-[6%] h-1 bg-white "></div>
        </div>
    <div className=" text-white flex items-center  justify-center gap-4 pt-1 pb-48  ">
            <p className="w-[37%]">
          Freelancer is a free bootstrap theme created by Route. The download
          includes the complete source files including HTML, CSS, and JavaScript
          as well as optional SASS stylesheets for easy customization.
        </p>
        <p className="w-[37%]">
          Freelancer is a free bootstrap theme created by Route. The download
          includes the complete source files including HTML, CSS, and JavaScript
          as well as optional SASS stylesheets for easy customization.
        </p>
    </div>
      </div>

      <div className="  bg-[#2C3E50] text-center text-white flex items-center justify-around  py-24 ">
        <div className="ml-36">
          <h3 className="font-semibold text-[28px] ">LOCATION</h3>
          <p>2215 John Daniel Drive</p>
          <p className="pt-2">Clark, MO 65243</p>
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
          <p className="pt-2 w-[90%] text-center">
            Freelance is a free to use, licensed Bootstrap theme created by
            Route
          </p>
        </div>
      </div>

      <div className="py-7 bg-[#1A252F]">
        <p className="text-center text-white">Copyright © Your Website 2021</p>
      </div>
    </>
  );
}
