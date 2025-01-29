import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { featchVideos } from "../../features/videos/videoSlice";
import VideoCard from "./VideoCard";

const Videos = () => {
  const videos = useSelector((state) => state.videos.videos);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(featchVideos());
  }, [dispatch]);

  return (
    <section className="pt-12">
      <section className="pt-12">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
          {videos.length > 0 ? (
            <>
              {videos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </>
          ) : (
            <div className="col-span-12">some error happened</div>
          )}
        </div>
      </section>
    </section>
  );
};

export default Videos;
