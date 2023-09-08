import { createChambre } from "../services/chambreService";
import { createType } from "../services/typeService";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const UseCreate = (setLoading, service, redirect = "/") => {
  const navigate = useNavigate();

  function save(data) {
    const toastId = toast.loading("Création en cours...");
    console.log(`Created (${service})`);
    switch (service) {
      case "chambre":
        createChambre(data)
          .then(() => {
            navigate(redirect);
            toast.success("La création a été effectuée avec succès.", {
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
        createType(data).then().catch().finally();
        break;
      default:
        break;
    }
  }

  return save;
};

export default UseCreate;
