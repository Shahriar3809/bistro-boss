import PropTypes from "prop-types";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="md:w-4/12 mx-auto my-5">
      <p className="text-yellow-600 text-center">---{subHeading}---</p>

      <h2 className="text-3xl mt-5 text-center py-5 border-y-2 font-semibold uppercase">{heading}</h2>
    </div>
  );
};

SectionTitle.propTypes = {
  heading: PropTypes.any,
  subHeading: PropTypes.any,
};
export default SectionTitle;
