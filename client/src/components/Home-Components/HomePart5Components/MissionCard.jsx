/* eslint-disable react/prop-types */
const MissionCard = ({mission_icon,style,text}) => {
  return (
    <>
      <div className={`bg-[#FFFFFF] flex flex-col py-14 px-1 rounded-xl xxxs:w-80 xs:w-96 ${style} `}>
        <img src={mission_icon} alt="Open book" className="w-8 s:w-12 mb-6 self-center xl:self-start xl:ml-10" />
        <p className="text-justify text-base s:text-xl px-4 xs:px-10 my-3 text-[#5D3A66]">
          {text}
        </p>
      </div>
    </>
  );
};

export default MissionCard;
