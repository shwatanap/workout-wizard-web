import React from "react";
import { Workout } from '@/types/workout'
import { dummyproceedureData } from "@/datas/dummyproceedureData";
import Bt from '@/parts/Bt'
import Box from "@/parts/box";

type Props = {
    workout: Workout;
}


const Main = () => {

    return (
        <div>
            <div>
                <div className="bg-black h-[770px] mt-[5px]">
                    <div className="pt-[80px] w-[300px] h-[300px] mx-auto">
                        <img className="" src='/img/logo.png' />
                    </div>
                    <div className="text-[16px] text-white w-[250px] pt-[100px] mx-auto">
                        <span className="text-yellow font-bold">Workout Wizard</span>は筋トレサポートサービスです。<br />あなたを三日坊主とは誰にも言わせない。
                    </div>
                    <Bt />
                    <div className='text-white text-center mt-[20px]'><span className='border-b'>新規登録</span></div>

                </div>
                <div className="bg-gray h-[1015px]">
                    <div className="text-center text-black font-bold text-[36px] pt-[40px]">How To Use</div>
                    {dummyproceedureData.map((Items) => {
                        return (
                            <Box
                                workout={Items}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Main;