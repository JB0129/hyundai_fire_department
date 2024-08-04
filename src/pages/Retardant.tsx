import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { businessData } from "./Business/businessData";
import { Content } from "./Business/content";

const Retardant: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleChangeMenu = (e: React.MouseEvent<HTMLLIElement>) => {
    navigate(e.currentTarget.id);
  };

  const tabMenu = [
    { id: "/business/certificate", text: "소방완비필증" },
    { id: "/business/facility", text: "소방시설공사" },
    { id: "/business/sprinkler", text: "스프링클러" },
    { id: "/business/retardant", text: "방염" },
  ];

  return (
    <main className="flex flex-col justify-start items-center w-full">
      <img
        src="/Business_banner.png"
        alt="사업분야 banner"
        className="w-full h-[300px] bg-cover bg-no-repeat"
      />

<nav className="flex justify-center items-center lg:w-[85%] w-full my-[20px] px-[10px] lg:px-0">
        <ul className="flex lg:justify-start justify-center items-center w-full lg:max-w-[1440px] h-[80px]">
          {tabMenu.map((el: any, idx: number) => (
            <li
              key={idx}
              id={el.id}
              onClick={handleChangeMenu}
              className={`flex justify-start items-center w-[200px] mr-[16px] py-[10px] pl-[8px] border-solid border-main cursor-pointer text-xl ${
                el.id === location.pathname
                  ? "font-bold border-b-4"
                  : "font-medium border-b-2"
              }`}
            >
              <span className="whitespace-nowrap">{el.text}</span>
            </li>
          ))}
        </ul>
      </nav>

      <section className="flex flex-col justify-start items-center w-[85%] my-[64px]">
        <Content data={businessData.retardant} />
        <Content data={businessData.retardant2} />
      </section>
    </main>
  );
};
export default Retardant;
