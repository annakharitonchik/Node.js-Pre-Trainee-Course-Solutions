import { TodoService } from './todo-service';
import { TodoApi } from './todo-api';
import { Todo } from './types';

export class ToDoManager {
  private service = new TodoService(new TodoApi());

  async init(): Promise<void> {
      await this.service.create("Fitness", "Bike")

  }

  async add(title: string, description = ''): Promise<void> {
    await this.service.create(title, description)

  }

  async complete(id: number): Promise<void> {
      await this.service.toggleStatus(id)

  }

  async list(): Promise<Todo[]> {
    return await this.service.search('')
}
}
