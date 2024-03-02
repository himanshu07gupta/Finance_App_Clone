export const Balance= ({money}) =>{
       return <div className="flex">
             
             <div className="font-bold text-lg mr-2">
                Your Balance:
             </div>

             <div className="font-semibold text-lg">
                 Rs {money}
             </div>
       </div>
}