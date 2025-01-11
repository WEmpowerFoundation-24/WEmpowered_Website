/* eslint-disable react/prop-types */
const InputField = ({ type, placeholder, Required,value,setValue}) => {
    return (
      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          className= "px-5 py-3 border-[1px] border-[#E0E0E0] w-full"
          required={Required}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    );
  };
  
  export default InputField;