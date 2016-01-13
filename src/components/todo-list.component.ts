import {Component} from 'angular2/core';
import 'rxjs/operator/map';

import {TodosService} from '../services/todos.service';
import {Todo} from '../models/todo';

@Component({
  selector: 'todo-list',
  moduleId: module.id,
  templateUrl: '../templates/todo-list.component.html'
})
export class TodoListComponent {
    private _todosService: TodosService;
    public todos: Todo[];
    public newTodo: Todo;
    
    constructor(TodosService: TodosService) {
        this._todosService = TodosService;
        this.todos = this._todosService.todos;
        this.newTodo = {id: this._todosService.getNewId(), content: ''};
    }
    
    addTodo(todo: Todo) {
        if (todo.content) {
            this._todosService.addTodo(todo);
            this.resetTodo(todo);
        }
    }
    
    private resetTodo(todo: Todo) {
        todo.id = this._todosService.getNewId();
        todo.content = '';
    }
}
