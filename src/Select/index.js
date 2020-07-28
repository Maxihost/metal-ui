import React, { useState, useEffect, useCallback } from "react";
import classNames from "classnames";

const Select = React.forwardRef(
  (
    {
      onChange,
      selectClassName,
      options,
      className,
      value,
      label,
      id,
      error,
      ...rest
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState();

    useEffect(() => {
      setInternalValue(value);
    }, [value]);

    const handleChange = useCallback(
      (event) => {
        setInternalValue(event.target.value);
        if (onChange) {
          onChange(event.target.value);
        }
      },
      [setInternalValue, onChange]
    );

    return (
      <div className={className}>
        {label && (
          <label
            className="block text-sm font-medium leading-5 text-gray-700"
            htmlFor={id}
          >
            {label}
          </label>
        )}
        <div className="mt-1 relative rounded-md shadow-sm">
          <select
            id={id}
            ref={ref}
            onChange={handleChange}
            value={internalValue}
            className={classNames(
              "mt-1 form-select block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5",
              selectClassName,
              {
                "bg-red-100 border border-red-400 focus:border-red-300 focus:shadow-outline-red": error,
              }
            )}
            {...rest}
          >
            {options.map((item, index) => (
              <option key={`${item.value}-${index}`} value={item.value}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
);

export default Select;
