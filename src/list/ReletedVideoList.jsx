import ReletedSingleVideoList from "./ReletedSingleVideoList";

const ReletedVideoList = () => {
  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {/* <!-- single related video --> */}
      <ReletedSingleVideoList />
    </div>
  );
};

export default ReletedVideoList;
