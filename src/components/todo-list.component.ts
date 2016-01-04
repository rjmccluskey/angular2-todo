import {Component} from 'angular2/core';
import 'rxjs/operator/map';

import {Todo} from '../models/todo';

@Component({
  selector: 'todo-list',
  moduleId: module.id,
  templateUrl: '../templates/todo-list.component.html'
})
export class TodoListComponent {
    public todos: Todo[] = TODOS;
}

var TODOS: Todo[] = [
    {id: 1, content: 'todo 1'},
    {id :2, content: 'todo 2'}
]