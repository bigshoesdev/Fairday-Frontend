import React from 'react';

interface ButtonProps {
  loading?: boolean | any;
  text?: string;
  disable?: boolean;
  onClick: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className, disable = false, loading = false }) => {
  const bufferClick = () => {
    if (!loading) {
      onClick()
    }
  }
  return (

    <button

      onClick={bufferClick}
      className={`btn ${className || ''} ${disable ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : ''}`}
      disabled={disable}
    >
      {loading ? "Loading..." : text}
    </button>
  );
}

export default Button;

