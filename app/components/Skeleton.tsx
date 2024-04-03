export function Skeleton() {
  return (
    <div className="">
      <div className="flex flex-col justify-start items-center h-full gap-2">
        <div className="bg-gray-200 w-full aspect-w-16 aspect-h-9"></div>
        <div className="flex flex-col text-xl items-center">
          <span className="bg-gray-200 h-6 w-3/4"></span>
          <span className="font-bold bg-gray-200 h-6 w-1/2"></span>
          <div className="flex gap-3 w-full pt-6">
            <span className="bg-gray-200 h-6 w-1/4"></span>
            <span className="bg-gray-200 h-6 w-1/4"></span>
            <span className="bg-gray-200 h-6 w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
