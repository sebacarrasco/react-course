import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { DashboardRoutes } from '../../routers/DashboardRoutes';
import { AuthContext } from '../../auth/AuthContext';

describe('Tets for <DashboardRoutes />', () => {
   
    const contextValue = {
        user: {
            logged: true,
            name: "Sebastián"
        },
        dispatch: jest.fn()
    }
    test('should match the snapshot', () => {
       
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(".text-info").text().trim()).toBe("Sebastián");

    });
    

});
