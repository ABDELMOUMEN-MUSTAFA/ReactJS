/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import loginSchema from "../../validations/loginSchema";
import { AuthContext } from "../../contexts/AuthContext";
import { Toaster } from "react-hot-toast";
import Input from "../../components/common/Input";
import Main from "../../components/layouts/Main";
import Spinner from "./../../components/common/Spinner";
import Checkbox from "../../components/common/Checkbox";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const { loading, login } = useContext(AuthContext);

  return (
    <Main>
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <form
          className="w-75"
          onSubmit={handleSubmit((data) => login(data, setError))}
        >
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
          <div className="d-flex justify-content-between align-items-center mb-2">
            <Checkbox
              name="remembre"
              label="Se souvenir de moi"
              register={register}
            />
            <Link to="/password/forgot">Mot de passe oublié</Link>
          </div>
          <div className="d-grid mb-2">
            <button className="btn btn-sm btn-primary" disabled={loading}>
              {loading ? <Spinner /> : "Se connecter"}
            </button>
          </div>
          <div className="d-flex flex-column align-items-center mt-3">
            <span>Vous n&#39;avez pas de compte?</span>
            <Link to="/register">S&#39;inscrire</Link>
          </div>
        </form>
      </div>
      <Toaster />
    </Main>
  );
};

export default Login;
