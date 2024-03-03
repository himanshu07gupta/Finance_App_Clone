import { Heading } from "../components/Heading"
import { Inputbox } from "../components/input"
import { SubHeading } from "../components/subheading"
import { Button } from "../components/button"
import { BottomWarning } from "../components/warnigcomponent"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


export function Signup(){
    const[firstname,setfirstname] = useState()
    const[lastname,setlastname] = useState()
    const[email,setemail] = useState()
    const[password,setpassword] = useState() 
    const navigate = useNavigate()
    return(
        <div className="bg-slate-500 h-screen flex justify-center">
            <div className="flex justify-center">
                <div className="bg-white rounded-lg w-80 text-center p-2 h-max px-4 mt-40" >
           
                    <Heading text="Signup Page"></Heading>
                    <SubHeading text="create your account"></SubHeading>
                   
                    <Inputbox text="First Name" placeholdertext="type your name here" onchange={function(e){
                          setfirstname(e.target.value)
                    }}></Inputbox>
                    <Inputbox text="Last Name" placeholdertext="type here" onchange={function(e){
                        setlastname(e.target.value)
                    }}></Inputbox>
                    <Inputbox placeholdertext="harkirat@gmail.com" text="Email" onchange={function(e){
                        setemail(e.target.value)
                    }} />
                    <Inputbox placeholdertext="123456" text={"Password"} onchange={function(e){
                        setpassword(e.target.value)
                    }}/>
                    
                    <div className="mt-4">
                        <Button label="signup" onClick={async function(){
                              const response = await fetch("http://localhost:3000/netbanking/v1/user/signup",{
                                    method : "POST",
                                    body : JSON.stringify({
                                        email : email,
                                        fname : firstname,
                                        lname : lastname,
                                        password : password
                                    }),
                                    headers: {
                                        'Content-Type': 'application/json'
                                    }
                                })
                                const data = await response.json()
                                await localStorage.setItem("token",data.token)
                                navigate("/dashbord?firstname="+data.firstname)
                        }}></Button>
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