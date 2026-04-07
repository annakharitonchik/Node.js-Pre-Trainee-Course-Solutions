import {TodoService} from "../JS-TS/solutions/todo-service";
import {TodoApi} from "../JS-TS/solutions/todo-api";
describe('Task 08: TodoService', () => {
    jest.setTimeout(10000);
    const service = new TodoService(new TodoApi());

    it('create should create a todo', async () => {
        const created = await service.create("Shopping", "Buy fruits");
        expect(created.title).toBe("Shopping");
        expect(created.description).toBe("Buy fruits");
    });

    it('toggleStatus should change status', async () => {
        await service.create("Shopping", "Buy coffee");
       await service.create("Shopping", "Buy vegetables");
        await service.create("Shopping", "Buy milk");
        const [todo] = await service.search('shopping');
        const toggled = await service.toggleStatus(todo.id);
        expect(toggled.status).not.toBe(todo.status);
    });
    it('toggleStatus should throw an error', async () => {
        expect(service.toggleStatus(-1)).rejects.toThrow();
    });

    it('search should return matching items', async () => {
        const list = await service.search('BUY');
        expect(list.length).toBeGreaterThan(0);
    });
});
