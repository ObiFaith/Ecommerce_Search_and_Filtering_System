import PropTypes from "prop-types";

const Icon = ({ iconUrl }) => (
  <img src={iconUrl} alt="Icon" width={iconUrl.includes("bag") ? "16" : "20"} />
);

Icon.propTypes = {
  iconUrl: PropTypes.string.isRequired,
};

export default Icon;
