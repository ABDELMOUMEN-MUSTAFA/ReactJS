/* eslint-disable react/prop-types */
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";

const Pagination = ({ setCurrentPage, currentPage, totalPages }) => {
  const [searchParams] = useSearchParams();
  return (
    <nav aria-label="Page navigation" className="d-flex justify-content-center">
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button
            className="page-link"
            onClick={() => {
              setCurrentPage({ page: currentPage - 1 });
            }}
            disabled={currentPage === 1}
          >
            <FaChevronLeft />
          </button>
        </li>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <li
            className={`page-item ${currentPage === page ? "active" : ""}`}
            key={page}
          >
            <button
              className="page-link"
              onClick={() => {
                if (searchParams.get("page") !== null || page > 1) {
                  setCurrentPage({
                    page,
                    search: searchParams.get("search") || "",
                  });
                }
              }}
            >
              {page}
            </button>
          </li>
        ))}
        <li
          className={`page-item ${
            currentPage === totalPages ? "disabled" : ""
          }`}
        >
          <button
            className="page-link"
            onClick={() => {
              setCurrentPage({ page: currentPage + 1 });
            }}
            disabled={currentPage === totalPages}
          >
            <FaChevronRight />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
