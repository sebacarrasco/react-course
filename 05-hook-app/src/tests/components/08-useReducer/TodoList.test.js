import { demoTodos } from "../../fixtures/demoTodos";
import React from 'react';
import { shallow } from "enzyme";
import { TodoList } from "../../../components/08-useReducer/TodoList";

describe('Tests for <TodoList />', () => {
   
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(<TodoList
        todos={ demoTodos }
        handleDelete={ handleDelete }
        handleToggle={ handleToggle }
    />);

    test('should match the snapshot', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('should have two list items', () => {
        
        expect(wrapper.find("TodoListItem").length).toBe(demoTodos.length);

        expect(wrapper.find("TodoListItem").at(0).prop("handleDelete")).toEqual(expect.any(Function));
    });
    
    

});
