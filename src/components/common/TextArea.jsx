/* eslint-disable react/prop-types */
const TextArea = ({ name, errorMessage, register }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name.toLowerCase()} className="form-label">
        {name}
      </label>
      <textarea
        placeholder={name}
        id={name.toLowerCase()}
        name={name.toLowerCase()}
        {...register(name.toLowerCase())}
        rows="5"
        className={
          errorMessage
            ? "form-control form-control-sm is-invalid"
            : "form-control form-control-sm"
        }
      ></textarea>
      <small className="invalid-feedback">{errorMessage}</small>
    </div>
  );
};

export default TextArea;
