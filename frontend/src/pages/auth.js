import {useState,useEffect} from 'react';
import { redirect } from 'react-router-dom';
import axios from 'axios';

const Auth = (props) => {
    const [header,setheader] = useState("Login");
    const [onSubmit,setSubmit]=useState(false);
    const [onLogIn,setLogIn]=useState(false);
    const [userData,setUserData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleInput=(e)=>{
        const name=e.target.name;
        const value=e.target.value.toString();
        setUserData({...userData,[name]: value});
    }

    useEffect(() => {
        axios.post("http://localhost:5000/api/user/register",{
            name: userData.name,
            email: userData.email,
            password: userData.password,
        })
        .then((res)=>{alert("User Registered Successfully")})
        .catch((err)=>console.log(err.message)) 
    },[onSubmit])
    
    useEffect(() => {
        axios.post(`http://localhost:5000/api/user/login`,{
            name: userData.name,
            password: userData.password,
        })
        .then(res=>(alert("User Logged In Successfully")))
        .catch(err=>(console.log(err.message)))
    },[onLogIn])

    const handleSubmit=()=>{
        setSubmit(!onSubmit);
    }
    const handleLogIn=()=>{
        setLogIn(!onLogIn);
    }
    const handleClick=(e)=>{
        setheader(e.target.innerHTML);
        setUserData({
            name: "",
            email: "",
            password: "",
        });
    }

  return (
    <div className="userContainer">
        <div className="head">{header}</div>
        
        <div className="user" id="name">
            <input type="text" name="name" placeholder="Name" value={userData.name} onChange={handleInput}/>
        </div>

        {header==="Login"?<div />:
        <div className={header==="Login"?"invisible":"user"} id="email">
            <input type="email" name="email" placeholder="Email" value={userData.email} onChange={handleInput}/>
        </div>
        }

        <div className="user" id="key">
            <input type="password" name="password" placeholder="Password" value={userData.password} onChange={handleInput}/>
        </div>

        <div className="forgotpass" onClick={handleClick}>{header==="SignUp"?"Login":"SignUp"}</div>

        <div className="buttons"> 
            <button className={header==="Login"?"userLog":"invisible"} type="submit" onClick={handleLogIn}>Login</button>
            <button className={header==="SignUp"?"userSign":"invisible"} type="submit" onClick={handleSubmit}>Sign Up</button>
        </div>
        
    </div>
  )
}

export default Auth;
