import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import "./effects.css";

export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues)
    };

    return (
        <form onSubmit={ handleSubmit }>
            <h1>FormWithCustomHook</h1>
            <hr/>

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your name"
                    autoComplete="off"
                    value= { name }
                    onChange={ handleInputChange }
                />
            </div>

            <br></br>

            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="email@uc.cl"
                    autoComplete="off"
                    value= { email }
                    onChange={ handleInputChange }
                />
            </div>

            <br></br>

            <div className="form-group">
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="******"
                    value= { password }
                    onChange={ handleInputChange }
                />
            </div>

            <br></br>

            <button type="submit" className="btn btn-primary">
                Submit
            </button>

        </form>
    )
}
