import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreaeTodo {
    @IsNotEmpty()
    @IsString()
    name

    @IsNotEmpty()
    @IsString()
    task

    @IsString()
    desc

}

export class UpdateTodo {

    @IsNotEmpty()
    @IsString()
    task

    @IsString()
    desc
}