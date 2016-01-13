import {Injectable} from 'angular2/core';
import {Todo} from '../models/todo';

@Injectable()
export class TodosService {
    public todos: Todo[];
    
    constructor() {
        this.todos = [];
    }
    
    getTodos() {
        return this.todos;
    }
    
    addTodo(todo: Todo) {
        var newTodo: Todo = {id: this.getNewId(), content: todo.content} 
        this.todos.push(newTodo);
    }
    
    getNewId() {
        var id = 1;
        var todoCount = this.todos.length;
        if (todoCount) {
            id = this.todos[todoCount -1].id + 1;
        }
        return id;
    }
}