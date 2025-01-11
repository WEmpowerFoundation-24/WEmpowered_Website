import {Loader} from "lucide-react"
// eslint-disable-next-line react/prop-types
const Submit = ({LoaderData}) => {
  return (
    <>
      <button className="py-3 px-6 bg-black text-white ">{LoaderData?<Loader className="w-6 h-6 mx-auto animate-spin" size={24}/>:"SEND"}</button> 
    </>
  )
}

export default Submit
