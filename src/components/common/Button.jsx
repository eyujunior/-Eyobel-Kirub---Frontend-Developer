const Button = ({ children, custom, handleClick, type, onBlur }) => {
  return (
    <button
      onBlur={onBlur}
      type={type}
      onClick={handleClick}
      className={`${custom} px-4 sm:px-6 shadow-sm capitalize rounded transition-all duration-200 ease-in-out`}
    >
      {children}
    </button>
  );
};

export default Button;
