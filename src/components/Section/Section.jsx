import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <>
      <h4>{title}</h4>
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
