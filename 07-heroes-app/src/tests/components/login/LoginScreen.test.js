import React from 'react';
import { mount } from 'enzyme';
import { LoginScreen } from '../../../components/login/LoginScreen';
import { AuthContext } from '../../../auth/AuthContext';
import { types } from '../../../types/types';

describe('Tests for <LoginScreen />', () => {

    const history = {
        replace: jest.fn()
    }

    const contextValue = {
        dispatch: jest.fn()
    }


    const wrapper = mount(
        <AuthContext.Provider value={ contextValue }>
            <LoginScreen history={ history }/>
        </AuthContext.Provider>
    );

    test('should match the snapshot', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('should do the dispatch and the navigation', () => {
       
        const handleClick = wrapper.find("button").prop("onClick");

        // Se hace click sin un lastPath
        handleClick();
        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.login,
            payload: {
                name: "Sebastián"
            }
        });

        expect(history.replace).toHaveBeenCalledWith("/");

        // Se simula que se guarda un lastPath
        localStorage.setItem("lastPath", "/dc");
        handleClick();
        expect(history.replace).toHaveBeenCalledWith("/dc");
    });
    
    

});
