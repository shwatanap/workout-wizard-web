import BaseButton from "@/parts/BaseButton";
import Explain from "./Explain";

const Main = () => {
  return (
    <div>
      <div>
        <div className="bg-black h-[770px]">
          <div className="pt-[80px] w-[300px] h-[300px] mx-auto">
            <img src="/img/logo.png" alt="WorkoutWizardのロゴ" />
          </div>
          <div className="text-[16px] text-white w-[250px] pt-[100px] mx-auto">
            <span className="text-yellow font-bold">Workout Wizard</span>
            は筋トレサポートサービスです。
            <br />
            あなたを三日坊主とは誰にも言わせない。
          </div>
          <BaseButton text="ログイン" textColor="black" backgroundColor="yellow" />
          <div className="text-white text-center mt-[20px]">
            <span className="border-b">新規登録</span>
          </div>
        </div>
        <Explain />
      </div>
    </div>
  );
};

export default Main;
