/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import Input from "../../components/common/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import Main from "../../components/layouts/Main";
import { Toaster } from "react-hot-toast";
import Spinner from "../../components/common/Spinner";
import { Link } from "react-router-dom";
import { z } from "zod";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const forgotSchema = z.object({
  email: z
    .string()
    .min(1, "Email est obligatoire.")
    .email("Veuillez saisir un email valid."),
});

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: zodResolver(forgotSchema),
  });

  const { loading, forgotPassword } = useContext(AuthContext);

  return (
    <>
      <Main>
        <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
          <h2 className="text-center">Mot de passe oublié ?</h2>
          <form
            className="w-75"
            onSubmit={handleSubmit((data) => forgotPassword(data, setError))}
          >
            <Input
              name="Email"
              errorMessage={errors.email?.message}
              register={register}
              type="email"
              placeholder="Email"
            />
            <div className="d-grid mb-2">
              <button className="btn btn-sm btn-primary" disabled={loading}>
                {loading ? <Spinner /> : "Envoyer le lien de réinitialisation"}
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

export default ForgotPassword;
