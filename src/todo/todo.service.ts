import { Injectable } from '@nestjs/common';
import { CreaeTodo, UpdateTodo } from './todo.dto';

export interface Todo {
    createdAt: number,
    name: string,
    task: string,
    desc: string
}

@Injectable()
export class TodoService {


    private data: Todo[] = [];


    getalldata() {
        return this.data
    }
    createtodo(data: CreaeTodo) {
        const newdata = {
            ...data,
            createdAt: Date.now()
        }
        const result = this.data.push(newdata)
        return this.data
    }
    updateTodo(data: UpdateTodo) {

    }
    deletetodo(id) {
        const filter = this.data.filter((item) => item.createdAt !== id)
        return filter
    }


}
