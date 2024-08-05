import { useState } from "react";

const Login = ({ close, login }: any) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [errMsg, setErrMsg] = useState<string>("");

  const handleLogin = () => {
    if (!inputValue) return setErrMsg("비밀번호를 입력해주세요.");
    if (inputValue === "5is9&jxa@@" || inputValue === "5ㅑㄴ9&ㅓㅌㅁ@@") {
      return login();
    } else {
      return setErrMsg("비밀번호를 잘못 입력하셨습니다.");
    }
  };

  const EnterLogin = (e: any) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div
      onClick={close}
      className="fixed top-0 left-0 flex flex-col justify-center items-center w-full h-full bg-[rgb(200,200,200,0.6)] z-60"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="relative flex flex-col justify-center items-center py-[64px] px-[64px] border rounded-3xl bg-white shadow-[1px_1px_20px_-10px_rgba(0,0,0,0.3)] z-70"
      >
        <button
          onClick={close}
          className="absolute top-[16px] right-[16px] text-[24px] font-bold text-main"
        >
          &times;
        </button>
        <div className="w-full my-[20px] font-bold text-[18px]">
          로그인 후 이용이 가능합니다.
        </div>
        <input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          value={inputValue}
          onKeyDown={EnterLogin}
          onChange={(e) => {
            if (errMsg) setErrMsg("");
            setInputValue(e.currentTarget.value);
          }}
          className={`${
            inputValue ? "border-main" : "border-slate-200"
          } border-b-2 border-solid w-full mt-[20px] p-[8px] text-[14px]`}
        />
        {errMsg && (
          <div className="w-full mt-[10px] pl-[8px] text-[12px] text-red-600">
            {errMsg}
          </div>
        )}
        <button
          onClick={handleLogin}
          className={`${
            inputValue ? "bg-main" : "bg-slate-400"
          } text-white mt-[40px] mb-[20px] px-[140px] py-[15px] border rounded-full`}
        >
          로그인
        </button>
      </div>
    </div>
  );
};

export default Login;
