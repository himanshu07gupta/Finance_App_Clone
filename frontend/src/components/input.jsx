// export function Inputcom ({text,placeholdertext}){
//     return <div>
//         <input type="text" placeholder={placeholdertext} /> <br />
//         {text}
//     </div>
// }

export const Inputbox = ({text,placeholdertext}) =>{
    return <div  className="text-sm font-medium text-left mt-1 ">
        <div className="md-1">
            {text}
        </div>
        <input type="text" placeholder={placeholdertext} className="px-2 py-1 w-full mt-1"/>
    </div>
    
}