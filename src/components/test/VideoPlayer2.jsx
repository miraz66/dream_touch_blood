import PropTypes from "prop-types";

const VideoPlayer = ({ src }) => {
  return (
    <div className="relative">
      <iframe
        className="w-[60rem] h-[700px] rounded-md"
        src={`https://www.youtube.com/embed/${src}`}
        title="YouTube Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        autoPlay="ture"
      />
    </div>
  );
};
VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
};

export default VideoPlayer;
