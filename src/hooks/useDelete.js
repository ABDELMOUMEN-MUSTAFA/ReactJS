import { deleteChambre } from "../services/chambreService";
import { deleteType } from "../services/typeService";
import { toast } from "react-hot-toast";

const useDelete = (uiUpdater, arrayData, service) => {
  function deleteOne(id) {
    const toastId = toast.loading("Suppression en cours...");
    console.log(`Deleted (${service})`);
    switch (service) {
      case "chambre":
        deleteChambre(id)
          .then(() => {
            toast.success("La suppression a été effectuée avec succès.", {
              id: toastId,
            });
            uiUpdater(arrayData.filter((c) => c.id !== id));
          })
          .catch((error) => {
            toast.error(error.response.data.message, {
              id: toastId,
            });
          });
        break;
      case "type":
        deleteType(id).then().catch().finally();
        break;
      default:
        break;
    }
  }

  return deleteOne;
};

export default useDelete;
