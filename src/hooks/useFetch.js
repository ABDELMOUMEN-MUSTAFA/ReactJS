import { useEffect } from "react";
import { getChambre } from "../services/chambreService";
import { getType } from "../services/typeService";
import { useNavigate } from "react-router-dom";

const UseFetch = (id, setData, setLoading, service) => {
  const navigate = useNavigate();
  useEffect(() => {
    console.log(`Fetch (${service})`);
    switch (service) {
      case "chambre":
        getChambre(id)
          .then((res) => setData(res.data))
          .catch((error) => {
            console.log(error);
            navigate("/404");
          })
          .finally(() => setLoading(false));
        break;
      case "type":
        getType(id)
          .then((res) => setData(res.data))
          .catch((error) => console.log(error))
          .finally(() => setLoading(false));
        break;
      default:
        break;
    }
  }, [id, setData, setLoading, service, navigate]);
};

export default UseFetch;
