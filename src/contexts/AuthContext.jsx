/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../services/api-client";
import { toast } from "react-hot-toast";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const getCSRFToken = async () => await apiClient.get("/sanctum/csrf-cookie");

  useEffect(() => {
    getCSRFToken();
    if (!user) {
      fetchUser();
    }
  }, [user]);

  const fetchUser = async () => {
    try {
      const response = await apiClient.get("/auth/user");
      setUser(response.data.user);
    } catch ({ response }) {
      if (response.status === 401) {
        setUser(null);
      }
    } finally {
      setLoading(false);
    }
  };

  const login = async (credentials, setError) => {
    const toastId = toast.loading("Login en cours...");

    try {
      const response = await apiClient.post("/auth/login", credentials);
      setUser(response.data.user);
      navigate("/chambres");
      toast.success(response.data.message, {
        id: toastId,
      });
    } catch ({ response }) {
      toast.error(response.data.message, {
        id: toastId,
      });
      setError("email", { message: response.data.message });
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    const toastId = toast.loading("Déconnection en cours...");

    apiClient
      .post("/auth/logout")
      .then(() => {
        setUser(null);
        navigate("/login");
        toast.success("Déconnecté avec succée.", {
          id: toastId,
        });
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  const signUp = (data, setError) => {
    const toastId = toast.loading("Inscription en cours...");

    apiClient
      .post("/auth/register", data)
      .then(({ data }) => {
        toast.success(data.message, {
          id: toastId,
        });
        navigate("/login");
      })
      .catch(({ response: { data } }) => {
        toast.error(data.message, {
          id: toastId,
        });
        for (let i in data.errors) {
          setError(i, { message: data.errors[i][0] });
        }
        console.log(data);
      })
      .finally(() => setLoading(false));
  };

  const forgotPassword = (data, setError) => {
    const toastId = toast.loading("L'envoi de l'e-mail est en cours...");

    apiClient
      .post("/auth/forgot", data)
      .then(({ data }) => {
        toast.success(data.message, {
          id: toastId,
        });

        navigate("/login");
      })
      .catch(({ response: { data } }) => {
        toast.error(data.message, {
          id: toastId,
        });

        setError("email", { message: data.message });
      })
      .finally(() => setLoading(false));
  };

  const resetPassword = (passwords, token, setError) => {
    const toastId = toast.loading(
      "La réinitialisation du mot de passe est en cours..."
    );

    apiClient
      .post("/auth/reset", { ...passwords, token })
      .then(({ data }) => {
        toast.success(data.message, {
          id: toastId,
        });

        navigate("/login");
      })
      .catch(({ response: { data } }) => {
        toast.error(data.message, {
          id: toastId,
        });

        setError("password", { message: data.errors?.password[0] });
      })
      .finally(() => setLoading(false));
  };

  // const checkResetToken = (token, setValue) => {
  //   console.log("Check Again");
  //   apiClient
  //     .get(`/auth/reset/${token}`)
  //     .then(({ data }) => {
  //       setValue("email", data.email);
  //     })
  //     .catch(() => {
  //       navigate("/404");
  //     })
  //     .finally(() => setLoading(false));
  // };

  return (
    <AuthContext.Provider
      value={{
        loading,
        user,
        login,
        signUp,
        logout,
        forgotPassword,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
