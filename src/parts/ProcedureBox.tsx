import React from "react";

import { Procedure } from "@/types/workout";

type Props = {
    procedure: Procedure;
};

const ProcedureBox: React.FC<Props> = ({ procedure }) => {
    return (
        <div className="bg-white mt-[20px] mx-[10px]">
            <div className="border-t border-b pt-[5px] pb-[5px] pl-[5px]">{procedure.section}</div>
            <div className="flex">
                <img className="h-[100px]" src={procedure.img} alt="説明画像" />
                <div className="h-[100px] bg-white">{procedure.explain}</div>
            </div>
        </div>
    );
};

export default ProcedureBox;