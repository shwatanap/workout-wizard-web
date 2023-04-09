import ProcedureBox from "@/parts/start/ProcedureBox";
import { dummyProcedureData } from "@/datas/dummyProcedureData";
import { Procedure } from "@/types/workout";

const Explain = () => {
  return (
    <div className="bg-gray h-[1015px]">
      <div className="text-center text-black font-bold text-[36px] pt-[40px]">How To Use</div>
      {dummyProcedureData.map((item: Procedure) => {
        return <ProcedureBox procedure={item} />;
      })}
    </div>
  );
};

export default Explain;
