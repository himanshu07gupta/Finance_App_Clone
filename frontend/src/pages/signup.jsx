import { Heading } from "../components/Heading"
import { Inputbox } from "../components/input"
import { SubHeading } from "../components/subheading"
import { Button } from "../components/button"
import { BottomWarning } from "../components/warnigcomponent"


export function Signup(){
    return(
        <div className="bg-slate-500 h-screen flex justify-center">
            <div className="flex justify-center">
                <div className="bg-white rounded-lg w-80 text-center p-2 h-max px-4 mt-40" >
           
                    <Heading text="Signup Page"></Heading>
                    <SubHeading text="create your account"></SubHeading>
                   
                    <Inputbox text="First Name" placeholdertext="type your name here"></Inputbox>
                    <Inputbox text="Last Name" placeholdertext="type here"></Inputbox>
                    <Inputbox placeholdertext="harkirat@gmail.com" text="Email" />
                    <Inputbox placeholdertext="123456" text={"Password"} />
                    
                    <div className="mt-4">
                        <Button label="signup"></Button>
                    </div>
                    <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
        </div> 
        </div>
    </div>
    )
}

// return(
//    c
// )