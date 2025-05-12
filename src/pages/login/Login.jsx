import '../login/login.css';
import logo from '../../assets/logo.png'
import { useState } from 'react';

const Login = () => {
  const [sign, setSign] = useState("Sign In");
  
  return (  
    <div className='login-content'>

        <div className='login-form'>
            <h1>{sign}</h1>

            <form>
              {sign === "Sign In" ? <></>
               : <input type="text" placeholder='Your Name'/> }
                
                <input type="email" placeholder='Your Email'/>
                <input type="password" placeholder='Passwords'/>

                <button>Sign In</button>

                <div className='form-helping'>
                    <div className='remember'>
                        <input type="checkbox" />
                        <label htmlFor="">Remember Me</label>
                    </div>
                    
                    <p>Need Help?</p>
                </div>
                <div className='form-switch'>
                    {sign === "Sign In" ? <p>New Account? <span onClick={() => setSign ("Sign Up")}>Sign Up Now</span></p> 
                    : <p>Already have account? <span onClick={() => setSign("Sign In")}>Sign In Now</span></p> }
                    
                    
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login