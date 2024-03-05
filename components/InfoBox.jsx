import React from "react";

const InfoBox = ({
  heading,
  backgroundColor = "bg-gray-100",
  textColor = "text-gray-100",
  children,
  btnInfo,
}) => {
  return (
    <div className={` ${backgroundColor} p-6 rounded-lg shadow-md`}>
      <h2 className={`${textColor} text-2xl font-bold`}>{heading}</h2>
      <p className={` ${textColor} mt-2 mb-4`}>
          {children}
      </p>
      <a
        href= {btnInfo.link}
        className={ `${btnInfo.background} inline-block text-white rounded-lg px-4 py-2 hover:opacity-80`}
      >
        {btnInfo.text}
      </a>
    </div>
  );
};

export default InfoBox;
