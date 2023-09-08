/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { GoIssueClosed } from "react-icons/go";

const WithConfirmDelete = (Component) => {
  const WithConfirmDelete = (props) => {
    const [showConfirm, setShowConfirm] = useState(false);
    const [chambreID, setChambreID] = useState(null);

    const handleShow = (id) => {
      setShowConfirm(!showConfirm);
      setChambreID(id);
    };

    return (
      <Component {...props} onShowConfirm={handleShow}>
        {showConfirm && (
          <div className="chambre__overlay">
            <button
              className="chambre__btn chambre__btn--confirm"
              onClick={() => props.onHandleDeleteChambre(chambreID)}
            >
              <GoIssueClosed />
            </button>
            <button
              className="chambre__btn chambre__btn--close"
              onClick={() => setShowConfirm(false)}
            >
              <IoCloseCircleOutline />
            </button>
          </div>
        )}
      </Component>
    );
  };
  return WithConfirmDelete;
};

export default WithConfirmDelete;
