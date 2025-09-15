
function Input({ 
    label, 
    type = "text",
    placeholder = "",
    register, 
    required 
}) {
  return (
    <>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} {...register(label, { required })} />
    </>
  );
}
export default Input;