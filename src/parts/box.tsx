import { Workout } from "@/types/workout";
import React from "react";

type Props = {
    workout: Workout;
};

const Box: React.FC<Props> = ({ workout }) => {
    return (
        <div className="bg-white mt-[20px] mx-[10px]">
            <div className="border-t border-b pt-[5px] pb-[5px] pl-[5px]">{workout.section}</div>
            <div className="flex">
                <img className="h-[100px]" src={workout.img} />
                <div className="h-[100px] bg-white">{workout.explain}</div>
            </div>
        </div>
    );
};

export default Box;