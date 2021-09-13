import PropTypes from "prop-types";

const Warning = (props) => {
  const { warning } = props;
  const warningValue = "You cannot divide by 0";

  let classList = "warning";
  if (warning) {
    classList = "warning warning--active";
  }

  return (
    <div className={classList}>
      <p>{warningValue}</p>
    </div>
  );
};

Warning.propTypes = {
  warning: PropTypes.bool,
};

Warning.defaultProps = {
  warning: false,
};

export default Warning;
