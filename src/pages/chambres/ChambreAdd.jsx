import { useState } from "react";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import chambreSchema, { etages } from "../../validations/chambreSchema";
import { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import UseFetchAll from "../../hooks/useFetchAll";
import UseCreate from "../../hooks/useCreate";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import Navbar from "../../components/common/Navbar";
import Main from "../../components/layouts/Main";
import Input from "../../components/common/Input";
import Radio from "../../components/common/Radio";
import TextArea from "../../components/common/TextArea";
import Select from "../../components/common/Select";
import Spinner from "../../components/common/Spinner";
import Loading from "../../components/common/Loading";

const ChambreAdd = () => {
  const [isLoading, setLoading] = useState(true);
  const [isDisabled, setDisabled] = useState(false);
  const [typeOptions, setTypeOptions] = useState([]);
  const save = UseCreate(setLoading, "chambre", "/chambres");

  UseFetchAll(setTypeOptions, setLoading, "type");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(chambreSchema),
    defaultValues: { type_id: "1" },
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar>
        <Link to="/chambres" className="btn btn-sm btn-secondary">
          <IoArrowBackCircleSharp size={18} /> &nbsp;Retourner
        </Link>
      </Navbar>
      <Main>
        <form
          onSubmit={handleSubmit((data) => {
            setDisabled(true);
            save(data);
          })}
        >
          <h2 className="mb-3">Nouvelle chambre</h2>
          <Select
            label="Titre"
            name="type_id"
            options={typeOptions}
            register={register}
            field="titre"
          />
          <TextArea
            name="Description"
            register={register}
            errorMessage={errors.description?.message}
          />
          <Input
            isNumber={true}
            register={register}
            name="Superficie"
            errorMessage={errors.superficie?.message}
            placeholder="en &#x33A1;"
          />
          <Radio
            name="Etage"
            errorMessage={errors.etage?.message}
            register={register}
            values={etages}
          />
          <Input
            isNumber={true}
            name="Prix"
            errorMessage={errors.prix?.message}
            register={register}
            placeholder="Prix"
          />
          <button className="btn btn-success" disabled={isDisabled}>
            {isDisabled ? <Spinner /> : "Ajouter"}
          </button>
        </form>
        <Toaster />
      </Main>
    </>
  );
};

export default ChambreAdd;
