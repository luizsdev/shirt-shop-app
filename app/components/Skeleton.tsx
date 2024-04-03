export function Skeleton() {
  return (
    <div className="rounded-md border border-slate-500 shadow-md w-[300px] h-[400px] overflow-hidden p-4 animate-pulse">
      <div className="flex flex-col justify-start items-center h-full gap-2">
        <div className="bg-gray-200 w-full h-[200px]"></div>
        <div className="flex flex-col text-xl items-center">
          <span className="bg-gray-200 w-[200px] h-6 rounded-lg"></span>
          <span className="font-bold bg-gray-200 w-[200px] h-6 rounded-lg"></span>
        </div>
      </div>
    </div>
  );
}
