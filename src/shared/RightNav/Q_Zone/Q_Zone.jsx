import React from "react";
import img1 from '../../../logo/logo/qZone1.png'
import img2 from '../../../logo/logo/qZone2.png'
import img3 from '../../../logo/logo/qZone3.png'
const Q_Zone = () => {
  return (
    <div className=" mt-3 bg-light">
      <h4>Q Zone</h4>
      <img src={img1} alt="" className="mt-3 px-3  w-100 " />
      <img src={img2} alt="" className="mt-1 px-3  w-100" />
      <img src={img3} alt=""  className="mt-1 px-3  w-100"/>
    </div>
  );
};

export default Q_Zone;
