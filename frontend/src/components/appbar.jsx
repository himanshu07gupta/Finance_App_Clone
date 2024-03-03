import { useSearchParams } from "react-router-dom"

export const Appbar = ()=>{
    const [searchparam, setsearchparam] = useSearchParams();
    const firstname = searchparam.get("firstname")
    
    return <div className="shadow flex justify-between">
        <div className="flex flex-col justify-center ">
            PayTM App
        </div>

        <div className="flex">
             <div className="flex flex-col justify-center h-full mr-4">
                Hello 
             </div>
             
             {/* these two div - one char inside a round circle */}
             <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center">
                  <div className=" flex flex-col justify-center h-full text-xl">
                    {firstname[0].toUpperCase()}
                  </div>
             </div>

        </div>
    </div>
}