/* eslint-disable react/prop-types */
// import { Link } from "react-router-dom";
import { BsChatDots } from "react-icons/bs";
// import { RxDotFilled } from "react-icons/rx";
// import { IoMdCall } from "react-icons/io";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdOndemandVideo, MdAddAlert } from "react-icons/md";
import { FaQuestion } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

const interfaces = [
  { name: "chat", icon: BsChatDots },
  { name: "call", icon: BiSolidPhoneCall },
  { name: "videos", icon: MdOndemandVideo },
  // { name: "faqs", icon: FaQuestion },
  // { name: "alerts", icon: MdAddAlert },
];

const buttonStyle =
  "rounded-full p-3 m-3 text-gray-600 font-extrabold shadow-inner bg-gray-200 border border-gray-300";

const Navbar = ({ interfaceToShow, setInterfaceToShow }) => {
  const [navbarHeight, setNavbarHeight] = useState(0);
  const navbarRef = useRef(null);

  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }
  }, []);

  return (
    <>
      <div ref={navbarRef} className="absolute top-0 w-full ">
        <div className="flex flex-col navbar">
          <div className="flex items-center justify-between p-2">
            <h4 className="font-bold text-3xl text-gray-700">PAGÈS</h4>
          </div>
          <div className="flex justify-center items-center gap-6 align-middle w-full ">
            {interfaces.map((face, index) => {
              const InterfaceIcon = face.icon;
              return (
                <button
                  key={index}
                  className={` ${buttonStyle} ${
                    interfaceToShow === face.name && "bg-orange-500 text-white"
                  }`}
                  onClick={() => setInterfaceToShow(face.name)}
                >
                  <InterfaceIcon size={30} />
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div style={{ height: navbarHeight }} className="bg-gray-100"></div>
    </>
  );
};

export default Navbar;
