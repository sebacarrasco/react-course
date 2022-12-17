import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import validator from 'validator'
import { removeLoginError, setLoginError } from '../../actions/ui';

export const LoginScreen = () => {

    // Este hook es para hacer dispatch de acciones
    // (ya sabe la configuración del store)
    const dispatch = useDispatch();

    // Este hook es para acceder a los states que están en la store
    // Importante mencionar que state es un objeto con tooodos los estados de la store
    const { msgErrorLogin, loading } = useSelector(state => state.ui);

    const [ values, handleInputChange ] = useForm({
        email:'seba@uc.cl',
        password: "123456"
    });

    const { email, password } = values;

    const handleLogin = (e) => {
        e.preventDefault();
        if (isFormValid())
        {
            dispatch(startLoginEmailPassword(email, password));
        }
    }

    const handleGoogleLogin = () => {
        dispatch( startGoogleLogin() );
    }

    const isFormValid = () =>{
        if (!validator.isEmail(email))
        {
            dispatch(setLoginError("Email is not valid"));
            return false;
        }
        else if (password.length <= 5)
        {
            dispatch(setLoginError("Password should be at least 6 characters long"));
            return false;
        }
        dispatch(removeLoginError());
        return true;
    }

    return (
        <>
            <h3 className="auth__title">Login</h3>

            <form
                onSubmit={ handleLogin }
                className="animate__animated animate__fadeIn animate__faster"
            >

                {   
                    // Solo si el error no es null se muestra el div
                    msgErrorLogin && 
                    (<div className="auth__alert-error">
                        { msgErrorLogin }
                    </div>)
                } 

                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    onChange={ handleInputChange }
                    value={ email }
                />
                
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    onChange={ handleInputChange }
                    value={ password }
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={ loading }
                >
                    Login
                </button>

                <hr />
                
                <div className="auth__social-networks">
                    <p>Login with social networks</p>

                    <div
                    className="google-btn"
                    onClick={ handleGoogleLogin }
                    >
                        <div className="google-icon-wrapper">
                            <img
                                className="google-icon"
                                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                                alt="google button"
                            />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link to="/auth/register" className="link">
                    Create new account
                </Link>

            </form>
        </>
    )
}
