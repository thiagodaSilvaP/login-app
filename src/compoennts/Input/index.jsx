import React from "react";

// export const Input = props => {
//   return <input {...props} ></input>;
// };

export const Input = React.forwardRef(
  ({ onChange, onBlur, name, type, placeholder, id }, ref) => {
    return (
      <input
        name={name}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
        type={type}
        placeholder={placeholder}
        id={id}
      ></input>
    );
  }
);
