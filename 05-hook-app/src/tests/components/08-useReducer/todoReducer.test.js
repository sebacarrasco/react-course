import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from "../../fixtures/demoTodos";


describe('Tests in todoReducer', () => {
   
    test('should return the default state', () => {
       
        const state = todoReducer(demoTodos, {});
        expect(state).toEqual(demoTodos);

    });
    
    test('should return the default state', () => {
        const payload = {
            id: 3,
            desc: "Learn something", 
            done: false
        };

        const state = todoReducer(demoTodos, {
            type: "add",
            payload
        });

        expect(state.length).toBe(demoTodos.length + 1);
        expect(state).toEqual([...demoTodos, payload]);

    });

    test('should delete a todo', () => {
        
        const state = todoReducer(demoTodos, {
            type: "delete",
            payload: 1
        });

        expect(state).not.toContain(demoTodos[0]);
        expect(state.length).toBe(demoTodos.length - 1);
    });

    test('should toggle the "done" property', () => {
        
        const state = todoReducer(demoTodos, {
            type: "toggle",
            payload: 1
        });

        expect(state[0].done).toBe(true);
        expect(state[1]).toEqual(demoTodos[1]);

    });
    
    
});
