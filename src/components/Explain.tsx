import Box from "@/parts/box";
import { dummyprocedureData } from "@/datas/dummyprocedureData";

const Explain = () => {
    return (
        <div className="bg-gray h-[1015px]">
            <div className="text-center text-black font-bold text-[36px] pt-[40px]">How To Use</div>
            {dummyprocedureData.map((item) => {
                return (
                    <Box
                        procedure={item}
                    />
                );
            })}
        </div>
    );
}

export default Explain;