export const Content = ({ data }: any) => {
  return (
    <div className="flex flex-col justify-start items-center w-full leading-6 mb-[100px]">
      {data.image && <img src={data.image} alt="" className="w-[800px] h-[450px] mb-[100px]" />}
      <div className="flex flex-col justify-start items-start w-full">
        <div className="mb-[20px] ml-[32px] text-main">
          <div className="mb-[24px] text-[32px] font-bold ">{data.title}</div>
          {data.description && <div className="pl-[10px]">- {data.description}</div>}
        </div>
        <ul className="flex flex-col justify-start items-start w-full">
          {data.contents?.map((obj: any, index: number) => (
            <li
              key={`main${index}`}
              className="flex flex-col justify-start items-start w-full my-[10px] p-[8px] pr-[100px] border shadow-[1px_2px_30px_-10px_rgba(0,0,0,0.3)] rounded-[36px]"
            >
              <div className="flex justify-start items-center w-full">
                <button className="border rounded-full min-w-[56px] min-h-[56px] mr-[25px] bg-main text-white">
                  {index + 1}
                </button>
                <div>{obj.content}</div>
              </div>
              {obj.subContent !== null && (
                <ul className="mt-[10px] mb-[20px] pl-[80px]">
                  {obj.subContent?.map((el: any, idx: number) => (
                    <li key={`sub${idx}`} className="my-[12px] list-disc">
                      {el}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
