import { Parallax } from "react-parallax";
import PropTypes from "prop-types";

const Cover = ({ title, details, coverPhoto }) => {
  return (
    <Parallax
      blur={{ min: -55, max: 50 }}
      bgImage={coverPhoto}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div
        className="hero h-[700px] bg-cover "
        style={{
          backgroundImage: `url(${coverPhoto})`,
        }}
      >
        <div className="hero-overlay bg-opacity-5 "></div>
        <div className="hero-content text-center bg-gray-950 bg-opacity-55 py-20 px-40 text-neutral-content">
          <div className="max-w-3xl">
            <h1 className="mb-5 text-6xl font-bold">{title}</h1>
            <p className="mb-5 text-xl">{details}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

Cover.propTypes = {
  title: PropTypes.any,
  details: PropTypes.any,
  coverPhoto: PropTypes.any,
};

export default Cover;
