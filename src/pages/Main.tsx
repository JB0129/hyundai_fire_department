import React, { useRef, useState } from "react";
import main1 from "../assets/image/main1.png";
import main_intro from "../assets/image/main_intro.png";
import main_intro_bg from "../assets/image/main_intro_bg.png";
import main_partner from "../assets/image/main_partner.png";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { ReactComponent as Arrow } from "../assets/image/Arrow.svg";

const Main: React.FC = () => {
  const infoRef = useRef<any>();
  const [info, setInfo] = useState<number>(1);

  const handleLeft = () => {
    if (info > 1) {
      infoRef.current.scrollLeft =
        infoRef.current?.scrollLeft - infoRef.current?.offsetWidth;
      setInfo(info - 1);
    }
  };

  const handleRight = () => {
    if (info < 4) {
      infoRef.current.scrollLeft =
        infoRef.current?.scrollLeft + infoRef.current?.offsetWidth;
      setInfo(info + 1);
    }
  };

  return (
    <main className="bg-slate-300 w-screen min-h-[calc(100vh-90px)]">
      {/* Banner */}
      <div
        className="w-full h-[calc(100vh-90px)] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${main1})`,
        }}
      />

      {/* Introduce */}
      <div
        className="flex justify-center items-center w-full h-[calc(100vh-90px)] py-[155px]"
        style={{ backgroundImage: `url(${main_intro_bg})` }}
      >
        <div
          className="flex justify-center items-center w-full h-[calc(100vh-220px)] bg-black bg-no-repeat"
          style={{
            backgroundImage: `url(${main_intro})`,
          }}
        >
          <div className="flex flex-col justify-center items-center h-[250px] text-white text-[20px]">
            <div className="font-bold text-[48px] mb-[24px]">안녕하십니까</div>
            <div className="font-bold text-[32px] mb-[60px]">
              현대소방 입니다.
            </div>
            <div className="mb-[16px]">
              현대소방은 화재 안전을 모티브로 실현해내고 있으며
            </div>
            <div className="mb-[16px]">
              고객만족과 더불어 고객의 안전을 책임지는 소방방재회사로 자리매김
              했습니다.
            </div>
            <div className="mb-[16px]">
              앞으로 1대1 민접한 고객맞춤 서비스와,
            </div>
            <div className="mb-[16px]">고객이 만족하는 기술력을 제공하는</div>
            <div className="mb-[16px]">
              현대소방으로 여러분 곁에 남을 수 있도록 하겠습니다.
            </div>
          </div>
        </div>
      </div>

      {/* Information */}
      <section className="relative w-full h-[calc(100vh-90px)] bg-black text-white">
        <div
          ref={infoRef}
          className="flex justify-start items-center w-full h-full overflow-x-auto overflow-hidden transition duration-300 ease-in-out"
        >
          {info > 1 && (
            <Arrow
              onClick={handleLeft}
              className="absolute w-[60px] h-[60px] left-[36px] rotate-180 cursor-pointer"
            />
          )}
          {info < 4 && (
            <Arrow
              onClick={handleRight}
              className="absolute w-[60px] h-[60px] right-[36px] cursor-pointer"
            />
          )}
          <div className="flex justify-center items-end min-w-[100vw]">
            <img
              src="/Main_Info1.png"
              alt=""
              className="w-[450px] h-[450px] mr-[90px]"
            />
            <div className="flex flex-col justify-end items-start">
              <div className="relative mb-[50px] font-bold text-[48px] z-0">
                소방완비필증
                <span className="absolute bottom-[24px] right-[-80px] font-normal text-[100px] text-slate-400 z-[-30]">
                  01
                </span>
              </div>

              <div className="flex flex-col justify-start items-start h-[180px] mb-[32px] text-[24px]">
                <span className="my-[8px]">
                  다중이용업소에 소방시설등 및 영업장 내부 피난통로
                </span>
                <span className="my-[8px]">
                  그 밖의 안전시설이 적법하게 설치된 경우
                </span>
                <span className="my-[8px]">
                  적법사실을 소방서장이 증명하는 증명서를 발급받아야
                </span>
                <span className="my-[8px]">영업허가를 받을 수 있습니다.</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-end min-w-[100vw]">
            <img
              src="/Main_Info2.png"
              alt=""
              className="w-[450px] h-[450px] mr-[90px]"
            />
            <div className="flex flex-col justify-end items-start">
              <div className="relative mb-[50px] font-bold text-[48px] z-0">
                소방시설공사
                <span className="absolute bottom-[24px] right-[-80px] font-normal text-[100px] text-slate-400 z-[-30]">
                  02
                </span>
              </div>
              <div className="flex flex-col justify-start items-start h-[180px] mb-[32px] text-[24px]">
                <span className="my-[8px]">
                  건축물에 설치되는 소방시설을 화재안전기준에 적합하도록
                </span>
                <span className="my-[8px]">
                  설치하는 신설공사와 관리 또는 결핍사항에 대한 보수공사를
                  수행합니다.
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-end min-w-[100vw]">
            <img
              src="/Main_Info3.png"
              alt=""
              className="w-[450px] h-[450px] mr-[90px]"
            />
            <div className="flex flex-col justify-end items-start">
              <div className="relative mb-[50px] font-bold text-[48px] z-0">
                스프링클러
                <span className="absolute bottom-[24px] right-[-80px] font-normal text-[100px] text-slate-400 z-[-30]">
                  03
                </span>
              </div>
              <div className="flex flex-col justify-start items-start h-[180px] mb-[32px] text-[24px]">
                <span className="my-[8px]">
                  스프링클러는 주변에 물을 뿌리는 살수장치로
                </span>
                <span className="my-[8px]">화재의 초기 소화 목적으로 사용됩니다.</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-end min-w-[100vw]">
            <img
              src="/Main_Info4.png"
              alt=""
              className="w-[450px] h-[450px] mr-[90px]"
            />
            <div className="flex flex-col justify-end items-start">
              <div className="relative mb-[50px] font-bold text-[48px] z-0">
                방염
                <span className="absolute bottom-[24px] right-[-80px] font-normal text-[100px] text-slate-400 z-[-30]">
                  04
                </span>
              </div>
              <div className="flex flex-col justify-start items-start h-[180px] mb-[32px] text-[24px]">
                <span className="my-[8px]">
                  방염은 연소하기 쉬운 재질에 발화 및 화염확산을
                </span>
                <span className="my-[8px]">지연시키는 가공처리 방법을 말합니다.</span>
                <span className="my-[8px]">
                  화재의 발생빈도가 높고 화재 시 인적 또는 물적 피해가
                </span>
                <span className="my-[8px]">
                  클 것으로 예상되는 특정 소방대상물에 사용하는
                </span>
                <span className="my-[8px]">
                  실내마감재 등에 방염처리를 하여야 합니다.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner */}
      <div
        className="bg-main flex flex-col justify-center items-center w-full h-[calc(100vh-90px)] py-[50px] px-[100px] text-white"
        style={{
          backgroundImage: `url(${main_partner})`,
        }}
      >
        <div className="font-bold text-[48px] mb-[30px]">PARTNER</div>
        <div className="text-[24px] mb-[80px]">현대 소방 문구</div>
        <div className="flex justify-center items-center w-full">
          <div className="flex justify-center items-center w-[240px] h-[80px] bg-white mx-[8px]">
            <img
              src="/main_partner1.png"
              alt="partner 이미지"
              className="w-[200px] h-[60px]"
            />
          </div>
          <div className="flex justify-center items-center w-[240px] h-[80px] bg-white mx-[8px]">
            <img
              src="/main_partner2.png"
              alt="partner 이미지"
              className="w-[200px] h-[60px]"
            />
          </div>
          <div className="flex justify-center items-center w-[240px] h-[80px] bg-white mx-[8px]">
            <img
              src="/main_partner3.png"
              alt="partner 이미지"
              className="w-[200px] h-[60px]"
            />
          </div>
          <div className="flex justify-center items-center w-[240px] h-[80px] bg-white mx-[8px]">
            <img
              src="/main_partner4.png"
              alt="partner 이미지"
              className="w-[200px] h-[60px]"
            />
          </div>
          <div className="flex justify-center items-center w-[240px] h-[80px] bg-white mx-[8px]">
            <img
              src="/main_partner5.png"
              alt="partner 이미지"
              className="w-[200px] h-[60px]"
            />
          </div>
          <div className="flex justify-center items-center w-[240px] h-[80px] bg-white mx-[8px]">
            <img
              src="/main_partner6.png"
              alt="partner 이미지"
              className="w-[200px] h-[60px]"
            />
          </div>
        </div>
      </div>

      {/* Contact us */}
      <div className="bg-white flex flex-col justify-center items-center w-full h-[calc(100vh-90px)] py-[60px] px-[200px]">
        <div className="font-bold text-[48px] mb-[30px]">Contact us</div>
        <Map
          center={{ lat: 37.646411, lng: 127.1251 }}
          // draggable={false}
          level={2}
          className="w-full h-[400px] my-[20px]"
        >
          <MapMarker position={{ lat: 37.646411, lng: 127.1251 }}></MapMarker>
        </Map>
      </div>
    </main>
  );
};

export default Main;
