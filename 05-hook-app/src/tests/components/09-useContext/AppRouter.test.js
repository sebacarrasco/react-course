import React from 'react';
import { mount } from 'enzyme';
import { AppRouter } from '../../../components/09-useContext/AppRouter';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Tests for <AppRouter />', () => {
   
    const user = {
        name: "Sebastián",
        email: "seba@uc.cl"
    }

    const wrapper = mount(
        <UserContext.Provider value={{
            user
        }}>
            <AppRouter />
        </UserContext.Provider>
    );

    test('should match the snapshot', () => {
       
        expect(wrapper).toMatchSnapshot();

    });
    

});
