import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AnimatedBtn({
  to='',
  btntext=''
}) {


  return (
    <div
      className="!mt-5"
    >
      <Link to={to}>
        <button className="group !px-6 !py-3 border-b-2 border-[#4d4b4b] !text-black rounded-lg hover:bg-[#4d4b4b] hover:!text-white transition duration-300 w-80 font-light text-2xl shadow-md shadow-[#4d4b4b] outline-none backdrop-blur-md">
          {btntext}
          <i className="ri-arrow-right-line !text-black group-hover:!text-white transition duration-300"></i>
        </button>
      </Link>
    </div>
  );
}

export default AnimatedBtn;
