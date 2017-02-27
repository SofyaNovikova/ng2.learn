import { Component } from '@angular/core';
import { User } from './shared/models/User';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
})
export class AppComponent {
    message: string = 'Hello!';
    users: User[] = [
      { id: 1, name: "John Smith", username: "JSmith" },
      { id: 2, name: "Jane Collins", username: "Collins_J" },
      { id: 3, name: "Brad Pitt", username: "Brad.Pitt" }
    ];
    activeUser: User;

    selectUser(user) {
      this.activeUser = user;
    }
}
