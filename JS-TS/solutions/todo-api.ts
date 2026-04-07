import {InMemoryRepository} from './repository';
import {NewTodo, Todo, TodoStatus} from './types';

export class TodoApi {
    private repo = new InMemoryRepository<Todo>();
    private counter = 0;

    async getAll(): Promise<Todo[]> {
        return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(this.repo.findAll());
                }, 300);
            }
        );
    }

    async add(newTodo: NewTodo): Promise<Todo> {
        return new Promise((resolve) => {
            setTimeout(() => {
                const todo: Todo = {
                    id: this.counter++,
                    title: newTodo.title,
                    description: newTodo.description,
                    status: TodoStatus.PENDING,
                    createdAt: new Date()
                }
                resolve(this.repo.add(todo));
            }, 300);
        })
    }

    async update(id: number, update: Partial<Omit<Todo, 'id' | 'createdAt'>>): Promise<Todo> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (this.repo.findById(id)) {
                    resolve(this.repo.update(id, update));
                } else {
                    reject(new Error("task not found"));
                }
            }, 300);
        })
    }

    async remove(id: number): Promise<void> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (this.repo.findById(id)) {
                    this.repo.remove(id);
                    resolve();
                } else {
                    reject(new Error("task not found"));
                }
            }, 300);
        })
    }
}
