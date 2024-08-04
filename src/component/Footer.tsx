import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-footer flex justify-center items-center w-full xl:h-[200px] mt-[60px] py-[64px] xl:p-0">
      <div className="flex flex-col justify-center items-center text-white">
        <div className="flex flex-col justify-start items-start xl:flex-row xl:items-center mb-[32px]">
          <span className="mx-[20px] xl:my-0 my-[12px]">대표자: 이동훈</span>

          <span className="mx-[20px] xl:my-0 my-[12px]">TEL: 031-506-7503</span>

          <span className="mx-[20px] xl:my-0 my-[12px]">MOB: 010-3153-7503</span>

          <span className="mx-[20px] xl:my-0 my-[12px]">E-mail: E.aabd26@naver.com</span>

          <span className="mx-[20px] xl:my-0 my-[12px]">
            주소: 경기도 화성시 수노을중앙로 142 센타프라자 507호
          </span>
        </div>
        <div>@Copyrightⓒ 2024 현대소방 All Right Reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
