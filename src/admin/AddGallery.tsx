import axios from "axios";
import React, { ChangeEvent, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddGallery: React.FC = () => {
  const navigate = useNavigate();
  const imgRef = useRef<HTMLInputElement>(null);
  const [title, setTitle] = useState<string>("");
  const [imgFile, setImgFile] = useState<string[]>([]);
  const [contents, setContents] = useState<string>("");

  const postGallery = () => {
    return axios
      .post("http://34.127.89.168/gallery", {
        title,
        contents,
        image: imgFile[0],
      })
      .then((data) => {
        // console.log(data.data);
        if (imgFile.length > 1) {
          addGallery(data.data, 1);
        } else {
          alert("성공적으로 업로드가 되었습니다.");
          navigate("/gallery");
        }
      })
      .catch((err) => {
        if (err.response.request.status === 413) {
          alert("파일 크기를 줄여서 업로드 해주세요.");
        }
      });
  };

  const addGallery = (id: number, idx: number) => {
    return axios
      .patch(`http://34.127.89.168/gallery/${id}/add`, {
        image: imgFile[idx],
      })
      .then((data) => {
        // console.log(data.data);
        if (imgFile.length > idx + 1) {
          addGallery(id, idx + 1);
        } else {
          alert("성공적으로 업로드가 되었습니다.");
          navigate("/gallery");
        }
      })
      .catch((err) => {
        if (err.response.request.status === 413) {
          alert("파일 크기를 줄여서 업로드 해주세요.");
        }
      });
  };

  const formData = new FormData();
  const handleSaveFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      // console.log(file.size);
      if (file.size > 50000)
        return alert("선택한 파일의 용량이 커서 업로드할 수 없습니다.");

      const type = file.type;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (type.includes("image")) {
          imgFile.length > 0
            ? setImgFile([...imgFile, reader.result as string])
            : setImgFile([reader.result as string]);
          // console.log(reader.result);
          formData.append("image", reader.result as string);
        } else {
          return alert("이미지 파일만 가능합니다.");
        }
      };
    }
  };

  return (
    <main className="flex flex-col justify-start items-center">
      <img
        src="/Gallery_banner.png"
        alt="intro banner"
        className="w-full h-[300px] bg-cover bg-no-repeat"
      />

      <section className="flex flex-col justify-start items-center my-[100px]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            postGallery();
          }}
          className="flex flex-col justify-start items-center mb-[100px] border rounded-2xl shadow-[1px_2px_30px_-10px_rgba(0,0,0,0.3)] p-[52px]"
        >
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

          {imgFile.length > 0 &&
            imgFile.map((imgUrl: any, idx: number) => (
              <img
                key={`업로드 이미지 ${idx}`}
                src={imgUrl}
                alt={`업로드 이미지 ${idx}`}
                className="w-[600px] aspect-[875/432] mb-[10px]"
              />
            ))}

          <input
            id="imageUpload"
            type="file"
            accept="image/png image/jpg image/jpeg"
            onChange={handleSaveFile}
            ref={imgRef}
            className="hidden"
          />
          <label
            htmlFor="imageUpload"
            className="flex flex-col justify-start items-center w-[600px] aspect-[875/432] my-[20px] bg-slate-200 cursor-pointer"
          >
            <span className="mt-[132px]">업로드할 파일을 추가 해주세요.</span>
            <span className="mt-[10px] text-[14px]">
              (이미지 파일만 가능합니다.)
            </span>
          </label>

          <input
            id="contents"
            type="text"
            value={contents}
            onChange={(e) => setContents(e.currentTarget.value)}
            placeholder="내용을 입력해주세요."
            className="w-full my-[20px] py-[16px] px-[24px] border-2 border-solid border-slate-300 rounded-lg"
          />

          <input
            type="submit"
            value="등록"
            className="mt-[20px] py-[10px] px-[16px] broder rounded-lg bg-main text-white"
          />
        </form>
      </section>
    </main>
  );
};
export default AddGallery;
