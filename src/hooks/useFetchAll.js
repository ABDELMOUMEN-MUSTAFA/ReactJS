import { useEffect } from "react";
import { getAllChambres } from "../services/chambreService";
import { getAllTypes } from "../services/typeService";

const UseFetchAll = (setData, setLoading, service) => {
  useEffect(() => {
    console.log(`Fetch All (${service})`);
    switch (service) {
      case "chambre":
        getAllChambres()
          .then((res) => {
            console.log(res);
            setData(res.data.data);
          })
          .catch((error) => console.log(error))
          .finally(() => setLoading(false));
        break;
      case "type":
        getAllTypes()
          .then((res) => setData(res.data))
          .catch((error) => console.log(error))
          .finally(() => setLoading(false));
        break;

      default:
        break;
    }
  }, [setData, setLoading, service]);
};

export default UseFetchAll;
