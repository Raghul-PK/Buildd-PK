import React from 'react';
import '../Main.css';

import MainHeader from "../components/MainHeader";
import MainModeSelector from "../components/MainModeSelector";

import {Link} from "react-router-dom";

const SocialMode = () => {
  return (
    <>
      <MainHeader/>

      <MainModeSelector mode={"home"}/>
    </>
  )
}

export default SocialMode;
