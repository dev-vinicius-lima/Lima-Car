import { useState } from "react";
import { RegisterOptions, UseFormRegister } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface InputProps {
  type: string;
  placeholder: string;
  name: string;
  register: UseFormRegister<any>;
  error?: string;
  rules?: RegisterOptions;
}

const Input = ({
  name,
  placeholder,
  type,
  register,
  rules,
  error,
}: InputProps) => {
  const [showPassWord, setShowPassword] = useState(false);

  function toggleShowPassword(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    setShowPassword(!showPassWord);
  }

  return (
    <div className="relative">
      <input
        className="block w-full p-2 pr-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
        placeholder={placeholder}
        type={showPassWord ? "text" : type}
        {...register(name, rules)}
        id={name}
      />
      {error && <p className="my-1 text-red-500">{error}</p>}
      {type === "password" && (
        <button
          onClick={toggleShowPassword}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          {!showPassWord ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
        </button>
      )}
    </div>
  );
};

export default Input;
