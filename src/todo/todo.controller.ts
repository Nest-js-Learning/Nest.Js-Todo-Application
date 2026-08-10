import { Body, Controller, Delete, Get, Param, Post, } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
    constructor(private todoservice:TodoService){ }
    @Get()
    getalltodo(){ 
        return this.todoservice.getalldata()
    }
    @Post("/create")
    createTodo(@Body() data){ 
        return this.todoservice.createtodo(data)
    }
    @Delete(":id")
    delteTodo(@Param('id')id:number){ 
        return this.todoservice.deletetodo(id)
    }
}
