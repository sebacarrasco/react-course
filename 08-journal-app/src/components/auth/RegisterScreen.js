import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import validator from 'validator'
import { removeRegisterError, setRegisterError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {

    // Este hook es para hacer dispatch de acciones
    // (ya sabe la configuración del store)
    const dispatch = useDispatch();

    // Este hook es para acceder a los states que están en la store
    // Importante mencionar que state es un objeto con tooodos los estados de la store
    const { msgErrorRegister, loading } = useSelector(state => state.ui);

    const [ values, handleInputChange ] = useForm({
        name:'Seba',
        email: 'seba@uc.cl',
        password: '123456',
        password2: '123456'
    });

    const { name, email, password, password2 } = values;

    const handleRegister = (e) => {
        e.preventDefault();
        if( isFormValid() )
        {
            dispatch(startRegisterWithEmailPasswordName(email, password, name));
        }
    }

    const isFormValid = () =>{

        if (name.trim().length === 0)
        {
            dispatch(setRegisterError("Name is required"));
            return false;
        }
        else if (!validator.isEmail(email))
        {
            dispatch(setRegisterError("Email is not valid"));
            return false;
        }
        else if (password !== password2 || password.length <= 5)
        {
            dispatch(setRegisterError("Password should be at least 6 characters long and match each other"));
            return false;
        }
        dispatch(removeRegisterError());
        return true;
    }

    return (
        <>
            <h3 className="auth__title">Register</h3>

            <form
                onSubmit={ handleRegister }
                className="animate__animated animate__fadeIn animate__faster"    
            >

                {   
                    // Solo si el error no es null se muestra el div
                    msgErrorRegister && 
                    (<div className="auth__alert-error">
                        { msgErrorRegister }
                    </div>)
                }         

                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />

                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />
                
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={ password }
                    onChange={ handleInputChange }
                />

                <input
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                    value={ password2 }
                    onChange={ handleInputChange }
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={ loading }
                >
                    Register
                </button>

                <hr />

                <Link to="/auth/login" className="link mt-5">
                    Already registered?
                </Link>

            </form>
        </>
    )
}
