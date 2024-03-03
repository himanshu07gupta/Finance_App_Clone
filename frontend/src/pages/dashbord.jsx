import { Appbar } from "../components/appbar"
import { Balance } from "../components/balance"
import { Users } from "../components/users"


export function Dashbord(){
    return <div>
        <Appbar></Appbar> 
        <Balance></Balance>
        <Users></Users>
    </div>
} 