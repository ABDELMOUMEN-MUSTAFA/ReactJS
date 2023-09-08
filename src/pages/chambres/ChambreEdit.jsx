import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import useFetchAll from "./../../hooks/useFetchAll";
import useFetch from "./../../hooks/useFetch";
import useUpdate from "../../hooks/useUpdate";
import chambreSchema, { etages } from "../../validations/chambreSchema";
import { Toaster } from "react-hot-toast";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import Navbar from "../../components/common/Navbar";
import Main from "../../components/layouts/Main";
import Input from "../../components/common/Input";
import Radio from "../../components/common/Radio";
import TextArea from "../../components/common/TextArea";
import Select from "../../components/common/Select";
import Spinner from "../../components/common/Spinner";
import Loading from "../../components/common/Loading";

const ChambreEdit = () => {
  const { id } = useParams();
  const [isTypesLoading, setTypesLoading] = useState(true);
  const [isChambreLoading, setChambreLoading] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [typeOptions, setTypeOptions] = useState([]);
  const [chambre, setChambre] = useState({});
  const update = useUpdate(id, setLoading, "chambre", "/chambres");
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(chambreSchema),
  });

  useFetchAll(setTypeOptions, setTypesLoading, "type");
  useFetch(id, setChambre, setChambreLoading, "chambre");

  useEffect(() => {
    // if the 'chambre' loaded filled the edit form
    console.log("MEMO");
    const { type_id, superficie, etage, description, prix } = chambre;
    setValue("description", description);
    setValue("type_id", type_id);
    setValue("superficie", parseInt(superficie));
    setValue("etage", etage);
    setValue("prix", Number(prix));
  }, [chambre, setValue]);

  if (isTypesLoading || isChambreLoading) {
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
        <form onSubmit={handleSubmit((data) => update(data))}>
          <h2 className="mb-3">
            Modifier les informations de la chambre #{id}
          </h2>
          <Select
            name="type_id"
            options={typeOptions}
            register={register}
            label="Titre"
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
          <button className="btn btn-info" disabled={isLoading}>
            {isLoading ? <Spinner /> : "Modifier"}
          </button>
        </form>
        <Toaster />
      </Main>
    </>
  );
};

export default ChambreEdit;
