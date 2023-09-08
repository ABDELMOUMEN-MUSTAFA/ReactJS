/* eslint-disable react/prop-types */
const Row = ({ children }) => {
  return (
    <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3">{children}</div>
  );
};

export default Row;
