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
        <button className="group !px-6 !py-3 border-b-2 bg-[#f098fa] border-[#f098fa]  rounded-lg hover:bg-[#f098fa] hover:!text-white transition duration-300 w-80 font-light text-2xl shadow-[#f098fa] outline-none">
          {btntext}

        </button>
      </Link>
    </div>
  );
}

export default AnimatedBtn;
