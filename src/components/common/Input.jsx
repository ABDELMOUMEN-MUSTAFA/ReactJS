/* eslint-disable react/prop-types */
const Input = ({
  name,
  errorMessage,
  register,
  placeholder,
  label = null,
  isNumber = false,
  type = "text",
  readonly = false,
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={name.toLowerCase()} className="form-label">
        {label ? label : name}
      </label>
      <input
        readOnly={readonly}
        {...register(name.toLowerCase(), { valueAsNumber: isNumber })}
        type={type}
        name={name.toLowerCase()}
        id={name.toLowerCase()}
        className={
          errorMessage
            ? "form-control form-control-sm is-invalid"
            : "form-control form-control-sm"
        }
        placeholder={placeholder}
      />
      <small className="invalid-feedback">{errorMessage}</small>
    </div>
  );
};

export default Input;
