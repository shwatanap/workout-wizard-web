import React from "react";

type Props = {
  text: string;
  textColor: string;
  backgroundColor: string;
};

const BaseButton: React.FC<Props> = ({ text, textColor, backgroundColor }) => {
  return (
    <div className="text-center">
      <button
        className={`text-${textColor} font-bold w-[100px] h-[40px] mt-[50px] bg-${backgroundColor} rounded-lg`}
      >
        {text}
      </button>
    </div>
  );
};

export default BaseButton;
