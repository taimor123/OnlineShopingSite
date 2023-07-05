import React, { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import styles from "./log.module.css";

function Login() {

    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/",{
                email,password
            })
            .then(res=>{
                if(res.data==="exist"){
                    history("/home",{state:{id:email}})
                }
                else if(res.data==="notexist"){
                    alert("User have not sign up")
                }
            })
            .catch(e=>{
                history("/home",{state:{id:email}})
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
        <div className="login">
            <div className={styles.login_container}>
                <div className={styles.login_form_container}>
                    <div className={styles.left}>
                        <form action="POST" className={styles.form_container}>
                            <h1>Login to Your Account</h1>
                            <input 
                            type="email"
                            onChange={(e) => { setEmail(e.target.value) }}
                            placeholder="Email"
                            className={styles.input}  />

                            <input 
                            type="password"
                            onChange={(e) => { setPassword(e.target.value) }} 
                            placeholder="Password" 
                            className={styles.input} />
                            <input 
                            type="submit" 
                            onClick={submit} 
                            className={styles.green_btn}
                            value="Login"  />

                        </form>
                    </div>
                    <div className={styles.right}>
                        <h1>New Here ?</h1>
                        <Link to="/signup">
                            <button type="button" className={styles.white_btn}>
                                Sign Up
                            </button>
                        </Link>
                    </div>
                </div>
            
            </div>
        </div>
    )
}

export default Login