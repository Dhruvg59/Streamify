import React from "react";
import Styles from './channels.module.css'
import Channel1 from'../../assets/channel1.jpg'
import Channel2 from'../../assets/channel2.png'
import Channel3 from'../../assets/channel3.jpg'
import Channel4 from'../../assets/channel4.jpg'
import Channel5 from'../../assets/channel5.jpg'
import Channel6 from'../../assets/channel6.jpg'
import Channel7 from'../../assets/channel7.jpg'



const Channel = () => {
  return <>
  <div className={Styles.channels}>
    <img src={Channel5} alt="" />
    <img src={Channel6} alt="" />
    <img src={Channel7} alt="" />
    <img src={Channel1} alt="" />
    <img src={Channel2} alt="" />
    <img src={Channel3} alt="" />
    <img src={Channel4} alt="" />
    <img src={Channel5} alt="" />
    <img src={Channel6} alt="" />
    <img src={Channel7} alt="" />
    <img src={Channel2} alt="" />
    <img src={Channel3} alt="" />
    
  </div>
  
  </>;
};

export default Channel;
