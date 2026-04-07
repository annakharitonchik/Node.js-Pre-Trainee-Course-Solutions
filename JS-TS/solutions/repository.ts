export class InMemoryRepository<T extends { id: number }> {
    // private storage
    private items: T[] = [];

    add(entity: T): T {
        this.items.push(entity);
        return entity;
    }

    update(id: number, patch: Partial<T>): T {
        const index = this.items.findIndex((el) => el.id === id)
        const newElem = {...this.items[index]}
        Object.entries(patch).forEach(([key, value]) => newElem[key] = value);
        this.items[index] = newElem
        return newElem;
    }

    remove(id: number): void {
        this.items = this.items.filter((el) => el.id !== id)
    }

    findById(id: number): T | undefined {
        return this.items.find((el) => el.id === id);
    }

    findAll(): T[] {
        return this.items;
    }
}
