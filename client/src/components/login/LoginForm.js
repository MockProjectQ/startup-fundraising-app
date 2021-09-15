import React from 'react'
import { Link } from 'react-router-dom';

const LoginForm = (props) => {
    const {email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError} = props;
        
    return (
         <section className="login">
             <div className="loginContainer">
                 <label>Email Id</label>
                 <input 
                 type="email"
                 autoFocus 
                 required 
                 value={email} 
                 onChange={(e) => setEmail(e.target.value)}
                 />
                 <p className="errorMsg">{emailError}</p>

                 <label>Password</label>
                 <input 
                 type="password"
                 required 
                 value={password} 
                 onChange={(e) => setPassword(e.target.value)}
                 />
                 <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {
                        <>
                        <button className='loging-button' onClick={handleLogin}>Sign IN</button>
                        <p>Don't have an account? 
                        <Link to ='/signup'><span onClick={handleSignup}>Sign UP</span></Link>
                        <br/>
                        <br/>
                        <Link to='admin/dashboard'><button onClick={handleLogin}>Sign IN AS ADMIN</button></Link>
                        </p>
                        </>
                       
                    }
                </div>
             </div>
        </section>
        
    )
}

export default LoginForm
 {/*hasAccount? (
                            <>
                            <button onClick={handleLogin}>Sign IN</button>
                            <p>Don't have an account? 
                            <span onClick={()=>setHasAccount(!hasAccount)}>Sign UP</span>
                            
                            </p>
                            </>
                        ):(
                            <>
                            <button onClick={handleSignup}>SIgn up</button>
                            <p>Have an account? 
                            <span onClick={()=>setHasAccount(!hasAccount)}>Sign IN</span>
                            </p>
                            </>
                        )*/}