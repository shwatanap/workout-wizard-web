import { dummyOutputlistData } from "@/datas/dummyOutputlistData";
import { Output } from "@/types/workout";
import OutputBox from "@/parts/output/OutputBox";

const OutputList = () => {
  return (
    <div className="bg-black pb-[30px]">
      {dummyOutputlistData.map((item: Output, index: number) => (
        <OutputBox outputlist={item} index={index} />
      ))}
    </div>
  );
};

export default OutputList;
