const ReletedSingleVideoList = () => {
  return (
    <div className="w-full flex flex-row gap-2 mb-4">
      <div className="relative w-[168px] h-[94px] flex-none duration-300 hover:scale-[1.03]">
        <a href="video.html">
          <img
            src="https://i.ytimg.com/vi/MDCp_rjGCrQ/hqdefault.jpg"
            className="object-cover"
            alt="Some video title"
          />
        </a>
        <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
          11:42
        </p>
      </div>

      <div className="flex flex-col w-full">
        <a href="#">
          <p className="text-slate-900 text-sm font-semibold">
            Some video title
          </p>
        </a>
        <a className="text-gray-400 text-xs mt-2 hover:text-gray-600" href="#">
          As Sunnah Skill Development Institute
        </a>
        <p className="text-gray-400 text-xs mt-1">831 views . 12 March 2024</p>
      </div>
    </div>
  );
};

export default ReletedSingleVideoList;
