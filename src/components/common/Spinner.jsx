/* eslint-disable react/prop-types */
const Spinner = ({ withLabel = true }) => {
  return (
    <>
      <span
        className="spinner-grow spinner-grow-sm"
        role="status"
        aria-hidden="true"
      ></span>
      {withLabel && <span>&nbsp;&nbsp;Chargement...</span>}
    </>
  );
};

export default Spinner;
