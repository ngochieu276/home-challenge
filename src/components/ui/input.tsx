import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, id, className = "", ...props }, ref) => {
    return (
      <div>
        <label className="block mb-1 font-medium" htmlFor={id}>{label}</label>
        <input
          id={id}
          ref={ref}
          className={`w-full border rounded-md px-3 py-2 focus:outline-none  focus:ring-primary ${className}`}
          {...props}
        />
        {error && <p className="text-destructive text-sm mt-1">{error}</p>}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
