import Navlist from "./Navbar-Components/Navlist";
export default function Navbar() {
  return (
    <>
      <div className="flex flex-row w-screen  p-8 justify-between text-gray-400 items-center z-10 lg:px-20 fixed">
        <a className="text-white cursor-pointer font-Gilroy-700 text-xl" href="/">
          WEmpowered
        </a>
        <Navlist />
      </div>
      
    </>
  );
}
