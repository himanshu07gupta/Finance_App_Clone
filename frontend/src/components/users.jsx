import { useEffect, useState } from "react"
import { Button } from "./button"
import { Link, useNavigate } from "react-router-dom"


export const Users = () => {
      const [users,setusers] = useState([])
      const [filter,setfilter] = useState()

      useEffect(()=>{
        fetch("http://localhost:3000/netbanking/v1/user/bulk?filter="+filter)
        .then(async function(response){
            let data = await response.json();
            setusers(data.users)
        })
        
        
      },[filter])
       
       return <div>
        <div className="font-bold mt-6 text-lg">
            Users
        </div>

        <div className="my-2">
            <input onChange={function(e){
                setfilter(e.target.value)
            }}  type="text" placeholder="search users.." className="w-full px-2 py-1 border rounded border-slate-200" />
        </div>

        <div>
            {users.map(function(user){
                    return (<Userlist key={user.id} user={user}></Userlist>)
            })}
        </div>
       </div>
}


const Userlist = ({user})=>{
      const navigate = useNavigate()
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
                    <Button label="send money" onClick={function(){
                       navigate("/send?id="+user.id+"&firstname="+user.firstname)
                    }}></Button>
                </div>

             </div>

}