/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { MdOutlineModeEditOutline } from "react-icons/md";
import "./Chambre.css";
import WithConfirmDelete from "./../../hoc/withConfirmDelete";

function ChambreItem({ chambre, children, onShowConfirm }) {
  const { id, type, description, superficie, etage, prix } = chambre;

  return (
    <div className="p-3 chambre">
      <Link to={`/chambres/${id}`} className="d-block chambre__button--link">
        <h5>{type.titre}</h5>
        <div className="d-flex justify-content-between">
          <div className="superficie">
            <strong>Superficie: </strong> {superficie}m<sup>2</sup>
          </div>
          <div className="prix">
            <strong>Prix: </strong> {prix} DH
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div className="etage">
            <strong>Etage: </strong> {etage}
          </div>
        </div>
        <div className="description mt-3">
          <strong>Description: </strong>
          <p className="text-truncate m-0">{description}</p>
        </div>
      </Link>
      <Link
        to={`/chambres/edit/${id}`}
        className="chambre__button chambre__button--edit"
      >
        <MdOutlineModeEditOutline size={18} />
      </Link>
      <button
        className="chambre__button chambre__button--delete"
        onClick={() => onShowConfirm(id)}
      >
        <MdDelete />
      </button>
      {children}
    </div>
  );
}

export default WithConfirmDelete(ChambreItem);
