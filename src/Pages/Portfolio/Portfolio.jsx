import { useState } from "react";
import Navbar from "../../component/Navbar/Navbar";
import photo1 from "../../assets/images/photo1.png";
import photo2 from "../../assets/images/photo2.png";
import photo3 from "../../assets/images/photo3.png";

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Navbar />

      <div className="container w-full bg-white">
        <h2 className="text-[#2C3E50] text-center text-[40px] font-bold pt-4">
          PORTFOLIO COMPONENT
        </h2>
        <div className="text-center py-3 flex items-center justify-center font-bold">
          <div className="w-[6%] h-1 bg-[#2C3E50] "></div>
          <div>
            <i className="fa-solid fa-star mx-5 text-[#2C3E50] "></i>
          </div>
          <div className="w-[6%] h-1 bg-[#2C3E50] "></div>
        </div>
      </div>

      <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-13">
        {[photo1, photo2, photo3, photo1, photo2, photo3].map((photo, index) => (
          <div key={index} className="card relative border border-white rounded-lg overflow-hidden">
            <img src={photo} alt={'photo${index}'} className="w-full h-full object-cover" />
            <div
              className="overlay absolute inset-0 bg-[#1ABC9C] bg-opacity-90 flex justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-100"
              onClick={() => openModal(photo)}
            >
              <i className="fa-solid fa-plus text-white text-7xlxl"></i>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0  bg-opacity-75 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className=" p-4 rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selectedImage} alt="Selected" className="w-[90%]" />
          </div>
        </div>
      )}

      <div className="bg-[#2C3E50] text-center text-white flex items-center justify-around py-24">
        <div className="ml-36">
          <h3 className="font-semibold text-[28px]">LOCATION</h3>
          <p>2215 John Daniel Drive</p>
          <p className="pt-2">Clark, MO 65243</p>
        </div>

        <div className="ml-20">
          <h3 className="font-semibold text-[28px]">AROUND THE WEB</h3>
          <div className="flex items-center justify-center gap-2 pt-4">
            <i className="fa-brands fa-facebook border text-[16px] border-white rounded-full p-2"></i>
            <i className="fa-brands fa-twitter border text-[16px] border-white rounded-full p-2"></i>
            <i className="fa-brands fa-linkedin-in border text-[16px] border-white rounded-full p-2"></i>
            <i className="fa-solid fa-globe border text-[16px] border-white rounded-full p-2"></i>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-[28px]">ABOUT FREELANCER</h3>
          <p className="pt-2 w-[90%] text-center">
            Freelance is a free to use, licensed Bootstrap theme created by Route
          </p>
        </div>
      </div>

      <div className="py-7 bg-[#1A252F]">
        <p className="text-center text-white">Copyright © Your Website 2021</p>
      </div>
    </>
  );
}