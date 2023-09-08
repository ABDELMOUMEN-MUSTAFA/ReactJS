/* eslint-disable react/prop-types */
const Alert = ({ content, searchedWord = null, color = "info" }) => {
  return (
    <div className={`alert alert-${color} full-width`} role="alert">
      {content}
      <strong>{searchedWord}</strong>
    </div>
  );
};

export default Alert;
