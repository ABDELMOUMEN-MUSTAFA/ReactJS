/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import UseFetch from "../../hooks/useFetch";
import Navbar from "../../components/common/Navbar";
import Main from "../../components/layouts/Main";
import UserContainer from "../../components/user/UserContainer";
import NotFound from "../errors/NotFound";
import Loading from "../../components/common/Loading";

const ChambreShow = () => {
  const [chambre, setChambre] = useState({});
  const [isLoading, setLoading] = useState(true);
  const { id } = useParams();

  UseFetch(id, setChambre, setLoading, "chambre");

  if (isLoading) {
    return <Loading />;
  }

  if (Object.keys(chambre).length === 0) {
    return <NotFound />;
  }

  return (
    <>
      <Navbar>
        <Link to="/chambres" className="btn btn-sm btn-secondary">
          <IoArrowBackCircleSharp size={18} /> &nbsp;Retourner
        </Link>
      </Navbar>
      <Main>
        <h3 className="mb-3">
          Détails de la chambre numéro{" "}
          <span className="badge rounded-pill text-bg-primary">
            #{chambre?.id}
          </span>
        </h3>
        <section className="d-flex flex-column gap-3 flex-lg-row justify-content-between">
          <div className="d-flex flex-column gap-2">
            <span>
              <strong>Type:</strong> {chambre?.type?.titre}
            </span>
            <span>
              <strong>Superficie:</strong> {chambre?.superficie} m<sup>2</sup>
            </span>
            <span>
              <strong>Description:</strong> {chambre?.description}
            </span>
          </div>
          <div className="d-flex flex-column gap-2">
            <span className="text-nowrap">
              <strong>Etage:</strong> {chambre?.etage}
            </span>
            <span className="text-nowrap">
              <strong>Prix:</strong> {chambre?.prix} DH
            </span>
          </div>
        </section>
        <hr />
        <section className="mt-3">
          <h5 className="mb-3">
            Réservation en cours et prochaines réservations
          </h5>
          <UserContainer users={chambre?.users} />
        </section>
      </Main>
    </>
  );
};

export default ChambreShow;
