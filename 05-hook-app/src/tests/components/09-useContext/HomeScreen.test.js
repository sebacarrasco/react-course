import React from 'react';
import { mount } from 'enzyme';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Tests for <HomeScreen />', () => {

    const user = {
        name: "Sebastián",
        email: "seba@uc.cl"
    }
   
    // El mount es para renderizar todo -> ejemplo: el snapshot
    // con shallow mostraría solo <HomeScreen />, no lo que contiene
    // dentro HomeScreen y no se podría acceder a esto con find
    const wrapper = mount(
        <UserContext.Provider value={{
            user
        }}>
            <HomeScreen />
        </UserContext.Provider>
    );

    test('should match the snapshot', () => {
        
        expect(wrapper).toMatchSnapshot();

    });
    

});
