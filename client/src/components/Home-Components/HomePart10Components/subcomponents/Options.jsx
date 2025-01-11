/* eslint-disable react/prop-types */
const Options = ({value,setValue}) => {
  return (
    <>
      <select
        name="findUs"
        id="findUs"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="px-5 py-3 border-[1px] border-[#E0E0E0] w-full"
      >
        <option value="default" default>
          How did you find us?
        </option>
        <option value="SocialMedia">Social Media</option>
        <option value="School/College">School / College</option>
        <option value="Friends">Friends</option>
        <option value="Other">Other</option>
      </select>
    </>
  );
};

export default Options;
