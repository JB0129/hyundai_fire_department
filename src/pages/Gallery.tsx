import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../component/Login";
import Pagination from "../component/Pagination";

const Gallery: React.FC = () => {
  const navigate = useNavigate();
  const [isData, setData] = useState<any>([]);
  const [isLogin, setLogin] = useState<boolean>(false);
  const closeModal = () => setLogin(!isLogin);

  const [isPage, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);

  const getGallerys = () => {
    return axios
      .get(`http://34.127.89.168:8080/gallery?page=${isPage}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data.data);
        setTotalPage(res.data.totalPage);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getGallerys();
  }, []);

  const [menu, setMenu] = useState<string>("gallery");

  const handleChangeMenu = (e: React.MouseEvent<HTMLLIElement>) => {
    setMenu(e.currentTarget.id);
  };

  const tabMenu = [{ id: "gallery", text: "시공갤러리" }];

  return (
    <main className="flex flex-col justify-start items-center">
      <img
        src="/Gallery_banner.png"
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

      <section className="flex flex-col justify-start items-center w-[85%] mt-[60px] mb-[100px]">
        {isData.length === 0 ? (
          <div className="flex flex-col justify-center items-center w-full h-[400px] text-[24px] font-bold">
            <span>시공갤러리가 비어있습니다.</span>
          </div>
        ) : (
          <ul className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 grid-row-2 gap-x-[60px] gap-y-[40px] place-items-center">
            {isData.map((el: any) => (
              <li
                key={el.id}
                onClick={() => navigate(`/gallery/${el.id}`)}
                className="flex flex-col justify-start items-start w-[360px] h-[400px] p-[25px] border shadow-[1px_2px_30px_-10px_rgba(0,0,0,0.3)] rounded-[24px] cursor-pointer"
              >
                <img
                  src={el.images[0]}
                  alt="시공 이미지"
                  className="w-[310px] h-[210px]"
                />
                <div className="text-[12px] mt-[10px]">{el.createDate}</div>
                <div className="font-bold mt-[10px]">{el.title}</div>
                <div className="mt-[15px]">{el.content}</div>
              </li>
            ))}
          </ul>
        )}
        <div className="lg:flex justify-end items-center w-full mt-[100px] hidden">
          <button
            onClick={() => setLogin(true)}
            className="py-[10px] px-[16px] broder rounded-lg bg-main text-white"
          >
            글쓰기
          </button>
        </div>

        {isData.length === 0 || (
          <Pagination isPage={isPage} totalPage={totalPage} setPage={setPage} />
        )}
      </section>

      {isLogin && (
        <Login close={closeModal} login={() => navigate("/gallery/post")} />
      )}
    </main>
  );
};
export default Gallery;
