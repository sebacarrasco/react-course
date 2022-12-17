import React from 'react';
import { demoTodos } from '../../fixtures/demoTodos';
import { shallow } from "enzyme";
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';

describe('Tests in <TodoListItem />', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();
    const todo = demoTodos[0];
    const index = 0;

    let wrapper = shallow(<TodoListItem
        todo={ todo }
        index={ index }
        handleDelete={ () => {} }
        handleToggle={ () => {} }
    />);
    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<TodoListItem
            todo={ todo }
            index={ index }
            handleDelete={ handleDelete }
            handleToggle={ handleToggle }
        />);
    });
    

    test('should match the snapshot', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('should call the handleDelete function', () => {

        wrapper.find("button").simulate("click");
        expect(handleDelete).toHaveBeenCalledWith(todo.id);

    });

    test('should call the handleToggle function', () => {

        wrapper.find("p").simulate("click");
        expect(handleToggle).toHaveBeenCalledWith(todo.id);
        
    });

    test('should show the text correctly', () => {

        const parragraphText = wrapper.find("p").text().trim();
        expect(parragraphText).toBe(`${ index + 1 }. ${ todo.desc }`)
        
    });

    test('should have the complete class if todo.done is true', () => {
       
        todo.done = true;
        const wrapper = shallow(<TodoListItem
            todo={ todo }
            index={ index }
            handleDelete={ handleDelete }
            handleToggle={ handleToggle }
        />);

        // const {className} = wrapper.find("p").props();
        // expect(className).toContain("complete");
        // Lo comentado es equivalente a:
        expect(wrapper.find("p").hasClass("complete")).toBe(true);
        
    });
    
    
    
    
});
