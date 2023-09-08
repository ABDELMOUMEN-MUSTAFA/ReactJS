import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { useNavigate } from "react-router-dom";

const UseCheckResetPasswordToken = (token, setValue) => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Check Again");
    apiClient
      .get(`/auth/reset/${token}`)
      .then(({ data }) => {
        setValue("email", data.email);
      })
      .catch(() => {
        navigate("/404");
      })
      .finally(() => setLoading(false));
  }, [token, setValue, navigate]);

  return { loading };
};

export default UseCheckResetPasswordToken;
