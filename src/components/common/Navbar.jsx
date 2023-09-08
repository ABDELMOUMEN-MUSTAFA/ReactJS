/* eslint-disable react/prop-types */
const Navbar = ({ children }) => {
  return (
    <nav className="container my-4 d-flex justify-content-between align-items-center">
      {children}
    </nav>
  );
};

export default Navbar;
