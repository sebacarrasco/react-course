import React from 'react';
import { mount, shallow } from 'enzyme';
import { TodoApp } from '../../../components/08-useReducer/TodoApp';
import { demoTodos } from '../../fixtures/demoTodos';
import { act } from "@testing-library/react"


describe('Tests for <TodoApp />', () => {
   
    const wrapper = shallow(<TodoApp />);
    Storage.prototype.setItem = jest.fn(() => {});


    test('should match the snapshot', () => {
        
        expect(wrapper).toMatchSnapshot();

    });

    test('should add a TODO', () => {
       
        // El mount es para cuando se va a probar toda la aplicación
        const wrapper = mount(<TodoApp />);
        // El act es para cuando se actuaizan react states
        act(() => {
            wrapper.find("TodoAdd").prop("handleAddTodo")(demoTodos[0]);
            wrapper.find("TodoAdd").prop("handleAddTodo")(demoTodos[1]);
        });

        expect(wrapper.find("h1").text().trim()).toBe(`TODO App 2`);
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);

    });

    test('should delete a todo', () => {
       
        wrapper.find("TodoAdd").prop("handleAddTodo")(demoTodos[0]);
        expect(wrapper.find("h1").text().trim()).toBe(`TODO App 1`);
        wrapper.find("TodoList").prop("handleDelete")(demoTodos[0].id);
        expect(wrapper.find("h1").text().trim()).toBe(`TODO App 0`);

    });
    
    
    

});
