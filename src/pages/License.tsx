import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const License: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const tabMenu = [
    { id: "/introduce/intro", text: "인사말(CEO/회사)" },
    { id: "/introduce/license", text: "등록증/면허증" },
  ];

  const handleChangeMenu = (e: React.MouseEvent<HTMLLIElement>) => {
    navigate(e.currentTarget.id);
  };

  return (
    <main className="flex flex-col justify-start items-center">
      <img
        src="/Introduce_banner.png"
        alt="intro banner"
        className="w-full h-[300px] bg-cover bg-no-repeat"
      />

<nav className="flex justify-center items-center lg:w-[85%] w-full my-[20px]">
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

      <section className="flex flex-col justify-start items-center w-[85%] mt-[64px] mb-[64px]">
        <div className="flex lg:flex-row flex-col justify-start lg:justify-around items-center w-full mb-[100px]">
          <img
            src="/Lisence1.jpg"
            alt="사업자등록증"
            className="w-[430px] h-[580px] mb-[48px] lg:mb-0"
          />
          <img
            src="/Lisence2.jpg"
            alt="소방시설관리업등록증"
            className="w-[430px] h-[580px]"
          />
        </div>
      </section>
    </main>
  );
};
export default License;
