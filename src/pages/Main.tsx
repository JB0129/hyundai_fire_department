import React, { useRef, useState } from "react";
import main1 from "../assets/image/main1.png";
import main_intro from "../assets/image/main_intro.png";
import main_intro_bg from "../assets/image/main_intro_bg.png";
import main_partner from "../assets/image/main_partner.png";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { ReactComponent as Arrow } from "../assets/image/Arrow.svg";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";

const Main: React.FC = () => {
  const navigate = useNavigate();

  const [swiperIndex, setSwiperIndex] = useState(0); // -> 페이지네이션용
  const [swiper, setSwiper] = useState<SwiperClass>(); // -> 슬라이드용
  const handlePrev = () => {
    swiper?.slidePrev();
  };
  const handleNext = () => {
    swiper?.slideNext();
  };

  return (
    <main className="bg-slate-300 w-screen min-h-[calc(100vh-90px)]">
      {/* Banner */}
      <div
        className="flex flex-col justify-center items-center w-full h-[calc(100vh-90px)] text-white bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${main1})`,
        }}
      >
        <div className="font-bold text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[36px] mb-[32px]">
          소방안전의 독보적인 기술력과 전문성으로 고객 맞춤 서비스를 실현합니다.
        </div>
        <div className="font-bold text-[32px] sm:text-[40px] md:text-[42px] lg:text-[52px] xl:text-[64px] mb-[20px]">
          안전을 위한 최선의 첫걸음,
        </div>
        <div className="font-bold text-[32px] sm:text-[40px] md:text-[42px] lg:text-[52px] xl:text-[64px]">
          현대소방과의 동행입니다
        </div>
      </div>

      {/* Introduce */}
      <div
        className="flex justify-center items-center w-full h-[calc(100vh-90px)] py-[155px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${main_intro_bg})` }}
      >
        <div
          className="flex justify-center items-center w-full h-[calc(100vh-220px)] bg-black bg-cover bg-center bg-no-repeat"
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
      <section className="relative w-full h-[calc(100vh-90px)] flex justify-center items-center bg-black text-white">
        <Arrow
          onClick={handlePrev}
          className="absolute w-[60px] h-[60px] left-[36px] rotate-180 cursor-pointer z-20 hidden md:block"
        />
        <Arrow
          onClick={handleNext}
          className="absolute w-[60px] h-[60px] right-[36px] cursor-pointer z-20 hidden md:block"
        />
        <Swiper
          // onSlideChange={() => console.log("slide change")}
          onActiveIndexChange={(e: any) => setSwiperIndex(e.realIndex)}
          onSwiper={(e: any) => {
            setSwiper(e);
          }}
          spaceBetween={0}
          slidesPerView={1}
          rewind={true}
          // pagination={{ clickable: true }}
          // navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Pagination, Autoplay]}
          className="z-10"
        >
          <SwiperSlide>
            <div className="flex justify-center items-end min-w-[100vw] px-[30px]">
              <img
                src="/Main_Info1.png"
                alt=""
                className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[450px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] mr-[32px] sm:mr-[40px] md:mr-[48px] lg:mr-[56px] xl:mr-[64px]"
              />
              <div className="flex flex-col justify-end items-start w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px]">
                <div
                  className="relative mb-[10px] sm:mb-[20px] md:mb-[30px] lg:mb-[40px] xl:mb-[50px] font-bold text-[20px] sm:text-[28px] md:text-[36px] lg:text-[44px] xl:text-[48px] z-0 cursor-pointer"
                  onClick={() => navigate("/business/certificate")}
                >
                  소방완비필증
                  <span className="absolute bottom-[10px] sm:bottom-[16px] md:bottom-[20px] lg:bottom-[24px] xl:bottom-[24px] right-[-28px] sm:right-[-36px] md:right-[-52px] lg:right-[-68px] xl:right-[-100px] font-normal text-[24px] sm:text-[32px] md:text-[48px] lg:text-[64px] xl:text-[100px] text-slate-400 z-[-30]">
                    01
                  </span>
                </div>
                {/* sm: md: lg: xl: */}
                <div className="flex flex-col justify-start items-start mb-[8px] sm:mb-[12px] md:mb-[16px] lg:mb-[20px] xl:mb-[32px] text-[10px] sm:text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px] leading-6 sm:leading-7 md:leading-8 lg:leading-9 xl:leading-10 break-keep">
                  <span className="my-[0px]">
                    다중이용업소에 소방시설등 및 영업장 내부 피난통로 그 밖의
                    안전시설이 적법하게 설치된 경우 적법사실을 소방서장이
                    증명하는 증명서를 발급받아야 영업허가를 받을 수 있습니다.
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-end min-w-[100vw] px-[30px]">
              <img
                src="/Main_Info2.png"
                alt=""
                className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[450px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] mr-[32px] sm:mr-[40px] md:mr-[48px] lg:mr-[56px] xl:mr-[64px]"
              />
              <div className="flex flex-col justify-end items-start w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px]">
                <div
                  className="relative mb-[10px] sm:mb-[20px] md:mb-[30px] lg:mb-[40px] xl:mb-[50px] font-bold text-[20px] sm:text-[28px] md:text-[36px] lg:text-[44px] xl:text-[48px] z-0 cursor-pointer"
                  onClick={() => navigate("/business/facility")}
                >
                  소방시설공사
                  <span className="absolute bottom-[10px] sm:bottom-[16px] md:bottom-[20px] lg:bottom-[24px] xl:bottom-[24px] right-[-28px] sm:right-[-36px] md:right-[-52px] lg:right-[-68px] xl:right-[-100px] font-normal text-[24px] sm:text-[32px] md:text-[48px] lg:text-[64px] xl:text-[100px] text-slate-400 z-[-30]">
                    02
                  </span>
                </div>
                <div className="flex flex-col justify-start items-start mb-[8px] sm:mb-[12px] md:mb-[16px] lg:mb-[20px] xl:mb-[32px] text-[10px] sm:text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px] leading-6 sm:leading-7 md:leading-8 lg:leading-9 xl:leading-10 break-keep">
                  <span className="my-[0px]">
                    건축물에 설치되는 소방시설을 화재안전기준에 적합하도록
                    설치하는 신설공사와 관리 또는 결핍사항에 대한 보수공사를
                    수행합니다.
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-end min-w-[100vw] px-[30px]">
              <img
                src="/Main_Info3.png"
                alt=""
                className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[450px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] mr-[32px] sm:mr-[40px] md:mr-[48px] lg:mr-[56px] xl:mr-[64px]"
              />
              <div className="flex flex-col justify-end items-start w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px]">
                <div
                  className="relative mb-[10px] sm:mb-[20px] md:mb-[30px] lg:mb-[40px] xl:mb-[50px] font-bold text-[20px] sm:text-[28px] md:text-[36px] lg:text-[44px] xl:text-[48px] z-0 cursor-pointer"
                  onClick={() => navigate("/business/sprinkler")}
                >
                  스프링클러
                  <span className="absolute bottom-[10px] sm:bottom-[16px] md:bottom-[20px] lg:bottom-[24px] xl:bottom-[24px] right-[-28px] sm:right-[-36px] md:right-[-52px] lg:right-[-68px] xl:right-[-100px] font-normal text-[24px] sm:text-[32px] md:text-[48px] lg:text-[64px] xl:text-[100px] text-slate-400 z-[-30]">
                    03
                  </span>
                </div>
                <div className="flex flex-col justify-start items-start mb-[8px] sm:mb-[12px] md:mb-[16px] lg:mb-[20px] xl:mb-[32px] text-[10px] sm:text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px] leading-6 sm:leading-7 md:leading-8 lg:leading-9 xl:leading-10 break-keep">
                  <span className="my-[0px]">
                    스프링클러는 주변에 물을 뿌리는 살수장치로 화재의 초기 소화
                    목적으로 사용됩니다.
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-end min-w-[100vw] px-[30px]">
              <img
                src="/Main_Info4.png"
                alt=""
                className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[450px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] mr-[32px] sm:mr-[40px] md:mr-[48px] lg:mr-[56px] xl:mr-[64px]"
              />
              <div className="flex flex-col justify-end items-start w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px]">
                <div
                  className="relative mb-[10px] sm:mb-[20px] md:mb-[30px] lg:mb-[40px] xl:mb-[50px] font-bold text-[20px] sm:text-[28px] md:text-[36px] lg:text-[44px] xl:text-[48px] z-0 cursor-pointer"
                  onClick={() => navigate("/business/retardant")}
                >
                  방염
                  <span className="absolute bottom-[10px] sm:bottom-[16px] md:bottom-[20px] lg:bottom-[24px] xl:bottom-[24px] right-[-28px] sm:right-[-36px] md:right-[-52px] lg:right-[-68px] xl:right-[-100px] font-normal text-[24px] sm:text-[32px] md:text-[48px] lg:text-[64px] xl:text-[100px] text-slate-400 z-[-30]">
                    04
                  </span>
                </div>
                <div className="flex flex-col justify-start items-start mb-[8px] sm:mb-[12px] md:mb-[16px] lg:mb-[20px] xl:mb-[32px] text-[10px] sm:text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px] leading-6 sm:leading-7 md:leading-8 lg:leading-9 xl:leading-10 break-keep">
                  <span className="my-[0px]">
                    방염은 연소하기 쉬운 재질에 발화 및 화염확산을 지연시키는
                    가공처리 방법을 말합니다. 화재의 발생빈도가 높고 화재 시
                    인적 또는 물적 피해가 클 것으로 예상되는 특정 소방대상물에
                    사용하는 실내마감재 등에 방염처리를 하여야 합니다.
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Partner */}
      <div
        className="flex flex-col justify-center items-center w-full h-[calc(100vh-90px)] px-[100px] bg-partner text-white bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${main_partner})`,
        }}
      >
        <div className="font-bold text-[48px] mb-[80px]">PARTNER</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[40px] xl:flex xl:justify-center xl:items-center place-items-center w-full">
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
          <div className="flex justify-center items-center w-[240px] h-[80px] bg-white mx-[8px]">
            <img
              src="/main_partner1.png"
              alt="partner 이미지"
              className="w-[200px] h-[60px]"
            />
          </div>
        </div>
      </div>

      {/* Contact us */}
      <div className="bg-white flex flex-col justify-center items-center w-full h-[calc(100vh-90px)] px-[60px] lg:px-[120px] xl:px-[200px]">
        <div className="font-bold text-[48px] mb-[30px]">Contact us</div>
        <Map
          center={{ lat: 37.284365, lng: 126.818577 }}
          // draggable={false}
          level={2}
          className="w-full h-[400px] mt-[20px]"
        >
          <MapMarker position={{ lat: 37.284365, lng: 126.818577 }}></MapMarker>
        </Map>
      </div>
    </main>
  );
};

export default Main;
