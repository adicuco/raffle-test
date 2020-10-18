import React, { useState } from "react";
import PropTypes from "prop-types";

const Form = ({ onSubmit, submitText, inputs }) => {
  const [data, setData] = useState(
    inputs.reduce((obj, { id }) => ({ ...obj, [id]: "" }), {})
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(data);
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <form
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      onSubmit={handleSubmit}
    >
      {inputs.map(({ id, label, placeholder, isRequired, type }) => (
        <div className="mb-4" key={id}>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor={id}
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id={id}
            type={type}
            placeholder={placeholder}
            value={data[id]}
            onChange={handleChange}
          />
          <p className="text-red-500 text-xs italic">{label} is required</p>
        </div>
      ))}
      <div className="flex items-center justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          {submitText}
        </button>
      </div>
    </form>
  );
};

Form.defaultProps = {
  submitText: "Submit",
  inputs: [
    {
      id: "username",
      label: "Username",
      placeholder: "Username",
      isRequired: true,
      type: "text",
    },
    {
      id: "password",
      label: "Password",
      placeholder: "********",
      isRequired: true,
      type: "password",
    },
  ],
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  submitText: PropTypes.string,
  inputs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
      isRequired: PropTypes.bool.isRequired,
      type: PropTypes.string.isRequired,
    })
  ),
};

export default Form;
