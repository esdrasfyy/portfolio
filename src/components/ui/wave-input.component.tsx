import { useState, useRef, forwardRef } from "react";

interface WaveInputProps {
  name: string;
  placeholder?: string;
  type?: "text" | "email" | "textarea";
  required?: boolean;
  rows?: number;
  error?: string;
}

export const WaveInput = forwardRef<HTMLInputElement | HTMLTextAreaElement, WaveInputProps>(({ 
  name, 
  placeholder = "", 
  type = "text", 
  required = false,
  rows = 4,
  error
}, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setIsFocused(false);
    setHasValue(e.target.value.length > 0);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setHasValue(e.target.value.length > 0);
  };

  const labelText = placeholder || name;
  const shouldAnimate = isFocused || hasValue;

  const InputComponent = type === "textarea" ? "textarea" : "input";

  return (
    <div className="relative">
      <InputComponent
        ref={ref || inputRef as any}
        name={name}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        required={required}
        rows={type === "textarea" ? rows : undefined}
        className={`w-full bg-transparent text-black border-0 border-b focus:outline-none text-lg py-2 ${
          error ? 'border-red-500' : 'border-gray-400 focus:border-gray-900'
        }`}
      />
      
      <label className="absolute left-0 top-2 text-gray-500 text-sm font-medium uppercase tracking-wider pointer-events-none flex">
        {labelText.split('').map((char, index) => (
          <span
            key={index}
            className="transition-all duration-200 ease-out"
            style={{
              transform: shouldAnimate ? 'translateY(-20px)' : 'translateY(0)',
              fontSize: shouldAnimate ? '12px' : '14px',
              color: shouldAnimate ? '#374151' : '#6B7280',
              transitionDelay: `${index * 0.05}s`,
              whiteSpace: char === ' ' ? 'pre' : 'normal'
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
        {required && (
          <span 
            className="transition-all duration-200 ease-out text-red-500"
            style={{
              transform: shouldAnimate ? 'translateY(-20px)' : 'translateY(0)',
              fontSize: shouldAnimate ? '12px' : '14px',
              transitionDelay: `${labelText.length * 0.05}s`
            }}
          >
            *
          </span>
        )}
      </label>
      {error && (
        <span className="absolute -bottom-6 left-0 text-red-500 text-sm">
          {error}
        </span>
      )}
    </div>
  );
});
