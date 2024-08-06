import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Login from "../component/Login";

const Gallery: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isData, setData] = useState<any>({});
  const [pageInfo, setInfo] = useState<any>({});
  const [isLogin, setLogin] = useState<boolean>(false);
  const closeModal = () => setLogin(!isLogin);

  const getGallery = () => {
    return (
      axios
        // .get(`http://34.127.89.168:8080/gallery/${id}`)
        .get(`http://localhost:8080/gallery/${id}`)
        .then((res) => {
          console.log(res.data);
          setData(res.data.data);
          setInfo(res.data.pageInfo);
        })
        .catch((err) => console.error(err))
    );
  };

  useEffect(() => {
    getGallery();
  }, [id]);

  const deleteGallery = () => {
    return axios
      .delete(`http://34.127.89.168:8080/gallery/${id}`)
      .then((res) => {
        console.log(res.data);
        alert("해당 글이 삭제되었습니다.");
        navigate("/gallery");
      })
      .catch((err) => {
        console.error(err);
        alert("오류가 발생했습니다.");
      });
  };

  return (
    <main className="flex flex-col justify-start items-center">
      <img
        src="/Gallery_banner.png"
        alt="intro banner"
        className="w-full h-[300px] bg-cover bg-no-repeat"
      />

      <section className="flex flex-col justify-start items-center my-[100px]">
        <div className="flex flex-col justify-start items-center border rounded-2xl shadow-[1px_2px_30px_-10px_rgba(0,0,0,0.3)] p-[52px]">
          <div className="flex justify-between items-end w-full border-b-2 border-solid border-main mb-[30px] pb-[10px]">
            <div className="text-[24px] font-bold">{isData.title}</div>
            <div className="text-[12px]">{isData.createdate}</div>
          </div>
          <div className="w-full my-[20px] px-[24px]">{isData.contents}</div>
          <ul className="flex flex-col justify-start items-center w-[875px]">
            {isData.images?.map((img: any, idx: number) => (
              <li key={idx} className="m-[24px]">
                <img
                  src={img}
                  alt="시공 이미지"
                  className="w-full bg-contain bg-center bg-no-repeat"
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-end items-center w-full mt-[12px] mb-[100px] pr-[12px]">
          <button
            onClick={() => setLogin(true)}
            className="py-[10px] px-[16px] broder rounded-lg bg-red-300 hover:bg-red-200 text-white text-[12px] cursor-pointer"
          >
            글 삭제
          </button>
        </div>

        <div
          onClick={() => {
            if (pageInfo.prev?.id !== undefined)
              navigate(`/gallery/${pageInfo.prev?.id}`);
          }}
          className="flex justify-start items-center w-full my-[16px] text-[18px] border rounded-3xl shadow-[0_2px_24px_-10px_rgba(0,0,0,0.4)] p-[8px] cursor-pointer"
        >
          <div className="whitespace-nowrap px-[20px] py-[10px] border rounded-3xl bg-main text-white">
            이전 글
          </div>
          <div className="whitespace-nowrap w-full ml-[24px]">
            {pageInfo.prev?.title || "이전 글이 존재하지 않습니다."}
          </div>
          <div className="whitespace-nowrap mr-[16px] text-[12px]">
            {pageInfo.prev?.createdate}
          </div>
        </div>
        <div
          onClick={() => {
            if (pageInfo.next?.id !== undefined)
              navigate(`/gallery/${pageInfo.next?.id}`);
          }}
          className="flex justify-start items-center w-full my-[16px] text-[18px] border rounded-3xl shadow-[0_2px_24px_-10px_rgba(0,0,0,0.4)] p-[8px] cursor-pointer"
        >
          <div className="whitespace-nowrap px-[20px] py-[10px] border rounded-3xl bg-main text-white">
            다음 글
          </div>
          <div className="whitespace-nowrap w-full ml-[24px]">
            {pageInfo.next?.title || "다음 글이 존재하지 않습니다."}
          </div>
          <div className="whitespace-nowrap mr-[16px] text-[12px]">
            {pageInfo.next?.createdate}
          </div>
        </div>
      </section>

      {isLogin && <Login close={closeModal} login={deleteGallery} />}
    </main>
  );
};
export default Gallery;
