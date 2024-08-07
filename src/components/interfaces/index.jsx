/* eslint-disable react/prop-types */

import { useState } from "react";
import Navbar from "../Navbar";
import ChatDialog from "./ChatDialog";
import Videos from "./Videos";
import FAQs from "./FAQs";
import Alerts from "./Alerts";
import Call from "./Call";

const MainInterface = ({ show, setShow }) => {
  const [interfaceToShow, setInterfaceToShow] = useState("chat");

  return (
    <div className={`${show ? "block" : "hidden"} justify-center h-full `}>
      <div className="relative z-50 h-screen flex flex-col justify-between w-full   bg-gray-100 shadow-sm lg:max-w-lg dark:bg-gray-900 md:rounded-xl">
        <Navbar
          interfaceToShow={interfaceToShow}
          setInterfaceToShow={setInterfaceToShow}
        />
        <div className="bg-white h-screen text-gray-800">
          {interfaceToShow === "chat" && <ChatDialog />}
          {interfaceToShow === "call" && <Call />}
          {interfaceToShow === "faqs" && <FAQs />}
          {interfaceToShow === "videos" && <Videos />}
          {interfaceToShow === "alerts" && <Alerts />}
        </div>
      </div>
    </div>
  );
};

export default MainInterface;
