import {Component} from 'angular2/core';
import 'rxjs/operator/map';

import {TodoListComponent} from './components/todo-list.component';

@Component({
    selector: 'app',
    moduleId: module.id,
    template: `
        <h1>{{title}}</h1>
        <todo-list></todo-list>
    `,
    directives: [TodoListComponent]
})
export class AppComponent {
    public title:string = 'Todos:'
}