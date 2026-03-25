import {NewTodo, Todo, TodoStatus} from './types';

let nextId = 1;

export function createTodo(input: NewTodo): Todo {
    return {
        title: input.title,
        description: input.description,
        id: nextId++,
        createdAt: new Date(),
        status: TodoStatus.PENDING,
    };

}
