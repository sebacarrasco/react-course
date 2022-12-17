import { mount } from "enzyme";
import React from 'react';
import { AuthContext } from "../../auth/AuthContext";
import { AppRouter } from "../../routers/AppRouter";

describe('Tests for <AppRouter />', () => {
   
    const contextValue = {
        user: {
            logged: false
        },
        dispatch: jest.fn()
    }

    test('should the login if the user is not authenticated', () => {
        
        // Nuevamente estamos haciendo mount porque el approuter está
        // envuelto en un high order component
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <AppRouter />
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();

    });

    test('should show the marvel component if the user is authenticated', () => {
       
        const contextValue = {
            user: {
                logged: true,
                name: "Sebastián"
            },
            dispatch: jest.fn()
        }

        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <AppRouter />
            </AuthContext.Provider>
        );

        expect(wrapper.find("Navbar").exists()).toBe(true);

    });
    
    

});
