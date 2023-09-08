import useDarkMode from "../../hooks/useDarkMode";
import Column from "../layouts/Column";
import Row from "../layouts/Row";

// eslint-disable-next-line react/prop-types
const ChambreSkeleton = ({ numberCards }) => {
  const [dark] = useDarkMode();

  const styles = {
    height: 158,
    marginBottom: 20,
    backgroundColor: dark ? "#2f2f2f" : "#ffe162",
  };

  return (
    <>
      <Row>
        {Array.from({ length: numberCards }, (_, i) => i + 1).map(
          (chambre, i) => (
            <Column key={i}>
              <div className="p-3 rounded" style={styles}>
                <h5 className="placeholder-glow mb-3">
                  <span className="placeholder col-5"></span>
                </h5>
                <p className="card-text placeholder-glow d-flex justify-content-between">
                  <span className="placeholder col-3"></span>
                  <span className="placeholder col-2"></span>
                </p>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-2"></span>
                </p>
                <p className="card-text placeholder-glow mt-3">
                  <span className="placeholder col-11"></span>
                </p>
              </div>
            </Column>
          )
        )}
      </Row>
    </>
  );
};

export default ChambreSkeleton;
