const Input = ({ type, placeholder, value, setState }) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
    </>
  );
};
export default Input;
