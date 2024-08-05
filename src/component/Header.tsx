import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import "./Header.css";
import { ReactComponent as Menu } from "../assets/image/Menu.svg";

const Header: React.FC = () => {
  const [introMenu, setIntroMenu] = useState<boolean>(false);
  const introduceNav = [
    { id: "/introduce/intro", text: "인사말(CEO/회사)" },
    { id: "/introduce/license", text: "등록증/면허증" },
  ];

  const [businessMenu, setBusinessMenu] = useState<boolean>(false);
  const businessNav = [
    { id: "/business/certificate", text: "소방완비필증" },
    { id: "/business/facility", text: "소방시설공사" },
    { id: "/business/sprinkler", text: "스프링클러" },
    { id: "/business/retardant", text: "방염" },
  ];

  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
    setMenu(false);
  }, [location.pathname]);

  const [isMenu, setMenu] = useState<boolean>(false);
  const [isSubMenu, setSubMenu] = useState<string>("");

  const handleSubMenu = (e: any) => {
    if (isSubMenu === e.currentTarget.id) {
      return setSubMenu("");
    } else {
      return setSubMenu(e.currentTarget.id);
    }
  };

  const navigate = useNavigate();
  const handleNav = (e: any) => {
    navigate(e.currentTarget.id);
    setMenu(false);
  };

  return (
    <header
      id="Header"
      className="sticky top-0 bg-white flex flex-row justify-between xl:justify-start items-center w-full h-[150px] lg:h-[90px] border shadow-[1px_1px_20px_-10px_rgba(0,0,0,0.3)] z-30"
    >
      <Link
        to={"/"}
        className="flex justify-center items-center w-full max-w-[380px]"
      >
        <img
          src="/Logo_Large.png"
          alt="logo"
          className="lg:w-[166px] w-[250px]"
        />
      </Link>
      <nav
        id="Navigation"
        className="flex flex-row justify-around items-center w-full max-w-[1200px] px-[16px] mr-[32px]"
      >
        <div
          className="relative flex flex-col justify-center items-center h-[90px]"
          onMouseOut={() => setIntroMenu(false)}
          onMouseOver={() => setIntroMenu(true)}
        >
          <Link
            to={"/introduce/intro"}
            className="min-w-[90px] mx-[16px] font-bold text-[20px]"
          >
            회사소개
          </Link>
          {introMenu && <NavBar list={introduceNav} />}
        </div>
        <div
          className="relative flex flex-col justify-center items-center  h-[90px]"
          onMouseOut={() => setBusinessMenu(false)}
          onMouseOver={() => setBusinessMenu(true)}
        >
          <Link
            to={"/business/certificate"}
            className="min-w-[90px] mx-[16px] font-bold text-[20px]"
          >
            사업분야
          </Link>
          {businessMenu && <NavBar list={businessNav} />}
        </div>
        <Link
          to={"/gallery"}
          className="min-w-[100px] mx-[16px] font-bold text-[20px]"
        >
          시공갤러리
        </Link>
        <Link
          to={"/question"}
          className="min-w-[90px] mx-[16px] font-bold text-[20px]"
        >
          문의하기
        </Link>
        <Link
          to={"/road"}
          className="min-w-[90px] mx-[16px] font-bold text-[20px]"
        >
          오시는길
        </Link>
      </nav>
      <button id="menuBtn" onClick={() => setMenu(true)}>
        <Menu className="w-[64px] h-[64px] lg:w-[32px] lg:h-[32px]" />
      </button>
      {isMenu && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-[rgba(61,61,61,0.81)] z-50 xl:hidden"
          onClick={() => {
            setMenu(false);
            setSubMenu("");
          }}
        >
          <div
            id="menu"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="flex justify-start items-center w-full pl-[28px] py-[40px] text-[52px] text-white font-bold bg-[rgb(40,45,94)]">
              <span>Menu</span>
            </div>
            <button
              id="/introduce"
              className="flex justify-start items-center w-full py-[28px] px-[28px] text-[32px] text-white font-bold bg-[rgb(93,98,137)] hover:bg-[rgb(120,125,166)]"
              onClick={handleSubMenu}
            >
              <span>회사소개</span>
            </button>
            {isSubMenu === "/introduce" && (
              <div className="flex flex-col justify-start items-start w-full">
                <button
                  id="/introduce/intro"
                  onClick={handleNav}
                  className="flex justify-start items-center w-full py-[28px] px-[40px] text-[32px] text-white font-bold bg-[rgb(178,178,178)] hover:bg-[rgb(190,190,190)]"
                >
                  <span className="mr-[12px]">-</span>
                  <span>인사말(CEO/회사)</span>
                </button>
                <button
                  id="/introduce/license"
                  onClick={handleNav}
                  className="flex justify-start items-center w-full py-[28px] px-[40px] text-[32px] text-white font-bold bg-[rgb(178,178,178)] hover:bg-[rgb(190,190,190)]"
                >
                  <span className="mr-[12px]">-</span>
                  <span>등록증/면허증</span>
                </button>
              </div>
            )}
            <button
              id="/business"
              className="flex justify-start items-center w-full py-[28px] px-[28px] text-[32px] text-white font-bold bg-[rgb(93,98,137)] hover:bg-[rgb(120,125,166)]"
              onClick={handleSubMenu}
            >
              <span>사업분야</span>
            </button>
            {isSubMenu === "/business" && (
              <div className="flex flex-col justify-start items-start w-full">
                <button
                  id="/business/certificate"
                  onClick={handleNav}
                  className="flex justify-start items-center w-full py-[28px] px-[40px] text-[32px] text-white font-bold bg-[rgb(178,178,178)] hover:bg-[rgb(190,190,190)]"
                >
                  <span className="mr-[12px]">-</span>
                  <span>소방완비필증</span>
                </button>
                <button
                  id="/business/facility"
                  onClick={handleNav}
                  className="flex justify-start items-center w-full py-[28px] px-[40px] text-[32px] text-white font-bold bg-[rgb(178,178,178)] hover:bg-[rgb(190,190,190)]"
                >
                  <span className="mr-[12px]">-</span>
                  <span>소방시설공사</span>
                </button>
                <button
                  id="/business/sprinkler"
                  onClick={handleNav}
                  className="flex justify-start items-center w-full py-[28px] px-[40px] text-[32px] text-white font-bold bg-[rgb(178,178,178)] hover:bg-[rgb(190,190,190)]"
                >
                  <span className="mr-[12px]">-</span>
                  <span>스프링클러</span>
                </button>
                <button
                  id="/business/retardant"
                  onClick={handleNav}
                  className="flex justify-start items-center w-full py-[28px] px-[40px] text-[32px] text-white font-bold bg-[rgb(178,178,178)] hover:bg-[rgb(190,190,190)]"
                >
                  <span className="mr-[12px]">-</span>
                  <span>방염</span>
                </button>
              </div>
            )}
            <button
              id="/gallery"
              onClick={handleNav}
              className="flex justify-start items-center w-full py-[28px] px-[28px] text-[32px] text-white font-bold bg-[rgb(93,98,137)] hover:bg-[rgb(120,125,166)]"
            >
              <span>시공갤러리</span>
            </button>
            <button
              id="/question"
              onClick={handleNav}
              className="flex justify-start items-center w-full py-[28px] px-[28px] text-[32px] text-white font-bold bg-[rgb(93,98,137)] hover:bg-[rgb(120,125,166)]"
            >
              <span>문의하기</span>
            </button>
            <button
              id="/road"
              onClick={handleNav}
              className="flex justify-start items-center w-full py-[28px] px-[28px] text-[32px] text-white font-bold bg-[rgb(93,98,137)] hover:bg-[rgb(120,125,166)]"
            >
              <span>오시는길</span>
            </button>
            <div className="flex justify-center items-start w-full py-[40px]">
              <img
                src="/Ring_icon.png"
                alt="전화걸기"
                className="w-[72px] h-[72px] mx-[12px] cursor-pointer"
                onClick={() => {
                  document.location.href = "tel:010-3153-7503";
                }}
              />
              <img
                src="/Kakao_icon.png"
                alt="오픈 카카오톡"
                className="w-[72px] h-[72px] mx-[12px] cursor-pointer"
                onClick={() => window.open("https://open.kakao.com/o/so0efoeg")}
              />
              <img
                src="/Blog_icon.png"
                alt="네이버 블로그"
                className="w-[72px] h-[72px] mx-[12px] cursor-pointer"
                onClick={() => window.open("https://blog.naver.com/aabd95")}
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
