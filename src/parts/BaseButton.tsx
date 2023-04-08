import React from "react";

import { Button } from "@/types/workout";

type Props = {
    button: Button;
}

const BaseButton: React.FC<Props> = ({ button }) => {
    return (
        <div className="text-center">
            <button className={"text-" + button.textcolor + " font-bold w-[100px] h-[40px] mt-[50px] bg-" + button.bgcolor + " rounded-lg"}>{button.text}</button>
        </div>
    );
};

export default BaseButton;