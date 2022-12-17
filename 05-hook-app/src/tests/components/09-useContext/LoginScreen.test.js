import { mount } from 'enzyme';
import React from 'react';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';


describe('Tests for <LoginScreen />', () => {

    const user = {
        id: 123,
        name: "Seba"
    };
    const setUser = jest.fn();
   
    // El mount es para renderizar todo -> ejemplo: el snapshot
    // con shallow mostraría solo <LoginScreen />, no lo que contiene
    // dentro LoginScreen y no se podría acceder a esto con find
    const wrapper = mount(
        <UserContext.Provider value={{
            setUser
        }}>
            <LoginScreen />
        </UserContext.Provider>
    );
   
    test('should match the snapshot', () => {
       
        expect(wrapper).toMatchSnapshot();

    });

    test('should execute setUser with the correct argument', () => {
       
        wrapper.find("button").simulate("click");
        expect(setUser).toHaveBeenCalledTimes(1);
        expect(setUser).toHaveBeenCalledWith(user);

    });
    
    

});
