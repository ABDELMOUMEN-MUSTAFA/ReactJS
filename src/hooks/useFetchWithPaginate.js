import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import apiClient from "../services/api-client";

const useFetchWithPaginate = () => {
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setData([]);

    const page = searchParams.get("page") || 1;
    const search = searchParams.get("search") || "";

    apiClient
      .get("/chambres", {
        params: {
          page,
          search,
        },
        signal: controller.signal,
      })
      .then((response) => {
        setData(response.data.data);
        setTotalPages(response.data.last_page);
        setData(response.data.data);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [searchParams]);

  return {
    data,
    setData,
    searchParams,
    setSearchParams,
    totalPages,
    setTotalPages,
    loading,
  };
};

export default useFetchWithPaginate;
