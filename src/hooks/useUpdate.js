import { updateChambre } from "../services/chambreService";
import { updateType } from "../services/typeService";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useUpdate = (id, setLoading, service, redirect = "/") => {
  const navigate = useNavigate();

  function update(data) {
    const toastId = toast.loading("Modification en cours...");
    setLoading(true);
    console.log(`Updated (${service})`);
    switch (service) {
      case "chambre":
        updateChambre(id, data)
          .then(() => {
            navigate(redirect);
            toast.success("La modification a été effectuée avec succès.", {
              id: toastId,
            });
          })
          .catch((error) => {
            toast.error(error.response.data.message, {
              id: toastId,
            });
            setLoading(false);
          });
        break;
      case "type":
        updateType(id, data).then().catch().finally();
        break;
      default:
        break;
    }
  }

  return update;
};

export default useUpdate;
