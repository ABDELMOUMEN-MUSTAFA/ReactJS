/* eslint-disable react/prop-types */
const Radio = ({ name, values, errorMessage, register }) => {
  return (
    <div className="mb-3">
      <label className="form-label">{name}</label>
      <div className="d-flex gap-3">
        {values.map((v) => (
          <div key={v} className="form-check">
            <input
              type="radio"
              value={v}
              className={
                errorMessage
                  ? "form-check-input is-invalid"
                  : "form-check-input"
              }
              name={name.toLowerCase()}
              {...register(name.toLowerCase())}
              id={name + v}
            />
            <label className="form-check-label" htmlFor={name + v}>
              {v}
            </label>
          </div>
        ))}
      </div>
      <small className="text-danger">{errorMessage}</small>
    </div>
  );
};

export default Radio;
