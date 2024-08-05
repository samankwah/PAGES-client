import { useState } from "react";
import {
  CallButton,
  ChatButton,
  FaqsButton,
  VideosButton,
} from "../../components/Buttons";
import ChatDialog from "../../components/interfaces/ChatDialog";

const Home = () => {
  const [show, setShow] = useState(false);

  const showBtn = () => {
    setShow(!show);
  };
  return (
    <>
      <ChatDialog show={show} showBtn={showBtn} setShow={setShow} />

      <div className="buttons-container items-center">
        <VideosButton />
        <FaqsButton />
        <ChatButton show={show} showBtn={showBtn} setShow={setShow} />
      </div>
    </>
  );
};

export default Home;
