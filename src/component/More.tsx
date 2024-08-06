import React from "react";

const MoreBtn: React.FC = () => {
  return (
    <div className="hidden fixed bottom-[24px] right-[24px] xl:flex flex-col justify-end items-center">
      <img
        src="/Ring_icon.png"
        alt="전화걸기"
        className="w-[100px] h-[100px] my-[8px] cursor-pointer"
        onClick={() => {
          document.location.href = "tel:010-3153-7503";
        }}
      />
      <img
        src="/Kakao_icon.png"
        alt="오픈 카카오톡"
        className="w-[100px] h-[100px] my-[8px] cursor-pointer"
        onClick={() => window.open("https://open.kakao.com/o/so0efoeg")}
      />
      <img
        src="/Blog_icon.png"
        alt="네이버 블로그"
        className="w-[100px] h-[100px] my-[8px] cursor-pointer"
        onClick={() => window.open("https://blog.naver.com/aabd95")}
      />
    </div>
  );
};

export default MoreBtn;
