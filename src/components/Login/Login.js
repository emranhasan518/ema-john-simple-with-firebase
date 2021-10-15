import React from 'react';
import { Link, useLocation, useHistory} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {

    const { signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/'

    const handleGoogleLogIn =()=>{
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri);
        })
    }

    return (
        <div className="login-form">
            <div>
                <h2>Log-In</h2>
                <form>
                    <input type="email" name="" id="" placeholder="enter your email"/><br />
                    <input type="password" name="" id="" /><br />
                    <input type="submit" value="SUbmit" />
                </form>
                <p>New to ema-john website? <Link to="/register">Creatre Account</Link></p>
                <div>_____________________</div>
                <button 
                className="btn-regular"
                onClick={handleGoogleLogIn}
                >Google Log-in</button>
            </div>
        </div>
    );
};

export default Login;