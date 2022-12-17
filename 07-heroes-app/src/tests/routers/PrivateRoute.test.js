import React from 'react';
import { mount } from 'enzyme';
import { PrivateRoute } from '../../routers/PrivateRoute';
import { MemoryRouter } from 'react-router-dom';


describe('Tests for <PrivateRoutes />', () => {

    const props = {
        location: {
            pathname: "/marvel"
        }
    }

    Storage.prototype.setItem = jest.fn();
   
    test('should render the component if the user is authenticated and save lastPath with local storage', () => {
        
        // Se debe usar mount porque se está usando un high order component para envolver el PrivateRouter.
        // El wrapper.find("span") no encontraría al span si se hiciera con shallow.
        const wrapper = mount(
            // MemoryRoutter es para hacer pruebas de routes
            <MemoryRouter>
                <PrivateRoute
                    isAuthenticated={ true }
                    // Nótese que nos interesa ver que se muestre el componente, por lo que
                    // puede ser cualquier componente. Pero ojo que en los proptypes pide que sea
                    // una función, por lo que mandamos una función que retorna un sencillo componente
                    component={ () => <span>Testing logged</span> }
                    { ...props }
                />
            </MemoryRouter>
        );

        expect(wrapper.find("span").exists()).toBe(true);
        expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", props.location.pathname);

    });


    test('should not render the component if the user is not authenticated', () => {
       
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute
                    isAuthenticated={ false }
                    component={ () => <span>Testing logged</span> }
                    { ...props }
                />
            </MemoryRouter>
        );

        expect(wrapper.find("span").exists()).toBe(false);
        expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", props.location.pathname);

    });
    
    


});
