import React,{useState} from 'react';
import axios from "axios";
import "./newregister.css"
import pc from "../image/shoppeal.jpg"
import pic from "../image/Login.jpg"
import { useNavigate } from 'react-router-dom';

const NewRegister = () => {

    let[Fullname,setFullname]=useState("");
    let[Emailid,setEmailid]=useState("");
    let[Phonenumber,setPhonenumber]=useState("");
    let[dob,setdob]=useState("");
    let[gender,setgender]=useState("");
    let[password,setpassword]=useState("");
    let[Rewritepassword,setrewritepassword]=useState("");
    let [error,setError]=useState(false)
    let Navigate=useNavigate();

    let NameData=(e)=>{
        setFullname(e.target.value);
    }
    let mailData=(e)=>{
        setEmailid(e.target.value)
    }
    let phoneData=(e)=>{
        setPhonenumber(e.target.value)
    }
    let dobData=(e)=>{
        setdob(e.target.value)
    }
    let genderData=(e)=>{
        setgender(e.target.value)
    }
    let passwordData=(e)=>{
        setpassword(e.target.value)
    }
    let RewritepasswordData=(e)=>{
        setrewritepassword(e.target.value)
    }

    let formHandle=(e)=>{
        e.preventDefault()
        let payload={Fullname,Emailid,Phonenumber,dob,gender,password,}

        if(Fullname.length==0||Emailid.length==0||Phonenumber.length==0||dob.length==0||gender.length==0||password.length==0||Rewritepassword.length==0){
            setError(true)
        }
        if(Fullname&&Emailid&&Phonenumber&&dob&&gender&&password&&Rewritepassword)
        {
        console.log("Full Name: ",Fullname,"\nEmail id: ",Emailid,"\nphonenumber: ",Phonenumber,"\ndob: ",dob,"\ngender: ",gender,"\npassword: ",password,"\nRewritepassword: ",Rewritepassword)
        Navigate("/");
        }
       
        
        if(password!=Rewritepassword){
            setError(true);
            //Navigate("/")
        }

       else{
        axios.post("http://localhost:3000/sainath",payload)
        .then(()=>{
            console.log("Data has been Added");
        })
        // Navigate("/")
       }
    }
  return (
    <section>
        <div id='nav'>
        <img src={pc} alt="" />
        <h3 > Admin Registration Portal</h3>
        </div>
        <br /><br />
        <div id='l1'>
        <img src={pic} alt="" />
        </div>

        <div id='new'>
        <table> 
       <tr>
            <td><label htmlFor="">User Name : </label></td>
            <td><input type="text" placeholder='User name' value={Fullname} onChange={NameData} required="required"/></td>
        </tr>
        {error&&Fullname.length<=0?
               <label id='error'>User Name can't be Empty</label>:""}
        <tr>
            <td><label htmlFor="">Company Id : </label></td>
            <td>
                <input type="number" placeholder='Id Number'value={gender} onChange={genderData} required="required"/>
            </td>
        </tr>
        {error&&Emailid.length<=0?
               <label id='error'>Company id can't be Empty</label>:""}
        <tr>
            <td><label htmlFor="">Email Id : </label></td>
            <td><input type="email" placeholder='abc@gmail.com' value={Emailid} onChange={mailData} required="required"/></td>
        </tr>
        {error&&Emailid.length<=0?
               <label id='error'>Email id can't be Empty</label>:""}
        <tr>
            <td><label htmlFor="">Phone Number : </label></td>
            <td><input type="number"  placeholder='contact number' value={Phonenumber} onChange={phoneData} required="required"/></td>
        </tr>
        {error&&Phonenumber.length<=0?
               <label id='error'> Number can't be Empty</label>:""}
        <tr>
            <td><label htmlFor="">D.O.B : </label></td>
            <td><input type="date" value={dob} onChange={dobData} required="required" /></td>
        </tr>
        {error&&dob.length<=0?
               <label id='error'>DOB can't be Empty</label>:""}
        <tr>
            <td><label htmlFor="">Password : </label></td>
            <td><input type="password"  placeholder='strong Password' value={password} onChange={passwordData} required="required"/> </td>
        </tr>
        {error&&password.length<=0?
               <label id='error'>Password can't be Empty</label>:""}
        <tr>
            <td><label htmlFor="">Rewrite passoword : </label></td>
            <td><input type="password" placeholder='conform password'value={Rewritepassword} onChange={RewritepasswordData} required="required"/></td>
        </tr>
        {error&&Rewritepassword.length<=0?
               <label id='error'>Rewrite Password can't be Empty</label>:""}<br />
        
        <tr id='def'>
            <button onClick={formHandle}>
                Submit
            </button>
        </tr>
      
      </table>
        </div>
    </section>
  )
}

export default NewRegister
