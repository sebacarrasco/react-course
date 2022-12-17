import { mount } from "enzyme";
import React from 'react';
import { MemoryRouter, Router } from "react-router-dom";
import { AuthContext } from "../../../auth/AuthContext";
import { Navbar } from "../../../components/ui/Navbar";
import { types } from "../../../types/types";


describe('Tests for <Navbar />', () => {

    // El mock del history se llenó dependiendo de lo que decían los errores
    // (decían que faltaba listen por ejemplo)
    const historyMock = {
        push: jest.fn(),
        replace: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn()
    }
   
    const contextValue = {
        user: {
            logged: true,
            name: "Sebastián"
        },
        dispatch: jest.fn()
    }

    const wrapper = mount(
        <AuthContext.Provider value={ contextValue }>
            <MemoryRouter>
                <Router history={ historyMock }>
                    <Navbar />
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    );

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('should show corectly', () => {

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(".text-info").text().trim()).toBe("Sebastián");
    
    });
    

    test('should call Handlelogout and use history', () => {
       
        wrapper.find("button").simulate("click");
        expect(contextValue.dispatch).toHaveBeenCalledWith({ type: types.logout });
        expect(historyMock.replace).toHaveBeenCalledWith("/login");
        
    });
    


});
