import { useState } from "react";
import MainInterface from "../../components/interfaces";

const Home = () => {
  const [show, setShow] = useState(true);

  const showBtn = () => {
    setShow(!show);
  };
  return <MainInterface show={show} showBtn={showBtn} setShow={setShow} />;
};

export default Home;
