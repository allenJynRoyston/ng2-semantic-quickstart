"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ng2_sui_1 = require('../node_modules/ng2-semantic-ui-directives/ng2-sui');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            directives: [
                ng2_sui_1.UISEMANTIC_ALL
            ],
            template: "\n    <div class='ui container'>\n        <br>\n        <h1>Quickstart Angular2 + Semantic UI</h1>\n\n        <br>\n        <div class='ui segment'>\n            <h3>Accordian</h3>\n            <div ui-accordion class=\"ui styled accordion\">\n              <div class=\"title\"><i class=\"dropdown icon\"></i> Level 1</div>\n              <div class=\"content\">Welcome to level 1 </div>\n              <div class=\"title\"><i class=\"dropdown icon\"></i> Level 2</div>\n              <div class=\"content\">Welcome to level 2   </div>\n            </div>\n        </div>\n\n        <br>\n        <div class='ui segment'>\n            <h3>Hover</h3>\n            <div ui-dimmer [options]=\"{on: 'hover'}\" style=\"height: 150px\" class=\"ui segment\">\n              <h3 class=\"ui header\">Hover To Dim</h3>\n              <div class=\"ui dimmer\">\n                <div class=\"content\">\n                  <div class=\"center\">\n                    <h2 class=\"ui inverted icon header\"><i class=\"heart icon\"></i>Dimmed Message!</h2>\n                  </div>\n                </div>\n              </div>\n            </div>\n        </div>\n\n        <br>\n        <div class='ui segment'>\n            <h3>Embed</h3>\n            <div class=\"ui embed\"\n                 ui-embed\n                 [options]=\"{icon: 'video', source: 'youtube', id: 'jcd3ygLQjvQ', placeholder: 'http://img.youtube.com/vi/jcd3ygLQjvQ/0.jpg'}\" >\n            </div>\n        </div>\n\n        <br>\n        <div class='ui segment'>\n            <h3>Tabs</h3>\n            <div ui-tab class=\"ui top attached tabular menu\">\n              <a data-tab=\"a\" class=\"item active\">First</a>\n              <a data-tab=\"b\" class=\"item\">Second</a>\n              <a data-tab=\"c\" class=\"item\">Third</a>\n            </div>\n\n            <div data-tab=\"a\" class=\"ui bottom attached tab segment active\">First</div>\n            <div data-tab=\"b\" class=\"ui bottom attached tab segment\">Second</div>\n            <div data-tab=\"c\" class=\"ui bottom attached tab segment\">Third</div>\n        </div>\n\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map