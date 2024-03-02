import { Heading } from "../components/Heading"
import { Inputbox } from "../components/input"
import { SubHeading } from "../components/subheading"
import { Button } from "../components/button"
import { BottomWarning } from "../components/warnigcomponent"


export function Signin(){
    return(
        <div className="bg-slate-500 h-screen flex justify-center">
            <div className="flex justify-center">
                <div className="bg-white rounded-lg w-80 text-center p-2 h-max px-4 mt-40" >
           
                    <Heading text="Signin Page"></Heading>
                    <SubHeading text="enter you creadational to sign in"></SubHeading>
                   
                    <Inputbox placeholdertext="harkirat@gmail.com" text="Email" />
                    <Inputbox placeholdertext="123456" text={"Password"} />
                    
                    <div className="mt-4">
                        <Button label="signin"></Button>
                    </div>
                    <BottomWarning label={"dont have an account?"} buttonText={"Sign up"} to={"/signup"} />
                </div> 
            </div>
        </div>
    )
}