import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddGallery: React.FC = () => {
  const navigate = useNavigate();
  // 제목
  const [title, setTitle] = useState<string>("");

  // 내용
  const [contents, setContents] = useState<string>("");

  // 이미지 input 값
  const [imgUrl, setImgUrl] = useState<string>("");
  const handleChangeUrl = (e: any) => {
    setImgUrl(e.currentTarget.value);
  };

  // 이미지 []
  const [imgFile, setImgFile] = useState<string[]>([]);
  const handleAddImg = () => {
    if (imgUrl !== "") {
      setImgFile((imgFile) => [...imgFile, imgUrl]);
    }
    setImgUrl("");
  };

  const handleEnter = (e: any) => {
    if (e.key === "Enter") {
      handleAddImg();
    }
  };

  const handleDeleteImg = (idx: number) => {
    const filtered = imgFile.filter((_, index: number) => index !== idx);
    setImgFile(filtered);
  };

  const postGallery = () => {
    if (title === "") return alert("제목을 입력해주세요");
    if (contents === "") return alert("내용을 입력해주세요");
    if (imgFile.length < 1) return alert("이미지 링크를 1개 이상 첨부해주세요");

    return (
      axios
        // .post("http://34.127.89.168:8080/gallery", {
        .post("http://localhost:8080/gallery", {
          title,
          contents,
          images: imgFile,
        })
        .then((res) => {
          console.log(res);
          alert("성공적으로 업로드가 되었습니다.");
          navigate("/gallery");
        })
        .catch((err) => {
          console.log(err);
        })
    );
  };

  return (
    <main className="flex flex-col justify-start items-center">
      <img
        src="/Gallery_banner.png"
        alt="intro banner"
        className="w-full h-[300px] bg-cover bg-no-repeat"
      />

      <section className="flex flex-col justify-start items-center my-[100px]">
        <div className="flex flex-col justify-start items-center mb-[100px] border rounded-2xl shadow-[1px_2px_30px_-10px_rgba(0,0,0,0.3)] p-[52px]">
          <div className="flex justify-start items-end w-full border-b-2 border-solid border-main mb-[10px] pb-[10px]">
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.currentTarget.value)}
              placeholder="제목을 입력해주세요."
              className="text-[24px] font-bold"
            />
          </div>

          <input
            id="contents"
            type="text"
            value={contents}
            onChange={(e) => setContents(e.currentTarget.value)}
            placeholder="내용을 입력해주세요."
            className="w-[600px] my-[10px] py-[12px] px-[24px] border-2 border-solid border-slate-300 rounded-lg"
          />

          <div className="flex justify-start items-center w-[600px] my-[10px]">
            <input
              id="imgUrl"
              type="text"
              value={imgUrl}
              onChange={handleChangeUrl}
              onKeyDown={handleEnter}
              placeholder="이미지 링크를 추가해주세요."
              className="w-full py-[12px] px-[24px] border-2 border-solid border-slate-300 rounded-lg"
            />
            <button
              onClick={handleAddImg}
              className="ml-[12px] py-[16px] px-[16px] broder rounded-lg bg-main text-white whitespace-nowrap cursor-pointer"
            >
              추가
            </button>
          </div>

          {imgFile.length > 0 &&
            imgFile.map((imgUrl: any, idx: number) => (
              <div key={`업로드 이미지 ${idx}`} className="relative my-[10px]">
                <button
                  onClick={() => handleDeleteImg(idx)}
                  className="absolute top-[8px] right-[8px] text-[20px] font-bold"
                >
                  &times;
                </button>
                <img
                  src={imgUrl}
                  alt={`업로드 이미지 ${idx}`}
                  className="w-[600px] aspect-[875/432] mb-[10px] bg-contain bg-center bg-no-repeat border border-solid border-slate-200"
                />
              </div>
            ))}

          <button
            onClick={postGallery}
            className="mt-[20px] py-[10px] px-[16px] broder rounded-lg bg-main text-white cursor-pointer"
          >
            등록
          </button>
        </div>
      </section>
    </main>
  );
};
export default AddGallery;
