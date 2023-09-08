/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import Input from "../common/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import Main from "../layouts/Main";
import { Toaster } from "react-hot-toast";
import Spinner from "../common/Spinner";
import { Link, useParams } from "react-router-dom";
import resetPasswordSchema from "./../../validations/resetPasswordSchema";
import UseCheckResetPasswordToken from "./../../hooks/useCheckResetPasswordToken";
import Loading from "../common/Loading";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const ResetPassword = () => {
  const { token } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setError,
  } = useForm({
    resolver: zodResolver(resetPasswordSchema),
  });

  const { loading, resetPassword } = useContext(AuthContext);
  const { loading: loading2 } = UseCheckResetPasswordToken(token, setValue);

  if (loading2) {
    return <Loading />;
  }

  return (
    <>
      <Main>
        <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
          <h2 className="text-center">Réinitialiser le mot de passe</h2>
          <form
            className="w-75"
            onSubmit={handleSubmit((passwords) =>
              resetPassword(passwords, token, setError)
            )}
          >
            <Input
              name="Email"
              errorMessage={errors.email?.message}
              register={register}
              type="email"
              placeholder="Email"
              readonly
            />
            <Input
              name="password"
              label="Mot de passe"
              errorMessage={errors.password?.message}
              register={register}
              type="password"
              placeholder="Mot de passe"
            />
            <Input
              name="password_confirmation"
              label="Confirmer Mot de passe"
              register={register}
              type="password"
              placeholder="Confirmer Mot de passe"
            />
            <div className="d-grid mb-2">
              <button className="btn btn-sm btn-primary" disabled={loading}>
                {loading ? <Spinner /> : "Réinitialiser le mot de passe"}
              </button>
            </div>
            <div className="mt-3 d-flex flex-column gap-2 align-items-center">
              <div>
                Vous n&#39;avez pas de compte?{" "}
                <Link to="/register">S&#39;inscrire</Link>
              </div>
              <div>
                You already have an account?{" "}
                <Link to="/login">Se connecter</Link>
              </div>
            </div>
          </form>
        </div>
        <Toaster />
      </Main>
    </>
  );
};

export default ResetPassword;
