// Declares a dependency on JS modules.
import { Component } from '@angular/core';
import { TodoList } from "./todoList";
import { TodoItem } from "./todoItem";

// Provides metadata about a class (i.e. config info).
@Component({
  selector: 'app-root', // CSS selector that matches HTML tag to which the component will be applied
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

// The component defines the properties that the template requires.
export class AppComponent {
  title = 'todo';
  private list = new TodoList('Aurèle', [
    new TodoItem("Finish the UBC website", true),
    new TodoItem('Write some unit tests'),
    new TodoItem('Learn Angular'),
    new TodoItem('Write a word document for the jury'),
    new TodoItem('Buy INCOSE book related to SysML v2', true),
  ]);

  get username(): string {
    return this.list.user;
  }

  get itemCount(): number {
    return this.list.items.filter(item => !item.complete).length;
  }
}
