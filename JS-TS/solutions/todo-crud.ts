import {Todo} from './types';

export function addTodo(state: Todo[], todo: Todo): Todo[] {
    const stateCopy: Todo[] = JSON.parse(JSON.stringify(state));
    stateCopy.push(todo)
    return stateCopy;
}

export function updateTodo(state: Todo[], id: number, update: Partial<Omit<Todo, 'id' | 'createdAt'>>): Todo[] {

    const stateCopy: Todo[] = JSON.parse(JSON.stringify(state));
    const todoArr = stateCopy.filter((el) => el.id === id);
    if (!todoArr) {
        throw new Error("todo not found")
    }
    const todo = todoArr[0];
    todo.title = update.title;
    todo.description = update.description;
    todo.status = update.status;
    return stateCopy;
}

export function removeTodo(state: Todo[], id: number): Todo[] {
    const stateCopy: Todo[] = JSON.parse(JSON.stringify(state));
    const filteredArr = stateCopy.filter((el) => el.id !== id);
    if (filteredArr.length === stateCopy.length) {
        throw new Error("todo not found")
    }
    return filteredArr;
}

export function getTodo(state: Todo[], id: number): Todo | undefined {
    return state.filter((el) => el.id === id)[0];
}
