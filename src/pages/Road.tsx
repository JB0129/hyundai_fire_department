import React, { useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const Road: React.FC = () => {
  const [menu, setMenu] = useState<string>("road");

  const handleChangeMenu = (e: React.MouseEvent<HTMLLIElement>) => {
    setMenu(e.currentTarget.id);
  };

  const tabMenu = [{ id: "road", text: "오시는길" }];

  return (
    <main className="flex flex-col justify-start items-center">
      <img
        src="/Road_banner.png"
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

      <section className="flex flex-col justify-center items-center w-full mt-[30px] px-[200px] pb-[100px]">
        <Map
          center={{ lat: 37.646411, lng: 127.1251 }}
          draggable={true}
          level={2}
          className="w-full h-[450px]"
        >
          <MapMarker position={{ lat: 37.646411, lng: 127.1251 }}></MapMarker>
        </Map>
        <div className="w-full mt-[20px]">
          경기도 화성시 수노을중앙로 142 센타프라자 507호
        </div>
      </section>
    </main>
  );
};

export default Road;
