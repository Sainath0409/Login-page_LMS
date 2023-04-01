import React,{useState} from 'react'
import  "./login.css"
import pc from "../image/shoppeal.jpg"
import pic from "../image/home.jpeg"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  let [emailid,setemailid]=useState('')
  let [password,setpassword]=useState('')
  let[error,setError]=useState(false)
  let Navigate=useNavigate();

  let handleSubmit=(e)=>{
    e.preventDefault();
    if(emailid.length==0||password.length==0){
        setError(true)
    }
    if(emailid&&password)
    {
    console.log("email id: ",emailid,"\npassword: ",password)
    Navigate("/dashbord");
    }
    
}
  return (
    <article>

      <div id='nav'>
        <img src={pc} alt="" />
        <h3 >  login page for Admin</h3>
      </div>
      <br /><br /><br /><br /><br />

      <div id='photo'>
      <img src={pic} alt="" />
      </div>
      <span id='lg'>
        .
      </span>

      <div id='login'>
        <table>
        <tr>
          <td><label htmlFor="">Email id: </label> </td>
          <td><input type="email" onChange={e=>setemailid(e.target.value)} placeholder='abc@gmail.com' required="required"/> </td>
        </tr>
        {error&&emailid.length<=0?
        <label id='error'>Email id can't be Empty</label>:""}
        
        <tr>
          <td><label htmlFor="">password: </label></td>
          <td><input type="password" onChange={e=>setpassword(e.target.value)} placeholder='password' required="required"/></td>
        </tr>
        {error&&password.length<=0?
        <label id='error'>Password can't be Empty</label>:""}
        
        <br />
        <tr id='abc'>
          <button onClick={handleSubmit}>LOGIN</button><br/>

        <Link to="/forget">Forget passoword</Link></tr>
        </table><br />

        <div id='signup'>
           <section>
           <h5>Don't have an account ?</h5>
           <Link to="/reg">sign up</Link>
           </section>
        </div>
      </div>
      

      
    </article>
  )
}

export default Login
