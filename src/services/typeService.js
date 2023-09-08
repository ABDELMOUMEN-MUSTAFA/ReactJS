import apiClient from "./api-client";

const typeEndPoint = "/types/";

export const getType = async (id) => {
  return await apiClient.get(typeEndPoint + id);
};

export const getAllTypes = async () => {
  return await apiClient.get(typeEndPoint);
};

export const createType = async (requestData) => {
  return await apiClient.post(typeEndPoint, requestData);
};

export const updateType = async (id, requestData) => {
  return await apiClient.put(typeEndPoint + id, requestData);
};

export const deleteType = async (id) => {
  return await apiClient.delete(typeEndPoint + id);
};
