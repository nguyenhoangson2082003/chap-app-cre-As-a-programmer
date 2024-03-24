
const MessageSkeletion = () => {
  return (
    <>
      {/* <div className="flex flex-col gap-4 w-52 mb-5">
        <div className="flex gap-4 items-center">
          <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
          <div className="flex flex-col gap-4">
            <div className="skeleton h-4 w-20"></div>
            <div className="skeleton h-4 w-28"></div>
          </div>
        </div>
        <div className="skeleton h-20 w-full"></div>
      </div> */}
      <div className="grid grid-cols-2 grid-rows-2 justify-center ">
        <div className=" flex flex-col gap-1 w-52 ">
          <div className="flex flex-row gap-1 w-full">
            <div className="skeleton w-11 h-11 rounded-full shrink-0"></div>
            <div className="flex flex-col gap-2">
              <div className="skeleton h-4 w-20"></div>
              <div className="skeleton h-4 w-28"></div>
            </div>
          </div>
          <div className=" skeleton h-20 w-50"></div>
        </div>
        <div className="columns-2 row-span-2 flex flex-col gap-1 justify-end">
          <div className="flex  flex-row gap-1 w-full justify-end">
            <div className="flex flex-col gap-1 items-end">
              <div className="skeleton h-4 w-20"></div>
              <div className="skeleton h-4 w-28"></div>
            </div>
            <div className="skeleton w-11 h-11 rounded-full shrink-0"></div>
          </div>
          <div className="flex  flex-col gap-1 w-full justify-end items-end">
            <div className=" skeleton h-10 w-60"></div>
            <div className=" skeleton h-20 w-60 "></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MessageSkeletion;