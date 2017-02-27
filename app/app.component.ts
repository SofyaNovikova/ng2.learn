import { Component } from '@angular/core';

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
      <div class="jumbotron">
        <h1>Welcome to our app </h1>
        <p>{{ message }}</p>
      </div>
      <div *ngIf="users">
        <div *ngFor="let user of users">
          {{ user.name }} ({{ user.username }})
        </div>
      </div>
    </main>
    <footer class="text-center">
      Copyright Sofya Novikova &copy; 2017
    </footer>
  `,
    styles: [`
    .jumbotron {
      box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2);
      height: 200px;
      padding-left: 1%;
    }

  `]
})
export class AppComponent {
  message = 'Hello!';
  users = [{
    id: 1,
    name: "user 1",
    username: "user1"
  },
  {
    id: 2,
    name: "user 2",
    username: "user2"
  },
  {
    id: 3,
    name: "user 3",
    username: "user3"
  }
];
}
