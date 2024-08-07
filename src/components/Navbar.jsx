/* eslint-disable react/prop-types */
// import { Link } from "react-router-dom";
import { BsChatDots } from "react-icons/bs";
// import { RxDotFilled } from "react-icons/rx";
// import { IoMdCall } from "react-icons/io";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdOndemandVideo, MdAddAlert } from "react-icons/md";
import { FaQuestion } from "react-icons/fa";

const interfaces = [
  { name: "chat", icon: BsChatDots },
  { name: "call", icon: BiSolidPhoneCall },
  { name: "videos", icon: MdOndemandVideo },
  { name: "faqs", icon: FaQuestion },
  { name: "alerts", icon: MdAddAlert },
];

const buttonStyle =
  "rounded-full p-3 m-3 text-white font-extrabold shadow-xl bg-gray-400 border";

const Navbar = ({ interfaceToShow, setInterfaceToShow }) => {
  return (
    <div className="flex flex-col bg-gray-200">
      <div className="flex items-center justify-between p-2">
        <h4 className="font-bold text-3xl text-gray-700">PAGÈS</h4>
      </div>
      <div className="flex justify-center items-center align-middle w-full ">
        {interfaces.map((face, index) => {
          const InterfaceIcon = face.icon;
          return (
            <button
              key={index}
              className={` ${buttonStyle} ${
                interfaceToShow === face.name && "bg-orange-600"
              } `}
              onClick={() => setInterfaceToShow(face.name)}
            >
              <InterfaceIcon size={30} />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
