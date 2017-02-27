"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.message = 'Hello!';
        this.users = [{
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
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <header>\n      <nav class=\"navbar navbar-inverse\">\n        <div class=\"nav-bar header\">\n          <a class=\"navbar-brand\" href=\"/\">My Angular 2 App</a>\n        </div>\n      </nav>\n    </header>\n    <main>\n      <div class=\"jumbotron\">\n        <h1>Welcome to our app </h1>\n        <p>{{ message }}</p>\n      </div>\n      <div *ngIf=\"users\">\n        <div *ngFor=\"let user of users\">\n          {{ user.name }} ({{ user.username }})\n        </div>\n      </div>\n    </main>\n    <footer class=\"text-center\">\n      Copyright Sofya Novikova &copy; 2017\n    </footer>\n  ",
        styles: ["\n    .jumbotron {\n      box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2);\n      height: 200px;\n      padding-left: 1%;\n    }\n\n  "]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map