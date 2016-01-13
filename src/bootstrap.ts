import {bootstrap} from 'angular2/platform/browser';
import {enableProdMode} from 'angular2/core';
import {AppComponent} from './app';
import {TodosService} from './services/todos.service';

enableProdMode();
bootstrap(AppComponent, [TodosService]);