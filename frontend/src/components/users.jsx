import { useState } from "react"
import { Button } from "./button"


export const Users = () => {
      const [users,setusers] = useState([{
        firstname : "Himanshu",
        lastname : "Gupta",
        _id  :1
      }])
       
       return <div>
        <div className="font-bold mt-6 text-lg">
            Users
        </div>

        <div className="my-2">
            <input type="text" placeholder="search users.." className="w-full px-2 py-1 border rounded border-slate-200" />
        </div>

        <div>
            {users.map(function(user){
                    return (<Userlist key={user._id} user={user}></Userlist>)
            })}
        </div>
       </div>
}


const Userlist = ({user})=>{
     return  <div className="flex justify-between">
                <div className="flex">         
                        
                        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mr-2">
                            <div className=" flex flex-col justify-center h-full text-xl">
                                { user.firstname[0]}
                            </div>
                        </div>

                        <div className="flex flex-col justify-center h-ful">
                            <div>
                                {user.firstname} {user.lastname}
                            </div>
                           
                        </div>
                </div>

                <div className="flex flex-col justify-center h-full">
                    <Button label="send money" ></Button>
                </div>

             </div>

}