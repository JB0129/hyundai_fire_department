import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Question: React.FC = () => {
  const formRef = useRef<any>(null);

  const onSendForm = (e: any) => {
    e.preventDefault();

    const serviceId = process.env.REACT_APP_SERVICE_ID as string;
    const templateId = process.env.REACT_APP_TEMPLATE_ID as string;
    const publicKey = process.env.REACT_APP_PUBLIC_KEY;

    emailjs
      .sendForm(serviceId, templateId, formRef.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          alert("메일 전송 완료");
        },
        (err) => {
          alert("메일 전송에 실패했습니다.");
          console.log(err);
        }
      );
  };

  const [menu, setMenu] = useState<string>("ask");

  const handleChangeMenu = (e: React.MouseEvent<HTMLLIElement>) => {
    setMenu(e.currentTarget.id);
  };

  const tabMenu = [{ id: "ask", text: "문의하기" }];

  return (
    <main className="flex flex-col justify-start items-center">
      <img
        src="/Question_banner.png"
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

      <section className="flex flex-col xl:flex-row xl:justify-center justify-start items-center xl:items-start mt-[60px] mb-[200px]">
        <div className="flex flex-col justify-start items-start w-[600px] xl:mr-[40px] xl:mb-0 mb-[40px] p-[60px] border rounded-3xl shadow-[1px_2px_30px_-10px_rgba(0,0,0,0.3)]">
          <img
            src="/Logo_Large.png"
            alt="명함 로고"
            className="w-[320px] h-[144px] mb-[60px]"
          />
          <div className="my-[12px] text-[24px] font-bold">현대소방 </div>
          <div className="my-[12px] text-[24px] font-bold">대표 이동훈</div>
          <div className="my-[12px] text-[20px]">010-3153-7503</div>
          <div className="my-[12px] text-[20px]">
            경기도 화성시 수노을중앙로 142 센타프라자 507호
          </div>
          <div className="my-[12px] text-[20px]">
            소방완비증명 / 소방시설공사 / 방염필증 / 스프링클러
          </div>
        </div>
        <form
          ref={formRef}
          onSubmit={(e) => onSendForm(e)}
          className="flex flex-col justify-start items-end w-[600px] p-[32px] border rounded-3xl shadow-[1px_2px_30px_-10px_rgba(0,0,0,0.3)]"
        >
          <div className="flex justify-start items-center my-[12px]">
            <label className="whitespace-nowrap">보내시는 분</label>
            <input
              name="name"
              className="w-[400px] ml-[16px] py-[8px] pl-[12px] bg-slate-200"
            />
          </div>
          <div className="flex justify-start items-center my-[12px]">
            <label className="whitespace-nowrap">이메일</label>
            <input
              name="email"
              className="w-[400px] ml-[16px] py-[8px] pl-[12px] bg-slate-200"
            />
          </div>
          <div className="flex justify-start items-start my-[12px]">
            <label className="whitespace-nowrap mt-[10px]">내용</label>
            <textarea
              name="message"
              className="w-[400px] h-[300px] ml-[16px] p-[12px] resize-none bg-slate-200"
            />
          </div>
          <button className="border rounded-xl py-[12px] px-[20px] bg-main text-white">
            제출
          </button>
        </form>
      </section>
    </main>
  );
};
export default Question;
