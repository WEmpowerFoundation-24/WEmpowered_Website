import Navlist from "./Navbar-Components/Navlist";
export default function Navbar() {
  return (
    <>
      <div className=" absolute flex flex-row w-screen  p-8 justify-between text-gray-400 items-center z-10 lg:px-20">
        <a className="text-white cursor-pointer font-Gilroy-700 text-xl" href="/">
          WEmpower
        </a>
        <Navlist />
      </div>
      
    </>
  );
}
