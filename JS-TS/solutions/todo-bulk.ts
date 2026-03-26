import {Todo, TodoStatus} from './types';

export function toggleAll(state: Todo[], completed: boolean): Todo[] {
    const stateCopy: Todo[] = JSON.parse(JSON.stringify(state))
    stateCopy.map((item) => {
        if (completed) {
            item.status = TodoStatus.COMPLETED
            return item

        } else {
            item.status = TodoStatus.IN_PROGRESS
            return item
        }
    })
    return stateCopy
}

export function clearCompleted(state: Todo[]): Todo[] {
    return state.filter((item) => item.status !== TodoStatus.COMPLETED)

}

export function countByStatus(state: Todo[], status: TodoStatus): number {
    return state.reduce((acc, item) => {
        if (item.status === status) {
            acc++;
        }
        return acc
    }, 0)
}
