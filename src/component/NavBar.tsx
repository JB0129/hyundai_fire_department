import React from "react";
import { useNavigate } from "react-router-dom";

type List = {
  id: string;
  text: string;
};

interface OwnProps {
  list: List[];
}

const NavBar: React.FC<OwnProps> = ({ list }) => {
  const navigate = useNavigate();

  return (
    <div className="absolute top-[90px] left-[-27px] flex flex-col justify-start items-center border-t-2 border-solid border-main rounded-b-xl bg-white overflow-hidden">
      {list.map((el: any, idx: number) => (
        <button
          key={idx}
          onClick={() => navigate(el.id)}
          className="w-[160px] py-[20px] whitespace-nowrap text-[16px] hover:bg-slate-200"
        >
          {el.text}
        </button>
      ))}
    </div>
  );
};

export default NavBar;
