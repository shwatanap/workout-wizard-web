import Header from "@/components/Header";
import OutputList from "@/components/OutputList";

const OutputTemplate = () => {
  return (
    <div>
      <Header />
      <div className="bg-black text-white text-[30px] flex justify-center p-[30px]">Menu List</div>
      <OutputList />
    </div>
  );
};

export default OutputTemplate;
