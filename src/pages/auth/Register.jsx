/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import registerSchema from "../../validations/registerSchema";
import { AuthContext } from "../../contexts/AuthContext";
import { Toaster } from "react-hot-toast";
import Input from "../../components/common/Input";
import Main from "../../components/layouts/Main";
import Spinner from "../../components/common/Spinner";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const { signUp, loading } = useContext(AuthContext);

  return (
    <Main>
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <form
          className="w-75"
          onSubmit={handleSubmit((data) => signUp(data, setError))}
        >
          <Input
            name="Name"
            errorMessage={errors.name?.message}
            register={register}
            type="text"
            placeholder="Nom"
          />
          <Input
            name="Email"
            errorMessage={errors.email?.message}
            register={register}
            type="email"
            placeholder="Email"
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
              {loading ? <Spinner /> : "S'inscrire"}
            </button>
          </div>
          <div className="d-flex flex-column align-items-center">
            <span>You already have an account?</span>
            <Link to="/login">Se connecter</Link>
          </div>
        </form>
      </div>
      <Toaster />
    </Main>
  );
};

export default Register;
