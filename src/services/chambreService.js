import apiClient from "./api-client";

const chambreEndPoint = "/chambres/";

export const getChambre = (id) => {
  return apiClient.get(chambreEndPoint + id);
};

export const getAllChambres = () => {
  return apiClient.get(chambreEndPoint);
};

export const createChambre = (requestData) => {
  return apiClient.post(chambreEndPoint, requestData);
};

export const updateChambre = (id, requestData) => {
  return apiClient.put(chambreEndPoint + id, requestData);
};

export const deleteChambre = (id) => {
  return apiClient.delete(chambreEndPoint + id);
};
