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
        this.users = [
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
    }
    AppComponent.prototype.selectUser = function (user) {
        this.activeUser = user;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <header>\n      <nav class=\"navbar navbar-inverse\">\n        <div class=\"nav-bar header\">\n          <a class=\"navbar-brand\" href=\"/\">My Angular 2 App</a>\n        </div>\n      </nav>\n    </header>\n    <main>\n      <div class=\"row\">\n        <div class=\"col-sm-4\">\n          <div *ngIf=\"users\">\n            <ul class=\"list-group users-list\">\n              <li class=\"list-group-item\"\n                  *ngFor=\"let user of users\"\n                  (click)=\"selectUser(user)\"\n                  [class.active]=\"user === activeUser\">\n                {{ user.name }} ({{ user.username }})\n              </li>\n            </ul>\n          </div>\n        </div>\n\n\n      <div class=\"col-sm-8\">\n        <div class=\"jumbotron\" *ngIf=\"activeUser\">\n          <h2> {{ activeUser.name }}\n                <small> {{ activeUser.username }} </small>\n          </h2>\n        </div>\n\n        <div class=\"jumbotron\" *ngIf=\"!activeUser\">\n          <span class=\"glyphicon glyphicon-hand-left\"></span>\n          <h2> Choose a user </h2>\n        </div>\n      </div>\n    </div>\n    </main>\n    <footer class=\"text-center\">\n      Copyright Sofya Novikova &copy; 2017\n    </footer>\n  ",
        styles: ["\n      .jumbotron {\n        padding-left: 2%;\n        padding-right: 2%;\n      }\n      .users-list {\n        cursor: pointer;\n      }\n\n      li.active {\n\n      }\n\n      .jumbotron .glyphicon {\n        font-size: 60px;\n      }\n\n  "]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map