import { Heading } from "../components/Heading"
import { Inputcom } from "../components/input"
import { SubHeading } from "../components/subheading"


Heading
export function Signup(){
    return(
        <div className="flex flex-cols justify-center mt-20 grid-cols" >
            <Heading text="Signup Page"></Heading>
            <SubHeading text="enter you badic details to sign in"></SubHeading>
            <Inputcom text="your name" placeholdertext="type your name here"></Inputcom>
        </div>
    )
}