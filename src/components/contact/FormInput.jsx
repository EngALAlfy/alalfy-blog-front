import React from 'react';

const FormInput = ({
  type = 'text',
  name,
  placeholder,
  icon,
  required = false,
  options = [],
  rows,
  className = ''
}) => {
  const renderInput = () => {
    if (type === 'select') {
      return (
        <select name={name} className="form-control" required={required}>
          <option value="">{placeholder}</option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
    } else if (type === 'textarea') {
      return (
        <textarea
          className="form-control"
          name={name}
          rows={rows || 6}
          placeholder={placeholder}
          required={required}
        ></textarea>
      );
    } else {
      return (
        <input
          type={type}
          name={name}
          className="form-control"
          placeholder={placeholder}
          required={required}
        />
      );
    }
  };

  return (
    <div className={`input-group ${className}`}>
      <span className="input-group-text">
        <i className={`bi bi-${icon}`}></i>
      </span>
      {renderInput()}
    </div>
  );
};

export default FormInput;
