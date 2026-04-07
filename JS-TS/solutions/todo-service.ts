import {TodoApi} from './todo-api';
import {Todo, TodoStatus} from './types';

export class TodoService {
    constructor(private readonly api: TodoApi) {

    }

    async create(title: string, description = ''): Promise<Todo> {
        return this.api.add({title: title, description: description})
    }

    async toggleStatus(id: number): Promise<Todo> {
        const elements = await this.api.getAll()
        let newStatusElem = elements.find(el => el.id === id);
        if (newStatusElem.status === TodoStatus.IN_PROGRESS)
            return await this.api.update(id, {status: TodoStatus.COMPLETED})
        else {
            return await this.api.update(id, {status: TodoStatus.IN_PROGRESS})
        }
    }

    async search(keyword: string): Promise<Todo[]> {
        const elements = await this.api.getAll()
        return elements.filter((el) => (el.title.toLowerCase().includes(keyword.toLowerCase()) ||
            el.description.toLowerCase().includes(keyword.toLowerCase()))
        )

    }
}