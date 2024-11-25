export default function Navbar() {
  return (
    <>
     <div className="flex flex-row w-screen justify-between p-8 px-28 text-gray-400 items-center">
        <p className="text-white cursor-pointer font-Gilroy-700 text-xl">WEmpowered</p>
        <div className="flex gap-x-11 justify-between items-center">
            <p className="hover:text-white cursor-pointer text-lg font-Gilroy-500 hover:font-bold">Home</p>
            <p className="hover:text-white cursor-pointer text-lg font-Gilroy-500  hover:font-bold">About Us</p>
            <p className="hover:text-white cursor-pointer text-lg font-Gilroy-500  hover:font-bold">Our Team</p>
            <p className="hover:text-white cursor-pointer text-lg font-Gilroy-500 hover:font-bold">Road Map</p>
            <button className="bg-white text-black py-3 px-6 rounded-lg text-md font-Gilroy-500">Contact Us</button>
        </div>
     </div> 
    </>
  )
}
