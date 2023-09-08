import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import { IoAddCircleSharp } from "react-icons/io5";
import { RiLogoutCircleRFill } from "react-icons/ri";
import { Toaster } from "react-hot-toast";
import useDelete from "../../hooks/useDelete";
import useFetchWithPaginate from "../../hooks/useFetchWithPaginate";
import Navbar from "../../components/common/Navbar";
import Main from "../../components/layouts/Main";
import Row from "../../components/layouts/Row";
import Column from "../../components/layouts/Column";
import Pagination from "../../components/common/Pagination";
import ChambreItem from "../../components/chambre/ChambreItem";
import ChambreSkeleton from "../../components/chambre/ChambreSkeleton";
import Search from "./../../components/common/Search";
import Spinner from "./../../components/common/Spinner";
import Alert from "./../../components/common/Alert";

function ChambreIndex() {
  const { user, logout } = useContext(AuthContext);
  const { data, setData, searchParams, setSearchParams, totalPages, loading } =
    useFetchWithPaginate();
  const deleteOne = useDelete(setData, data, "chambre");

  const showData = () => {
    if (data.length > 0) {
      return data.map((chambre) => (
        <Column key={chambre.id}>
          <ChambreItem chambre={chambre} onHandleDeleteChambre={deleteOne} />
        </Column>
      ));
    }
  };

  const showPagination = () => {
    if (totalPages > 1) {
      return (
        <Pagination
          setCurrentPage={setSearchParams}
          currentPage={parseInt(searchParams.get("page")) || 1}
          totalPages={totalPages}
        />
      );
    }
  };

  const showAlert = () => {
    if (data.length === 0) {
      if (searchParams.get("search")) {
        return (
          <Alert
            content="There is no room, match : "
            searchedWord={searchParams.get("search")}
            color="danger"
          />
        );
      }
      return <Alert content="There is no rooms." />;
    }
  };

  return (
    <>
      <Navbar>
        <Link
          to="/chambres/create"
          className="btn btn-sm btn-success d-flex align-items-center"
        >
          <IoAddCircleSharp size={18} color="#fff" /> &nbsp;Nouvelle Chambre
        </Link>

        <button
          className="btn btn-danger ms-5 btn-sm d-flex align-items-center"
          onClick={() => logout()}
        >
          <RiLogoutCircleRFill />
          &nbsp; Déconnecter
        </button>
      </Navbar>
      <Main>
        <h4 className="mb-3 ps-2" style={{ borderLeft: "10px solid #2E4F4F" }}>
          Bonjour, <span className="fw-bold text-muted">{user?.name}</span>
        </h4>
        <div className="mb-4">
          <Search />
        </div>
        {loading && <ChambreSkeleton numberCards={9} />}
        <Row>{!loading && showData()}</Row>
        {!loading && showAlert()}
        <Toaster />
        {loading ? (
          <div className="d-flex justify-content-center">
            <Spinner withLabel={false} />
          </div>
        ) : (
          showPagination()
        )}
      </Main>
    </>
  );
}

export default ChambreIndex;
