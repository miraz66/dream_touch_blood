/* eslint-disable react/prop-types */

const VideoPlayer = ({ src }) => {
  return (
    <div className="relative">
      <iframe
        className="w-full h-screen"
        src={src}
        title="YouTube Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        autoPlay="ture"
      />
    </div>
  );
};

export default VideoPlayer;
