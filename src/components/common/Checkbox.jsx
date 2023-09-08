/* eslint-disable react/prop-types */
const Checkbox = ({ label, name, register }) => {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        {...register(name)}
        id={name}
      />
      <label className="form-check-label" htmlFor={name}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
