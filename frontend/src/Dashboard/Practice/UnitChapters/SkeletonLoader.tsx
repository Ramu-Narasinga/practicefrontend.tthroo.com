export function SkeletonLoader() {
  return <div className="w-3/4 flex flex-col gap-10 mt-4 pl-6 md:pl-0">
  <div className="text-left">
    <div className="text-black text-2xl font-bold bg-gray-300 h-8 w-64 animate-pulse"></div>
    <div className="text-gray-500 text-base font-normal bg-gray-200 h-6 w-48 animate-pulse mt-2"></div>
  </div>

  <div className="flex flex-row gap-8 flex-wrap">
    <div className="flex flex-col justify-between max-w-sm h-fit-content bg-white rounded-lg border border-gray-300 text-left animate-pulse">
      <div className="h-40 bg-gray-300 rounded-t-lg"></div>
      <div className="p-5">
        <div className="text-black text-lg font-normal bg-gray-200 h-8 w-40 animate-pulse mb-2"></div>
        <div className="text-gray-500 text-sm font-normal bg-gray-100 h-6 w-36 animate-pulse"></div>
      </div>
      <div className="p-5">
        <div className="w-32 h-8 bg-gray-100  rounded animate-pulse"></div>
      </div>
    </div>
  </div>
</div>

}