import { styleInput, styleLabel } from "./estilosGenerales";

export const InputForm = ({
  name,
  id,
  type,
  htmlFor,
  text,
  icon,
  value,
  onChange,
}) => {
  return (
    <div className="relative w-full min-w-[200px] my-5">
      <input
        className={styleInput}
        placeholder=" "
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        required
      />
      <span className="absolute text-gray-500 text-2xl right-0 top-2 mr-4">
        {icon}
      </span>
      <label htmlFor={htmlFor} className={styleLabel}>
        {text}
      </label>
    </div>
  );
};
