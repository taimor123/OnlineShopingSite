import React, { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import styles from "./signs.module.css";

function Login() {

    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/signup",{
                email,password
            })
            .then(res=>{
                if(res.data==="exist"){
                    alert("User already exists")
                }
                else if(res.data==="notexist"){
                    history("/home",{state:{id:email}})
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
        <div className="login">
            <div className={styles.signup_container}>
                <div className={styles.signup_form_container}>   
                    <div className={styles.left}>
                        <h1>Welcome Back</h1>
                        <Link to="/">
                            <button type="button" className={styles.white_btn}>
                                Sing in
                            </button>
                        </Link>
                    </div>
                    <div className={styles.right}>
                        <form action="POST" className={styles.form_container}>
                            <h1>Create Account</h1>
                            <input type="email" 
                            onChange={(e) => { setEmail(e.target.value) }} 
                            placeholder="Email"
                            className={styles.input}  />
                            <input 
                            type="password" 
                            onChange={(e) => { setPassword(e.target.value) }} 
                            placeholder="Password" 
                            className={styles.input}/>
                            <input 
                            type="submit" 
                            onClick={submit} 
                            className={styles.green_btn}
                            value="Sign Up" />

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login