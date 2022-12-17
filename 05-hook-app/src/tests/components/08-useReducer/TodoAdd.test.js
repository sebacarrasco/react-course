import { shallow } from 'enzyme';
import React from 'react';
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';

describe('Tests for <TodoAdd />', () => {

    const handleAddTodo = jest.fn();
    const wrapper = shallow(<TodoAdd handleAddTodo={ handleAddTodo }/>);
    const value = 'A task';

    test('should match the snapshot', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('should not call handleAddTodo', () => {
       
        // wrapper.find("form").simulate("submit", { preventDefault: () => {} });
        // Otra forma para simular el submit:
        const formSubmit = wrapper.find("form").prop("onSubmit"); // Esto retorna una función
        formSubmit({ preventDefault: () => {} });

        expect(handleAddTodo).toHaveBeenCalledTimes(0);
    });
    
    test('should call the function handleAddTodo', () => {

        const input = wrapper.find("input");
        input.simulate('change', { target: { value, name: 'description' } });
        wrapper.find("form").simulate("submit", { preventDefault: () => {} });
        expect(handleAddTodo).toHaveBeenCalledTimes(1);
        expect(handleAddTodo).toHaveBeenCalledWith({ desc: value, done: false , id: expect.any(Number)});
        expect(input.prop("value")).toBe("");
        
    });
    
    

    
});
