// import React from 'react';

// interface ButtonProps {
//   text: string;
//   disable?: boolean;
//   onClick: () => void;
//   className?: string; 
// }

// const Button: React.FC<ButtonProps> = ({ text, onClick, className, disable = false }) => {
//   return (
//     <button onClick={onClick} className={`btn ${className || ''}` } disabled={disable}>
//       {text}
//     </button>
//   );
// }

// export default Button;
import React from 'react';

interface ButtonProps {
  text: string;
  disable?: boolean;
  onClick: () => void;
  className?: string; 
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className, disable = false }) => {
  return (
    <button
      onClick={onClick}
      className={`btn ${className || ''} ${disable ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : ''}`}
      disabled={disable}
    >
      {text}
    </button>
  );
}

export default Button;

