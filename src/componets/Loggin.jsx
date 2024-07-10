import { useState } from "react"
import postUser from '../api/post_url.js'
import { useNavigate } from "react-router-dom"

export default function Loggin(){
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [pass,setPass] = useState("")

    const nav = useNavigate()
    const handleClick = ()=>{
        const data = postUser({name:name,email:email,password:pass})
        
            nav('/home')
        
    }
    return (
        <>
            <div>
           
                <input 
                    onChange={(e)=>setName(e.target.value)}
                    name='name'
                    type="text"
                    value={'nemish'}
                    placeholder="Enter name"
                />
                <input 
                    onChange={(e)=>setEmail(e.target.value)}
                    name = 'email'
                    type="text"
                    value={"fldfjdl"}
                    placeholder="Enter email"
                />
                <input
                    onChange={(e)=>setPass(e.target.value)}
                    name='password'
                    type="text"
                    placeholder="Enter password"
                    value={"fldfjl"}
                />
                <button onClick={handleClick} >submit</button>
                
            </div>
        </>
    )
}