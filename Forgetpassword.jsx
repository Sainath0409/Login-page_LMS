import React,{useState} from 'react'
import "./forgetpassword.css"
import pc from "../image/shoppeal.jpg"
import pic from "../image/f2.jpg"
import { useNavigate } from 'react-router-dom';
import axios from "axios";


const Forgetpassword = () => {
  let[Name,setname]=useState("");
  let[Emailid,setEmailid]=useState("");
  let[Phonenumber,setPhonenumber]=useState("");
  let[Newpassword,setNewpassword]=useState("");
  let [error,setError]=useState(false)
  let Navigate=useNavigate();

  let NameData=(e)=>{
    setname(e.target.value);
  }
let mailData=(e)=>{
    setEmailid(e.target.value)
  }
let phoneData=(e)=>{
    setPhonenumber(e.target.value)
  }
let newpasswordData=(e)=>{
  setNewpassword(e.target.value)
  }
let formhandle=(e)=>{
  e.preventDefault()
  let payload={Name,Emailid,Phonenumber,Newpassword}

  if(Name.length==0||Emailid.length==0||Phonenumber.length==0||Newpassword.length==0){
    setError(true)
  }
  if(Name&&Emailid&&Phonenumber&&Newpassword)
  {
  console.log(" Name: ",Name,"\nEmail id: ",Emailid,"\nphonenumber: ",Phonenumber,"\nRewritepassword: ",Newpassword)
  Navigate("/");
  }



  else{
  axios.post("http://localhost:3000/sainath",payload)
  .then(()=>{
    console.log("Data has beed Updated");
  })
  // Navigate("/");
}

  
}
  return (
    <div >

      <div id='nav'>
      <img src={pc} alt="" />
        <h3 >Forget Password ??? </h3>
        
      </div>

      <br /><br />

      <div id='l1'>
      <img src={pic} alt="" />
      </div>

      <div id='forgot'>
      <table>
    <tr>
        <td><label htmlFor="">Name : </label></td>
        <td><input type="text" placeholder='Register Name' value={Name} onChange={NameData} required="required"/></td>
    </tr>
    {error&&Name.length<=0?
               <label id='error'> Name can't be Empty</label>:""}
    <tr>
        <td><label htmlFor="">Email id : </label></td>
        <td><input type="email" name="" id="" placeholder='abc@gmail.com' value={Emailid} onChange={mailData} required="required"/></td>
    </tr>
    {error&&Emailid.length<=0?
               <label id='error'>Email id can't be Empty</label>:""}
    <tr>
        <td><label htmlFor="">Phone Number : </label></td>
        <td><input type="number" name="" id="" placeholder='Register Contact Number'value={Phonenumber} onChange={phoneData} required="required" /></td>
    </tr>
    {error&&Phonenumber.length<=0?
               <label id='error'>Number can't be Empty</label>:""}
    <tr>
        <td><label htmlFor="">New Password : </label></td>
        <td><input type="password" name="" id=""placeholder='New password' value={Newpassword} onChange={newpasswordData} required="required"/></td>
    </tr>
    {error&&Newpassword.length<=0?
               <label id='error'>New Password can't be Empty</label>:""}
    
    <tr id='ghi'>
      <button onClick={formhandle}>Done</button>
    </tr>
      </table>

      </div>
      
    </div>
  )
}

export default Forgetpassword
