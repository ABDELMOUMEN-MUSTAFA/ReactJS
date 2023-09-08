/* eslint-disable react/prop-types */
const SelectTitre = ({ label, name, options, register, field }) => {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <select
        {...register(name, { valueAsNumber: true })}
        className="form-select form-select-sm"
      >
        {options.map((o) => (
          <option key={o.id} value={o.id}>
            {o[field]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectTitre;
