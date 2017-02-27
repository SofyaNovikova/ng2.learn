import { Component } from '@angular/core';
import { User } from './shared/models/User';

@Component({
    selector: 'my-app',
    template: `
    <header>
      <nav class="navbar navbar-inverse">
        <div class="nav-bar header">
          <a class="navbar-brand" href="/">My Angular 2 App</a>
        </div>
      </nav>
    </header>
    <main>
      <div class="row">
        <div class="col-sm-4">
          <div *ngIf="users">
            <ul class="list-group users-list">
              <li class="list-group-item"
                  *ngFor="let user of users"
                  (click)="selectUser(user)"
                  [class.active]="user === activeUser">
                {{ user.name }} ({{ user.username }})
              </li>
            </ul>
          </div>
        </div>


      <div class="col-sm-8">
        <div class="jumbotron" *ngIf="activeUser">
          <h2> {{ activeUser.name }}
                <small> {{ activeUser.username }} </small>
          </h2>
        </div>

        <div class="jumbotron" *ngIf="!activeUser">
          <span class="glyphicon glyphicon-hand-left"></span>
          <h2> Choose a user </h2>
        </div>
      </div>
    </div>
    </main>
    <footer class="text-center">
      Copyright Sofya Novikova &copy; 2017
    </footer>
  `,
    styles: [`
      .jumbotron {
        padding-left: 2%;
        padding-right: 2%;
      }
      .users-list {
        cursor: pointer;
      }

      li.active {

      }

      .jumbotron .glyphicon {
        font-size: 60px;
      }

  `]
})
export class AppComponent {
    message: string = 'Hello!';
    users: User[] = [
      {
        id: 1,
        name: "John Smith",
        username: "JSmith"
      },
      {
        id: 2,
        name: "Jane Collins",
        username: "Collins_J"
      },
      {
        id: 3,
        name: "Brad Pitt",
        username: "Brad.Pitt"
      }
    ];
    activeUser: User;

    selectUser(user) {
      this.activeUser = user;
    }
}
