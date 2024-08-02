import React, { useState } from "react";

const Introduce: React.FC = () => {
  const [menu, setMenu] = useState<string>("intro");

  const handleChangeMenu = (e: React.MouseEvent<HTMLLIElement>) => {
    setMenu(e.currentTarget.id);
  };

  const tabMenu = [
    { id: "intro", text: "인사말(CEO/회사)" },
    { id: "license", text: "등록증/면허증" },
  ];

  return (
    <main className="flex flex-col justify-start items-center">
      <img
        src="/Introduce_banner.png"
        alt="intro banner"
        className="w-full h-[300px] bg-cover bg-no-repeat"
      />

      <nav className="flex justify-center items-center w-[85%] my-[20px]">
        <ul className="flex justify-start items-center w-full max-w-[1440px] h-[80px]">
          {tabMenu.map((el: any, idx: number) => (
            <li
              key={idx}
              id={el.id}
              onClick={handleChangeMenu}
              className={`flex justify-start items-center w-[200px] mr-[16px] py-[10px] pl-[8px] border-solid border-main cursor-pointer text-xl ${
                el.id === menu
                  ? "font-bold border-b-4"
                  : "font-medium border-b-2"
              }`}
            >
              <span>{el.text}</span>
            </li>
          ))}
        </ul>
      </nav>

      <section className="flex flex-col justify-start items-center w-[85%] mt-[64px] mb-[64px]">
        {menu === "intro" && (
          <div className="flex flex-col justify-start items-cneter">
            <div className="flex flex-col justify-start items-center mb-[60px] text-black">
              <div className="text-[32px] font-bold mb-[32px]">
                안녕하십니까. 현대소방입니다.
              </div>
              <div className="flex flex-col justify-start items-center text-[16px] my-[24px]">
                <div className="my-[8px]">
                  안전을 키워드로 더 나은 미래를 준비하는 현대소방입니다.
                </div>
                <div className="my-[8px]">
                  저희는 소방시설 설치와 유지보수 분야에서
                </div>
                <div className="my-[8px]">
                  우수한 전문성과 철저한 안전 관리를 바탕으로 운영하고 있습니다.
                </div>
              </div>
              <div className="flex flex-col justify-start items-center text-[16px] my-[24px]">
                <div className="my-[8px]">
                  발전된 기술과 안전의 중요성을 끊임없이 모색하며,
                </div>
                <div className="my-[8px]">
                  고객 맞춤형 솔루션을 제공하기 위해 최선을 다하고 있습니다.
                </div>
                <div className="my-[8px]">
                  저희 팀은 각자의 전문 분야에서 다수의 경험을 바탕으로
                </div>
                <div className="my-[8px]">
                  환경에 맞는 최적의 소방 안전 솔루션을 찾아드립니다.
                </div>
              </div>
              <div className="flex flex-col justify-start items-center text-[16px] my-[24px]">
                <div className="my-[8px]">
                  저희의 비전은 고객이 안전을 확보하고
                </div>
                <div className="my-[8px]">
                  일상 생활과 사업 운영에서 안심할 수 있는 환경을 만드는
                  것입니다.
                </div>
                <div className="my-[8px]">
                  저희는 이를 위해 지속 가능한 발전을 목표로 하고,
                </div>
                <div className="my-[8px]">
                  고객과의 긴밀한 협력을 통해 더 나은 서비스를 제공할 것을
                  약속드립니다.
                </div>
                <div className="my-[8px]">
                  또, 소방방재 역시 또 하나의 소방관이라는 이념을 가지고
                  불길로부터
                </div>
                <div className="my-[8px]">
                  사람의 생명을 구한다는 철칙을 기반으로 설비 시 안전을
                  최우선으로 할 것을 약속드립니다.
                </div>
              </div>
              <div className="flex flex-col justify-start items-center text-[16px] my-[24px]">
                <div className="my-[8px]">현대소방의 일원으로서,</div>
                <div className="my-[8px]">
                  안전을 향해 함께 나아가는 여정에 여러분이 함께해 주셨으면
                  합니다.
                </div>
                <div className="my-[8px]">
                  고객 여러분의 안전한 미래를 함께 설계하고
                </div>
                <div className="my-[8px]">
                  이루어 나가는 데 최선을 다하겠습니다.
                </div>
              </div>
              <div className="flex flex-col justify-start items-center text-[16px] my-[24px]">
                <div className="my-[8px]">감사합니다.</div>
                <div className="my-[8px] font-bold">현대소방 드림</div>
              </div>
            </div>
            <img
              src="/introduce.jpg"
              alt="인삿말 사진"
              className="w-[800px] aspect-[2/1] bg-cover bg-no-repeat border rounded-xl"
            />
          </div>
        )}
        {menu === "license" && (
          <div className="flex mb-[100px]">
            <img
              src="/Lisence1.jpg"
              alt="사업자등록증"
              className="w-[430px] h-[580px] mr-[84px]"
            />
            <img
              src="/Lisence2.jpg"
              alt="소방시설관리업등록증"
              className="w-[430px] h-[580px]"
            />
          </div>
        )}
      </section>
    </main>
  );
};
export default Introduce;
