import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import ChatDialog from "../../components/interfaces/ChatDialog";
import Videos from "../../components/interfaces/Videos";
import Call from "../../components/interfaces/Call";

const Home = () => {
  const [interfaceToShow, setInterfaceToShow] = useState("chat");

  useEffect(() => {
    const handleResize = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    // Initial call to set the value
    handleResize();

    // Update the value on resize
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative bg-gray-100 shadow-xl border lg:max-w-lg mx-auto md:rounded-xl full-height flex flex-col">
      {/* <div className="relative bg-gray-100 shadow-xl border lg:max-w-lg mx-auto md:rounded-xl h-screen flex flex-col"> */}
      <Navbar
        interfaceToShow={interfaceToShow}
        setInterfaceToShow={setInterfaceToShow}
      />
      <div className="flex-1 overflow-y-auto bg-white">
        {interfaceToShow === "chat" && <ChatDialog />}
        {interfaceToShow === "call" && <Call />}
        {interfaceToShow === "videos" && <Videos />}
      </div>
    </div>
  );
};

export default Home;
