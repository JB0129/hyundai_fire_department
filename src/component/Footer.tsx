import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-footer flex justify-center items-center w-full h-[200px] mt-[60px]">
      <div className="flex flex-col justify-center items-center text-white">
        <div className="flex justify-start items-center mb-[32px]">
          <span className="mx-[20px]">대표자: 이동훈</span>
          <span className="mx-[20px]">
            TEL: 031-506-7503 | MOB: 010-3153-7503 | E-mail: E.aabd26@naver.com
          </span>
          <span className="mx-[20px]">
            주소: 경기도 화성시 수노을중앙로 142 센타프라자 507호
          </span>
        </div>
        <div>@Copyrightⓒ 2024 현대소방 All Right Reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
