import React from "react";

type Props = {
    text: string;
    textcolor: string;
    bgcolor: string;
}

const BaseButton: React.FC<Props> = ({ text, textcolor, bgcolor }) => {
    return (
        <div className="text-center">
            <button className={`text-${textcolor} font-bold w-[100px] h-[40px] mt-[50px] bg-${bgcolor} rounded-lg`}>{text}</button>
        </div>
    );
};

export default BaseButton;